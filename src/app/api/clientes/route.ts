import { NextResponse } from "next/server";
import { getClientes } from "@/lib/db";

// Força não fazer cache dessa rota para o painel admin ver sempre os dados atualizados
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const clientes = getClientes();
        return NextResponse.json({ success: true, clientes });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
