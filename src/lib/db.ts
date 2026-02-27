import fs from 'fs';
import path from 'path';
import os from 'os';

const getFilePath = () => {
    // No Vercel/Serverless, o único diretório com permissão de escrita é o /tmp
    return path.join(os.tmpdir(), 'clientes_oficina360.json');
}

export interface Cliente {
    id: string;
    nome: string;
    whatsapp: string;
    data: string;
}

export function getClientes(): Cliente[] {
    const filePath = getFilePath();
    try {
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        console.error("Erro ao ler clientes", e);
        return [];
    }
}

export function addCliente(nome: string, whatsapp: string) {
    if (!nome && !whatsapp) return;

    const clientes = getClientes();
    const novo: Cliente = {
        id: Math.random().toString(36).substring(7),
        nome: nome || "Sem Nome",
        whatsapp: whatsapp || "Sem WhatsApp",
        data: new Date().toISOString()
    };

    // Adiciona no topo da lista (mais recentes primeiro)
    clientes.unshift(novo);

    try {
        fs.writeFileSync(getFilePath(), JSON.stringify(clientes, null, 2));
    } catch (e) {
        console.error("Erro ao salvar cliente", e);
    }
}
