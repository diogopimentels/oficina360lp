import { NextResponse } from "next/server";

// TODO: Importar a secret key da dLocal para validar a assinatura do webhook
// const DLOCAL_WEBHOOK_SECRET = process.env.DLOCAL_WEBHOOK_SECRET;

export async function POST(request: Request) {
    try {
        const payload = await request.json();

        // TODO: Validar a assinatura do webhook (HMAC) para garantir que veio da dLocal
        // const signature = request.headers.get("x-dlocal-signature");
        // if (!isValidSignature(payload, signature, DLOCAL_WEBHOOK_SECRET)) {
        //     return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
        // }

        const { id, status, order_id, amount, currency } = payload;

        console.log(`[dLocal Webhook] Evento recebido — id: ${id}, status: ${status}, order_id: ${order_id}, amount: ${amount} ${currency}`);

        if (status === "PAID") {
            // =============================================================
            // TODO: Disparar email/whatsapp com o link do Google Drive
            //       entregando o PDF do produto ao cliente.
            //
            // Passos sugeridos:
            // 1. Buscar os dados do cliente (email, whatsapp) usando order_id
            // 2. Montar o link do Google Drive com o PDF
            // 3. Enviar email via SMTP/SendGrid/Resend
            // 4. Enviar mensagem WhatsApp via API (Twilio, Z-API, etc.)
            // =============================================================

            console.log(`[dLocal Webhook] ✅ Pagamento APROVADO para order_id: ${order_id}`);
        }

        if (status === "REJECTED") {
            // TODO: Tratar pagamento rejeitado (logar, notificar admin, etc.)
            console.log(`[dLocal Webhook] ❌ Pagamento REJEITADO para order_id: ${order_id}`);
        }

        if (status === "PENDING") {
            // TODO: Tratar pagamento pendente (ex: boleto ou PSE aguardando confirmação)
            console.log(`[dLocal Webhook] ⏳ Pagamento PENDENTE para order_id: ${order_id}`);
        }

        // Retorna 200 OK para a dLocal não dar timeout / reenviar o webhook
        return NextResponse.json({ received: true }, { status: 200 });

    } catch (error: any) {
        console.error("[dLocal Webhook Error]", error);
        // Mesmo em caso de erro, retorna 200 para evitar retries infinitos da dLocal
        return NextResponse.json({ received: true, error: error.message }, { status: 200 });
    }
}
