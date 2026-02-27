import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ txId: string }> }) {
    const apiKey = "bp_erOHgpkmcpVHL6bCk7kl3pXfMaIGOrAx";
    const { txId } = await params;

    try {
        const res = await fetch(`https://api.bytepaybr.com/api/status/${txId}?apiKey=${apiKey}`, {
            method: "GET",
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
