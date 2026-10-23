import React, { useState } from 'react';
import { Search, Menu, X, Trophy, Users, Shield, Calendar, Info, BarChart3 } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenApiStatus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenSearch, onOpenApiStatus }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Trophy },
    { id: 'partidos', label: 'Partidos', icon: Calendar },
    { id: 'jugadores', label: 'Jugadores', icon: Users },
    { id: 'tecnicos', label: 'Técnicos', icon: Shield },
    { id: 'historial', label: 'Historial', icon: BarChart3 },
    { id: 'sobre', label: 'Sobre', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group ui-pressable rounded-lg focus:outline-none"
            title="Historia de Bover"
          >
            <div className="flex items-center gap-2.5">
              {/* Escudos miniatura superpuestos con borde sutil */}
              <div className="flex -space-x-2 items-center p-1 rounded-xl bg-zinc-900/90 border border-white/[0.08] shadow-sm">
                <img src="/crest-boca.svg" alt="Boca Juniors" className="w-6 h-7 object-contain drop-shadow-sm" />
                <img src="/crest-river.svg" alt="River Plate" className="w-6 h-7 object-contain drop-shadow-sm" />
              </div>

              {/* Identidad Tipográfica */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  Archivo Oficial
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-[-0.03em] leading-none">
                  <span className="text-[#facc15]">BO</span>
                  <span className="text-[#e11d48]">VER</span>
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Segmented Pill Nav */}
            <nav className="flex items-center gap-0.5 p-1 rounded-xl bg-zinc-900/80 border border-white/[0.07]">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg ui-pressable ${
                      isActive
                        ? 'text-zinc-50 bg-zinc-800 font-semibold shadow-xs border border-white/[0.08]'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 border border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="h-5 w-[1px] bg-white/[0.08] mx-0.5" />

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2.5 pl-3 pr-2.5 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800/80 border border-white/[0.08] hover:border-white/[0.15] rounded-xl ui-pressable group shadow-xs"
              title="Buscar en Historia de Bover (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
              <span className="hidden lg:inline">Buscar partido, jugador...</span>
              <span className="lg:hidden">Buscar...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-numbers font-semibold bg-zinc-950 border border-white/[0.08] rounded-md text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Indicador de API REST */}
            {onOpenApiStatus && (
              <button
                onClick={onOpenApiStatus}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/25 rounded-xl ui-pressable"
                title="Estado y sincronización de la API"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-numbers">266 PJ</span>
              </button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenApiStatus && (
              <button
                onClick={onOpenApiStatus}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/25 rounded-lg ui-pressable"
                aria-label="Estado de la API"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-numbers">API</span>
              </button>
            )}
            <button
              onClick={onOpenSearch}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/[0.08] ui-pressable"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/[0.08] ui-pressable"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121215] border-b border-white/[0.08] px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ui-pressable ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#facc15]' : 'text-zinc-400'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
