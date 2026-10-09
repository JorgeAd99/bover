import React from 'react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-20 border-t border-[#21262d] bg-[#090c10] py-12 text-[#8b949e] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5 items-center">
              <img src="/crest-boca.svg" alt="Boca" className="w-6 h-7 object-contain" />
              <img src="/crest-river.svg" alt="River" className="w-6 h-7 object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8b949e]">
                Historia de
              </span>
              <span className="text-xl font-black tracking-tight leading-none">
                <span className="text-[#fdbb30]">BO</span>
                <span className="text-[#c91024]">VER</span>
              </span>
            </div>
          </div>

          {/* Links de navegación */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <button onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Inicio
            </button>
            <button onClick={() => { onSelectTab('partidos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Partidos
            </button>
            <button onClick={() => { onSelectTab('jugadores'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Jugadores
            </button>
            <button onClick={() => { onSelectTab('tecnicos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Técnicos
            </button>
            <button onClick={() => { onSelectTab('historial'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Historial
            </button>
            <button onClick={() => { onSelectTab('sobre'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition">
              Sobre
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-[#21262d] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>
            © {new Date().getFullYear()} Historia de Bover. Sitio tributo sin fines de lucro inspirado en grenal.org.
          </p>
          <p className="text-[#8b949e]">
            Datos históricos basados en registros oficiales de AFA, CONMEBOL y RSSSF.
          </p>
        </div>

      </div>
    </footer>
  );
};
