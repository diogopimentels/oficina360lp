"use client";

import { useState, useEffect } from "react";
import { Lock, Users, LogOut, CheckCircle2 } from "lucide-react";

export default function V1ClientesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [clientes, setClientes] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Sistema de Login Hardcoded
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin1" && password === "admin2") {
            setIsAuthenticated(true);
            setError("");
            fetchClientes();
        } else {
            setError("Credenciais inválidas. Tente novamente.");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername("");
        setPassword("");
        setClientes([]);
    };

    const fetchClientes = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/clientes");
            const data = await res.json();
            if (data.success) {
                setClientes(data.clientes);
            }
        } catch (err) {
            console.error(err);
        }
        setIsLoading(false);
    };

    // UI - Tela de Login
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-emerald-500/30">
                <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-slate-200 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                        <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Acesso Restrito</h1>
                    <p className="text-center text-slate-500 text-sm mb-8">Faça login para visualizar os leads.</p>

                    {error && (
                        <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Usuário</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full h-12 mt-4 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            ENTRAR NO PAINEL
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // UI - Dashboard Autenticado
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header do Painel */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-slate-200 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200">
                            <Users className="w-7 h-7 text-emerald-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-900">Leads Capturados</h1>
                            <p className="text-sm font-medium text-slate-500">
                                Os contatos abaixos foram registrados no processo de Checkout.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            onClick={fetchClientes}
                            disabled={isLoading}
                            className="flex-1 md:flex-none px-6 py-3 font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
                        >
                            {isLoading ? "Atualizando..." : "Atualizar Lista"}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors border border-transparent hover:border-red-100"
                            title="Sair"
                        >
                            <LogOut className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Tabela de Clientes */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h2 className="font-bold text-slate-800">Registros Recentes</h2>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {clientes.length} Cadastros
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Data/Hora</th>
                                    <th className="px-6 py-4 font-bold">Nome Completo</th>
                                    <th className="px-6 py-4 font-bold">WhatsApp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {clientes.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-slate-400 font-medium">
                                            Nenhum cliente cadastrado até o momento.
                                        </td>
                                    </tr>
                                ) : (
                                    clientes.map((cliente) => (
                                        <tr key={cliente.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-500">
                                                {new Date(cliente.data).toLocaleString('pt-BR')}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-slate-800">
                                                {cliente.nome}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a
                                                    href={`https://wa.me/${cliente.whatsapp.replace(/\D/g, '')}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-bold text-emerald-600 hover:text-emerald-500 hover:underline"
                                                >
                                                    {cliente.whatsapp}
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="text-center text-xs font-medium text-slate-400 mt-6 pb-6">
                    Aviso: Por se tratar de um ambiente Serverless (Vercel), estes dados locais podem ser apagados espontaneamente quando o container for reiniciado.
                </p>
            </div>
        </div>
    );
}
