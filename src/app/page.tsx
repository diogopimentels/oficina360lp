"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, ShieldCheck, Smartphone, FileText, UploadCloud, Search } from "lucide-react";
import { ButtonCTA } from "@/components/ButtonCTA";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-500/30 selection:text-emerald-900 font-sans pb-10">
      {/* HEADER & PROMESSA */}
      <section className="relative px-4 pt-12 pb-12 overflow-hidden flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        {/* Subtle Glow Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-emerald-400 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        {/* Logo da Oficina 360 */}
        <img
          src="/oficina360.png"
          alt="Oficina 360"
          className="h-16 md:h-24 w-auto object-contain mb-8 relative z-10"
        />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-700 font-semibold text-xs md:text-sm tracking-wide mb-8 relative z-10 shadow-sm">
          ATENCIÓN TALLERES: Trabajar a ciegas sin el plano técnico te está costando plata.
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 mt-2 text-slate-900">
          El Pack Eléctrica Automotriz PRO: ABS, Inyección, Transmisión e Inmovilizadores directo en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">tu celular</span>.
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-medium mb-8 leading-relaxed">
          Planos eléctricos completos, códigos de falla (DTC) y sincronismos accesibles en segundos. Cero estrés, resolviendo el problema sin moverte del elevador.
        </p>

        {/* App Preview Image Preview */}
        <div className="w-full max-w-md mx-auto mb-10 relative">
          <div className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full"></div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <ButtonCTA
            text="QUIERO ACCEDER AHORA POR 34.900 COP"
            onClick={() => setModalOpen(true)}
            className="w-full max-w-sm md:max-w-md py-4 text-lg bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/30 transition-all border border-emerald-500/20"
          />
          <p className="text-sm mt-3 text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Pago único. Acceso inmediato a la nube.
          </p>
        </div>
      </section>

      {/* SEÇÃO: AGITAÇÃO DA DOR */}
      <section className="bg-white border-y border-slate-200 py-20 px-4 mt-4 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Trabajar adivinando es el camino más rápido para quemar un módulo <span className="text-slate-500">(y pagarlo de tu bolsillo).</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Quedar varado en un sistema de ABS o módulo de inyección por no tener el diagrama exacto a la mano.",
              "Perder horas buscando en internet para confirmar un código de falla y el pinout correcto mientras el cliente presiona.",
              "Arriesgar un sincronismo o hacer un corto por un cable mal conectado, convirtiendo un arreglo de 1 hora en un chicharrón de 3 días."
            ].map((pain, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col items-start gap-5 hover:border-slate-300 transition-colors shadow-sm">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <AlertCircle className="w-6 h-6 text-slate-600" />
                </div>
                <p className="font-medium text-slate-700 leading-relaxed text-base">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: A SOLUÇÃO */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex flex-col gap-2">
          <span className="text-slate-900">El escáner te da el código,</span>
          <span className="text-emerald-600">nuestro Pack te da la solución en tu celular.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4 w-full">
            {[
              { title: "Sistemas Completos", text: "Planos al detalle de ABS, aire acondicionado, inyección electrónica y cableado completo.", icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" /> },
              { title: "Diagnóstico Exacto", text: "Interpretación de códigos de falla (DTC) y apoyo directo para diagnóstico avanzado con osciloscopio.", icon: <Search className="w-5 h-5 text-emerald-600" /> },
              { title: "Mecánica Avanzada", text: "Mix de inmovilizadores y pinouts exactos para módulos. No más ECUs quemadas.", icon: <UploadCloud className="w-5 h-5 text-emerald-600" /> },
              { title: "Motor y Mantenimiento", text: "Tiempos de motor (sincronismos), lubricación y datos de revisión técnica multimarca.", icon: <FileText className="w-5 h-5 text-emerald-600" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
                <div className="pt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 w-full bg-white rounded-[28px] p-2 shadow-xl border border-slate-200 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="bg-slate-50 rounded-[22px] p-2 h-full min-h-[350px] flex flex-col justify-center items-center text-center relative overflow-hidden ring-1 ring-inset ring-slate-200/50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/50 blur-3xl"></div>

              <img
                src="/2026.png"
                alt="Pack Elétrica PRO Interface"
                className="relative z-10 w-full h-full object-cover rounded-[18px] hover:scale-[1.02] shadow-sm transition-transform duration-500 border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA IRRECUSÁVEL & ANCORAGEM DE PREÇO - SAAS STYLE */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Información técnica nivel concesionario por menos de lo que cobras por una escaneada.</h2>

          <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-14 max-w-lg mx-auto relative shadow-xl overflow-hidden">
            {/* Decorational glow inside card */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-400/20 blur-[80px] rounded-full"></div>

            <div className="mb-10 text-center flex flex-col items-center">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-bold text-sm md:text-base tracking-wide shadow-sm">
                🔥 Librería Técnica 2026 • Acceso Inmediato
              </div>
              <p className="text-slate-500 text-lg font-semibold mb-2 line-through">De 149.900 COP</p>
              <div className="flex items-start justify-center">
                <span className="text-2xl font-bold text-slate-400 mt-2 mr-1">$</span>
                <span className="text-7xl font-black text-slate-900 tracking-tight">34.900</span>
                <span className="text-3xl font-bold text-emerald-600 mt-2">COP</span>
              </div>
              <p className="text-emerald-700 font-bold text-sm mt-4 bg-emerald-50 px-4 py-1.5 rounded-full inline-block border border-emerald-100">Por solo 34.900 COP</p>
            </div>

            <div className="mb-10 text-left bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                Un solo error en un pinout o un corto circuito te puede costar millones en repuestos. Por 34.900 COP te blindas contra errores, evitas retrabajos y sacas los carros del taller el doble de rápido. La tranquilidad no tiene precio, pero hoy está regalada.
              </p>
            </div>

            <ButtonCTA
              text="ASEGURAR MI ACCESO AHORA"
              onClick={() => setModalOpen(true)}
              className="w-full py-4 text-sm md:text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.4)] transition-all border border-emerald-500/20"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-12 px-4 text-center border-t border-slate-200 mt-10 text-slate-500 text-xs md:text-sm bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="leading-relaxed max-w-2xl mx-auto">
            Este sitio no está afiliado a Facebook ni a ninguna entidad de Meta.
            Una vez que abandonas Facebook, la responsabilidad es exclusiva de nuestro sitio web.
          </p>
          <div className="flex justify-center gap-6 font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Políticas de Privacidad</a>
          </div>
          <p className="text-slate-400">© {new Date().getFullYear()} - Pack Eléctrica PRO. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MODAL CHECKOUT PARA GATEWAY */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
