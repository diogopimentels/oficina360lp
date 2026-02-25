"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ==========================================
        // PLUGAR A API DO GATEWAY DE PAGAMENTO AQUI
        // ==========================================
        // Exemplo:
        // const payload = { name, whatsapp, amount: 21.49 };
        // fetch('/api/checkout', { method: 'POST', body: JSON.stringify(payload) })
        //   .then(res => res.json())
        //   .then(data => window.location.href = data.checkoutUrl);

        console.log("Submit para gateway de pagamento", { name, whatsapp });
        alert("Redirecionando para o pagamento seguro...");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-6 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Finalizar Acesso</h3>
                    <p className="text-slate-400 text-sm">Preencha seus dados para receber o Pack no seu WhatsApp e E-mail.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            placeholder="(11) 99999-9999"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 mt-6 text-lg font-bold text-white bg-emerald-600 rounded-lg shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-500"
                    >
                        PAGAR R$ 21,49 AGORA
                    </button>
                </form>

                <div className="mt-4 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
                    📍 Ambiente 100% Seguro
                </div>
            </div>
        </div>
    );
}
