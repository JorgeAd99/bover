import React, { useState } from 'react';
import { Search, Menu, X, Trophy, Users, Shield, Calendar, Info } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenApiStatus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenSearch, onOpenApiStatus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Página inicial', icon: Trophy },
    { id: 'partidos', label: 'Partidos', icon: Calendar },
    { id: 'jugadores', label: 'Jugadores', icon: Users },
    { id: 'tecnicos', label: 'Técnicos', icon: Shield },
    { id: 'historial', label: 'Historial', icon: Trophy },
    { id: 'sobre', label: 'Sobre', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0d1117]/95 backdrop-blur border-b border-[#21262d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo estilo Grenal.org con Bover */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            title="Historia de Bover"
          >
            <div className="flex items-center gap-2">
              {/* Escudos miniatura */}
              <div className="flex -space-x-1.5 items-center">
                <img src="/crest-boca.svg" alt="Boca" className="w-7 h-8 object-contain drop-shadow" />
                <img src="/crest-river.svg" alt="River" className="w-7 h-8 object-contain drop-shadow" />
              </div>

              {/* Logo Tipográfico Bover */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8b949e] group-hover:text-white transition">
                  Historia de
                </span>
                <span className="text-2xl font-black tracking-tight leading-none">
                  <span className="text-[#fdbb30] drop-shadow-sm">BO</span>
                  <span className="text-[#c91024] drop-shadow-sm">VER</span>
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Right Side: Search and Nav Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Indicador de API REST */}
            {onOpenApiStatus && (
              <button
                onClick={onOpenApiStatus}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-full transition shadow-sm"
                title="Configuración y estado de la API"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>API Conectada</span>
              </button>
            )}

            {/* Buscador Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs text-[#8b949e] bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-full transition group"
              title="Buscar en Historia de Bover (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#8b949e] group-hover:text-white transition" />
              <span>Buscar partido, jugador, DT...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#0d1117] border border-[#30363d] rounded text-[#8b949e]">
                ⌘K
              </kbd>
            </button>

            {/* Nav links estilo Grenal.org */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${
                      isActive
                        ? 'text-white bg-[#21262d] font-semibold'
                        : 'text-[#8b949e] hover:text-white hover:bg-[#161b22]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Right Controls: Search Icon & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenApiStatus && (
              <button
                onClick={onOpenApiStatus}
                className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full"
                aria-label="Estado de la API"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>API</span>
              </button>
            )}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#8b949e] hover:text-white bg-[#161b22] rounded-md border border-[#30363d]"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#8b949e] hover:text-white bg-[#161b22] rounded-md border border-[#30363d]"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-[#30363d] px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#21262d] text-white font-semibold'
                    : 'text-[#8b949e] hover:text-white hover:bg-[#21262d]/50'
                }`}
              >
                <Icon className="w-4 h-4 text-[#8b949e]" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
