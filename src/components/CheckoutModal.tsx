"use client";

import { useState } from "react";
import { X, Loader2, AlertCircle } from "lucide-react";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // ==========================================
            // 1. (Futuramente) Disparo pro Webhook (Google Sheets) da sua Planilha vai aqui
            // ==========================================

            // 2. Disparo para nossa API Proxy Interna da InfinitePay
            const response = await fetch('/api/infinite/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, whatsapp })
            });

            const data = await response.json();

            if (!response.ok || !data.url) {
                throw new Error(data.error || data.message || "Erro ao gerar link de pagamento.");
            }

            // 3. Redirecionamento Magico Seguro
            window.location.href = data.url;

        } catch (err: any) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={!isLoading ? onClose : undefined}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white disabled:opacity-50"
                    disabled={isLoading}
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Finalizar Acesso</h3>
                    <p className="text-slate-400 text-sm">Preencha seus dados para receber o Pack no seu WhatsApp e E-mail.</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50"
                            placeholder="João da Silva"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">WhatsApp</label>
                        <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            disabled={isLoading}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50"
                            placeholder="(11) 99999-9999"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-14 mt-6 text-lg font-bold text-white bg-emerald-600 rounded-lg shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-500 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                GERANDO PAGAMENTO...
                            </>
                        ) : (
                            "PAGAR R$ 21,49 AGORA"
                        )}
                    </button>
                </form>

                <div className="mt-4 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
                    📍 Ambiente 100% Seguro por InfinitePay
                </div>
            </div>
        </div>
    );
}
