import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Tenta pegar o JSON enviado do Frontend (nome e whatsapp)
        const body = await request.json().catch(() => ({}));
        const { name, whatsapp } = body;

        // The client cannot tamper with prices or redirect URLs.
        const payload: any = {
            handle: "conectamaisdigital",
            items: [
                {
                    quantity: 1,
                    price: 2149,
                    description: "Pack Simplo 2026 - Acesso Imediato"
                }
            ],
            redirect_url: "https://drive.google.com/drive/folders/1yi62no3Y53-3HKI-w-l9FeeXeiD83srX?usp=sharing"
        };

        // Injeta os dados do Cliente no Payload caso tenham sido informados
        if (name || whatsapp) {
            payload.customer = {};
            if (name) payload.customer.name = name;
            if (whatsapp) payload.customer.phone_number = whatsapp;
        }

        const res = await fetch("https://api.infinitepay.io/invoices/public/checkout/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        const data = await res.text();
        let parsed;
        try {
            parsed = JSON.parse(data);
        } catch (e) {
            return new NextResponse(data, { status: res.status });
        }

        return NextResponse.json(parsed, { status: res.status });
    } catch (error: any) {
        return NextResponse.json({ error: "Proxy falhou: " + error.message }, { status: 500 });
    }
}
