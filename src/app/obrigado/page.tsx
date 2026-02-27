import { CheckCircle2, Download, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
    return (
        <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-slate-200">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-lg bg-slate-900/80 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl text-center backdrop-blur-sm animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30 animate-pulse">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Pagamento Aprovado! 🎉
                </h1>

                <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    Parabéns! Seu acesso ao <strong className="text-emerald-400 font-semibold">Pack Simplo 2026 PRO</strong> foi liberado com sucesso. Você já pode acessar todos os esquemas elétricos e manuais agora mesmo.
                </p>

                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 mb-8 text-left">
                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Download className="w-5 h-5 text-slate-400" />
                        Instruções de Acesso:
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex gap-2">
                            <span className="text-emerald-500">1.</span>
                            Clique no botão verde abaixo para abrir a pasta no Google Drive.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-emerald-500">2.</span>
                            Você pode visualizar os arquivos direto pelo celular ou baixar para acessar offline.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-emerald-500">3.</span>
                            Recomendamos salvar o link da pasta nos seus favoritos!
                        </li>
                    </ul>
                </div>

                <Link
                    href="https://drive.google.com/drive/folders/1yi62no3Y53-3HKI-w-l9FeeXeiD83srX?usp=sharing"
                    target="_blank"
                    className="group w-full h-16 flex items-center justify-center gap-3 text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all border border-emerald-500/30 hover:scale-[1.02]"
                >
                    ACESSAR O SIMPLO AGORA
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500/70" />
                    Compra 100% segura processada via InfinitePay.
                </p>
            </div>
        </main>
    );
}
