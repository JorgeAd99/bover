import React from 'react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/[0.07] bg-[#09090b] py-12 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 items-center p-1 rounded-xl bg-zinc-900 border border-white/[0.07]">
              <img src="/crest-boca.svg" alt="Boca Juniors" className="w-5 h-6 object-contain" />
              <img src="/crest-river.svg" alt="River Plate" className="w-5 h-6 object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-zinc-400">
                Archivo Oficial
              </span>
              <span className="text-lg font-black tracking-[-0.03em] leading-none">
                <span className="text-[#facc15]">BO</span>
                <span className="text-[#e11d48]">VER</span>
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            <button onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Inicio
            </button>
            <button onClick={() => { onSelectTab('partidos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Partidos (266)
            </button>
            <button onClick={() => { onSelectTab('jugadores'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Jugadores
            </button>
            <button onClick={() => { onSelectTab('tecnicos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Técnicos
            </button>
            <button onClick={() => { onSelectTab('historial'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Historial
            </button>
            <button onClick={() => { onSelectTab('sobre'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-zinc-100 ui-pressable">
              Sobre el Proyecto
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} Historia de Bover. Enciclopedia interactiva sin fines de lucro del Superclásico Argentino.
          </p>
          <p>
            Registros verificados de AFA, CONMEBOL y RSSSF (1913–2026).
          </p>
        </div>

      </div>
    </footer>
  );
};
