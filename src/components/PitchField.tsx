import React, { useState } from 'react';
import { SQUAD_SELECTIONS } from '../data/historicalXI';
import { PitchNode } from '../types';
import { Trophy, X } from 'lucide-react';

export const PitchField: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bover' | 'boca' | 'river'>('bover');
  const [selectedPlayer, setSelectedPlayer] = useState<PitchNode | null>(null);

  const currentSelection = SQUAD_SELECTIONS[activeTab];

  return (
    <section aria-labelledby="pitch-heading">
      {/* Encabezado de Sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 id="pitch-heading" className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
            Once Ideal Histórico
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Seleccioná cada futbolista en la pizarra táctica para inspeccionar sus registros
          </p>
        </div>

        {/* Segmented Control de Alineaciones */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-white/[0.07] self-start sm:self-auto text-xs font-medium">
          <button
            onClick={() => { setActiveTab('bover'); setSelectedPlayer(null); }}
            className={`px-3.5 py-1.5 rounded-lg ui-pressable ${
              activeTab === 'bover'
                ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            XI Bover Combinado
          </button>
          <button
            onClick={() => { setActiveTab('boca'); setSelectedPlayer(null); }}
            className={`px-3.5 py-1.5 rounded-lg ui-pressable ${
              activeTab === 'boca'
                ? 'bg-[#0a2558] text-[#facc15] font-semibold border border-[#facc15]/30'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            XI Boca Juniors
          </button>
          <button
            onClick={() => { setActiveTab('river'); setSelectedPlayer(null); }}
            className={`px-3.5 py-1.5 rounded-lg ui-pressable ${
              activeTab === 'river'
                ? 'bg-[#e11d48] text-white font-semibold border border-white/25'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            XI River Plate
          </button>
        </div>
      </div>

      {/* Contenedor del Campo Táctico */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#121215] p-4 sm:p-8 overflow-hidden">
        
        {/* Badge superior de la formación */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-white/[0.07] text-xs font-medium text-zinc-200">
            <Trophy className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-semibold">{currentSelection.title}</span>
            <span className="text-zinc-400 font-numbers">({currentSelection.formation})</span>
          </div>
          <span className="text-xs text-zinc-400 hidden sm:inline">
            Clic en un dorsal para ver detalle
          </span>
        </div>

        {/* Cancha de fútbol SVG con estética broadcast oscura y limpia */}
        <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-2xl border border-emerald-500/25 overflow-hidden bg-[#0a1f14]">
          
          {/* Franjas sutiles de césped */}
          <div className="absolute inset-0 flex flex-col pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? 'bg-emerald-950/25' : 'bg-transparent'}`}
              />
            ))}
          </div>

          {/* Trazado geométrico reglamentario SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-300/25 fill-none" strokeWidth="1.5">
            <line x1="0" y1="50%" x2="100%" y2="50%" />
            <circle cx="50%" cy="50%" r="15%" />
            <circle cx="50%" cy="50%" r="2.5" className="fill-emerald-300/40" />

            <rect x="22%" y="0" width="56%" height="16%" />
            <rect x="36%" y="0" width="28%" height="6%" />
            <path d="M 40% 16% A 10% 10% 0 0 0 60% 16%" />

            <rect x="22%" y="84%" width="56%" height="16%" />
            <rect x="36%" y="94%" width="28%" height="6%" />
            <path d="M 40% 84% A 10% 10% 0 0 1 60% 84%" />

            <circle cx="50%" cy="11%" r="2" className="fill-emerald-300/40" />
            <circle cx="50%" cy="89%" r="2" className="fill-emerald-300/40" />
          </svg>

          {/* Nodos de Jugadores */}
          {currentSelection.players.map((p) => {
            const isBoca = p.team === 'boca';
            const isSelected = selectedPlayer?.id === p.id;

            return (
              <button
                key={p.id}
                onClick={() => setSelectedPlayer(p)}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-20 flex flex-col items-center group focus:outline-none"
                title={`${p.name} - ${p.role}`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center font-bold text-xs transition-transform duration-150 border-2 ${
                    isBoca
                      ? 'bg-[#0a2558] text-[#facc15] border-[#facc15]'
                      : 'bg-[#e11d48] text-white border-white'
                  } ${isSelected ? 'ring-4 ring-emerald-400/70 scale-110' : 'group-hover:scale-105 group-active:scale-95'}`}
                >
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-tight leading-none font-black">
                    {p.posCode}
                  </span>
                  {p.number && (
                    <span className="text-[9px] font-numbers opacity-85 leading-none mt-0.5">
                      #{p.number}
                    </span>
                  )}
                </div>

                <span className="mt-1.5 px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-semibold text-zinc-100 bg-zinc-950/90 border border-white/[0.12] whitespace-nowrap group-hover:bg-zinc-100 group-hover:text-zinc-950 transition-colors">
                  {p.name}
                </span>
              </button>
            );
          })}

        </div>

        {/* Panel Inferior de Jugador Seleccionado */}
        {selectedPlayer && (
          <div className="mt-6 p-5 rounded-2xl bg-zinc-900/90 border border-white/[0.09] animate-fadeIn relative">
            <button
              onClick={() => setSelectedPlayer(null)}
              className="absolute top-3.5 right-3.5 p-1.5 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 ui-pressable"
              aria-label="Cerrar detalle"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/[0.07] flex items-center justify-center p-2 shrink-0">
                  <img
                    src={selectedPlayer.team === 'boca' ? '/crest-boca.svg' : '/crest-river.svg'}
                    alt={selectedPlayer.team}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-50">
                      {selectedPlayer.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800 text-zinc-300 border border-white/[0.06]">
                      {selectedPlayer.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                    {selectedPlayer.keyFact}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 self-start sm:self-auto border-t sm:border-t-0 sm:border-l border-white/[0.08] pt-3 sm:pt-0 sm:pl-6">
                <div>
                  <span className="block font-numbers text-xl font-black text-zinc-50">
                    {selectedPlayer.superclasicosCount}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400">
                    Partidos
                  </span>
                </div>
                <div>
                  <span className="block font-numbers text-xl font-black text-[#facc15]">
                    {selectedPlayer.goalsCount}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400">
                    Goles
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
