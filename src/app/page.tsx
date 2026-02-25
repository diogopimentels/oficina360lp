"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, ShieldCheck, Smartphone, FileText, UploadCloud, Search } from "lucide-react";
import { ButtonCTA } from "@/components/ButtonCTA";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans pb-10">
      {/* HEADER & PROMESSA */}
      <section className="relative px-4 pt-16 pb-12 overflow-hidden flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        {/* Subtle Glow Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-emerald-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-medium text-xs md:text-sm tracking-wide mb-8">
          ATENÇÃO MECÂNICO: Informação técnica na hora certa evita prejuízo.
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 mt-2 text-white">
          O Pack Elétrica Automotiva PRO: ABS, Injeção, Câmbio, Imobilizador e Muito Mais, Direto no <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Seu Celular</span>.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl font-medium mb-10 leading-relaxed">
          Esquemas completos de elétrica, códigos de falha, sincronismos e revisão técnica acessíveis em segundos, sem sair do elevador.
        </p>

        <div className="flex flex-col items-center gap-4 w-full">
          <ButtonCTA
            text="QUERO ACESSAR AGORA POR R$ 21,49"
            onClick={() => setModalOpen(true)}
            className="w-full max-w-sm md:max-w-md py-4 text-lg bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all border border-emerald-500/50"
          />
          <p className="text-sm mt-3 text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Pagamento único com acesso imediato.
          </p>
        </div>
      </section>

      {/* SEÇÃO: AGITAÇÃO DA DOR */}
      <section className="bg-slate-900/40 border-y border-slate-800/50 py-20 px-4 mt-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Quando falta informação técnica, <span className="text-slate-400">o risco é seu.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Travar num ABS ou módulo de injeção por não ter o esquema elétrico completo na hora.",
              "Ficar alternando entre scanner e computador para conferir código de falha e pinagem.",
              "Arriscar sincronismo ou ligação errada e transformar um serviço simples em dor de cabeça."
            ].map((pain, i) => (
              <div key={i} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl flex flex-col items-start gap-5 hover:border-slate-700 transition-colors shadow-sm">
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/50">
                  <AlertCircle className="w-6 h-6 text-slate-400" />
                </div>
                <p className="font-medium text-slate-300 leading-relaxed text-base">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: A SOLUÇÃO */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex flex-col gap-2">
          <span className="text-white">A base técnica essencial da oficina,</span>
          <span className="text-emerald-400">organizada no seu celular.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4 w-full">
            {[
              { title: "Sistemas Completos", text: "Esquemas de ABS, ar-condicionado, câmbio, injeção eletrônica e parte elétrica completa.", icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
              { title: "Diagnóstico Exato", text: "Códigos de falhas e apoio para diagnóstico com osciloscópio.", icon: <Search className="w-5 h-5 text-emerald-400" /> },
              { title: "Mecânica Avançada", text: "Mix de imobilizadores, reparadores e módulos.", icon: <UploadCloud className="w-5 h-5 text-emerald-400" /> },
              { title: "Manutenção & Motor", text: "Sincronismos, lubrificação do motor e revisão técnica dos veículos.", icon: <FileText className="w-5 h-5 text-emerald-400" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-900/50 p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="pt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 w-full bg-slate-900 rounded-[28px] p-1.5 shadow-2xl border border-slate-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="bg-slate-950 rounded-[22px] p-10 h-full min-h-[350px] flex flex-col justify-center items-center text-center relative overflow-hidden ring-1 ring-inset ring-slate-800/50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 blur-3xl"></div>

              <Smartphone className="w-20 h-20 text-slate-700 mb-6" strokeWidth={1.5} />
              <h3 className="font-bold text-2xl text-white mb-3 tracking-tight">Pack Elétrica PRO</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-slate-800/80 rounded-full text-xs text-slate-300 font-medium border border-slate-700">Integrado ao Drive</span>
                <span className="px-3 py-1 bg-slate-800/80 rounded-full text-xs text-slate-300 font-medium border border-slate-700">Offline disponível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA IRRECUSÁVEL & ANCORAGEM DE PREÇO - SAAS STYLE */}
      <section className="bg-gradient-to-b from-slate-900/80 to-slate-950 border-t border-slate-800/50 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Conteúdo técnico de oficina por menos que um diagnóstico.</h2>

          <div className="bg-slate-900 border border-slate-700/80 rounded-[32px] p-8 md:p-14 max-w-lg mx-auto relative shadow-2xl overflow-hidden">
            {/* Decorational glow inside card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>

            <div className="mb-10 text-center flex flex-col items-center">
              <p className="text-slate-400 text-lg font-semibold mb-2 line-through">De R$ 97,00</p>
              <div className="flex items-start justify-center">
                <span className="text-2xl font-medium text-slate-500 mt-2 mr-1">R$</span>
                <span className="text-7xl font-black text-white tracking-tight">21</span>
                <span className="text-3xl font-bold text-emerald-400 mt-2">,49</span>
              </div>
              <p className="text-slate-400 text-sm font-medium mt-4 bg-slate-800/50 px-4 py-1.5 rounded-full inline-block">Por apenas R$ 21,49</p>
            </div>

            <div className="mb-10 text-left bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
                Um único erro em sincronismo ou pinagem pode custar muito mais que isso. Por R$ 21,49 você coloca na palma da mão informações que evitam retrabalho, queima de módulo e perda de tempo.
              </p>
            </div>

            <ButtonCTA
              text="GARANTIR MEU ACESSO AGORA"
              onClick={() => setModalOpen(true)}
              className="w-full py-4 text-sm md:text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all border border-emerald-500/30"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-12 px-4 text-center border-t border-slate-900 mt-10 text-slate-500 text-xs md:text-sm bg-black">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="leading-relaxed max-w-2xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <div className="flex justify-center gap-6 font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          </div>
          <p className="text-slate-600">© {new Date().getFullYear()} - Pack Elétrica PRO. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* MODAL CHECKOUT PARA GATEWAY */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
