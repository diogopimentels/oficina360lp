import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const amount = searchParams.get("amount") || "29.90";
    // Em produção, mova a apiKey para o .env local!
    const apiKey = "bp_erOHgpkmcpVHL6bCk7kl3pXfMaIGOrAx";

    try {
        const res = await fetch(`https://api.bytepaybr.com/api/createPix?apiKey=${apiKey}&amount=${amount}`, {
            method: "GET",
            // Removendo cache para garantir criação em tempo real
            cache: "no-store",
        });

        // Passa adiante o status e a resposta exata da Bytepay
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
