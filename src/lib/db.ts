export interface Cliente {
    id: string;
    nome: string;
    whatsapp: string;
    data: string;
}

const BIN_ID = "bbabfba";
const BIN_URL = `https://extendsclass.com/api/json-storage/bin/${BIN_ID}`;

// Como agora usamos Cloud, a função é async API Call
export async function getClientes(): Promise<Cliente[]> {
    try {
        const res = await fetch(BIN_URL, { cache: "no-store", headers: { 'Cache-Control': 'no-cache' } });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data.clientes) ? data.clientes : [];
    } catch (e) {
        console.error("Erro ao ler clientes do Cloud", e);
        return [];
    }
}

export async function addCliente(nome: string, whatsapp: string) {
    if (!nome && !whatsapp) return;

    // Obtém a lista atual
    const clientes = await getClientes();

    const novo: Cliente = {
        id: Math.random().toString(36).substring(7),
        nome: nome || "Sem Nome",
        whatsapp: whatsapp || "Sem WhatsApp",
        data: new Date().toISOString()
    };

    // Adiciona no topo da lista
    clientes.unshift(novo);

    // Salva na nuvem silencisosamente
    try {
        await fetch(BIN_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ clientes })
        });
    } catch (e) {
        console.error("Erro ao salvar cliente no Cloud", e);
    }
}
