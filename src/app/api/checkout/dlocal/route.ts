import { NextResponse } from "next/server";
import { addCliente } from "@/lib/db";

// =============================================
// dLocal Go - Autenticação Bearer
// Formato: Authorization: Bearer <API_KEY>:<SECRET_KEY>
// Docs: https://docs.dlocalgo.com/integration-api/welcome-to-dlocal-go-api/authentication
// =============================================
const DLOCAL_API_KEY = process.env.DLOCAL_API_KEY!;
const DLOCAL_SECRET_KEY = process.env.DLOCAL_SECRET_KEY!;
const DLOCAL_BASE_URL = "https://api.dlocalgo.com";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { name, email, whatsapp } = body;

        // Validação básica dos campos obrigatórios
        if (!name || !email || !whatsapp) {
            return NextResponse.json(
                { error: "Todos los campos son obligatorios: nombre, email y whatsapp." },
                { status: 400 }
            );
        }

        // Salva o cliente silenciosamente no banco de dados interno
        addCliente(name, whatsapp);

        // URL de origem para redirecionamento e webhook
        const origin = request.headers.get("origin") || "http://localhost:3000";

        // Bearer token: API_KEY:SECRET_KEY (conforme docs dLocal Go)
        const bearerToken = `${DLOCAL_API_KEY}:${DLOCAL_SECRET_KEY}`;

        // Payload para a API da dLocal Go
        const dlocalPayload = {
            amount: 19900,
            currency: "COP",
            country: "CO",
            payment_method_flow: "REDIRECT",
            payer: {
                name: name,
                email: email,
                phone: whatsapp,
            },
            order_id: `oficina360_${Date.now()}`,
            description: "Pack Simplo 2026 - Acceso Inmediato",
            notification_url: `${origin}/api/webhook/dlocal`,
            callback_url: `${origin}/obrigado?verify=liberado`,
        };

        const requestBody = JSON.stringify(dlocalPayload);

        console.log("[dLocal Go] POST ->", `${DLOCAL_BASE_URL}/v1/payments`);
        console.log("[dLocal Go] Payload:", requestBody);

        // POST para a API da dLocal Go
        const dlocalResponse = await fetch(`${DLOCAL_BASE_URL}/v1/payments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearerToken}`,
            },
            body: requestBody,
        });

        const responseText = await dlocalResponse.text();
        console.log("[dLocal Go] Response status:", dlocalResponse.status);
        console.log("[dLocal Go] Response body:", responseText);

        let dlocalData;
        try {
            dlocalData = JSON.parse(responseText);
        } catch {
            return NextResponse.json(
                { error: `dLocal Go returned invalid response: ${responseText}` },
                { status: 502 }
            );
        }

        if (!dlocalResponse.ok) {
            return NextResponse.json(
                { error: dlocalData.message || dlocalData.error || `dLocal Go error (${dlocalResponse.status})` },
                { status: dlocalResponse.status }
            );
        }

        // Busca a URL de checkout/redirect na resposta da dLocal Go
        const checkoutUrl = dlocalData.redirect_url || dlocalData.checkout_url || dlocalData.url;

        if (!checkoutUrl) {
            console.error("[dLocal Go] No redirect URL in response:", dlocalData);
            return NextResponse.json(
                { error: "No se recibió URL de checkout de dLocal Go." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            checkout_url: checkoutUrl,
        });

    } catch (error: any) {
        console.error("[dLocal Go Checkout Error]", error);
        return NextResponse.json(
            { error: "Error al crear el link de pago: " + error.message },
            { status: 500 }
        );
    }
}
