import React, { useState } from 'react';
import { SQUAD_SELECTIONS } from '../data/historicalXI';
import { PitchNode } from '../types';
import { Trophy, Info, X } from 'lucide-react';

export const PitchField: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bover' | 'boca' | 'river'>('bover');
  const [selectedPlayer, setSelectedPlayer] = useState<PitchNode | null>(null);

  const currentSelection = SQUAD_SELECTIONS[activeTab];

  return (
    <section className="mb-14">
      {/* Título de la sección idéntico a grenal.org */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            Selección Bover
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-1">
            Los mejores once de la historia del clásico en formación táctica interactiva.
          </p>
        </div>

        {/* Tabs de selección de equipo */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-xl border border-[#30363d] self-start sm:self-auto text-xs font-bold">
          <button
            onClick={() => { setActiveTab('bover'); setSelectedPlayer(null); }}
            className={`px-3.5 py-2 rounded-lg transition ${
              activeTab === 'bover'
                ? 'bg-[#21262d] text-white shadow'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Selección Bover (Ideal)
          </button>
          <button
            onClick={() => { setActiveTab('boca'); setSelectedPlayer(null); }}
            className={`px-3.5 py-2 rounded-lg transition ${
              activeTab === 'boca'
                ? 'bg-[#0b2f6d] text-[#fdbb30] shadow border border-[#fdbb30]/30'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Selección Xeneize
          </button>
          <button
            onClick={() => { setActiveTab('river'); setSelectedPlayer(null); }}
            className={`px-3.5 py-2 rounded-lg transition ${
              activeTab === 'river'
                ? 'bg-[#c91024] text-white shadow border border-white/30'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Selección Millonaria
          </button>
        </div>
      </div>

      {/* Contenedor del Campo Táctico */}
      <div className="relative rounded-2xl border border-[#30363d] bg-gradient-to-b from-[#0e2417] via-[#091b10] to-[#06120b] p-4 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Título de la formación actual */}
        <div className="absolute top-4 left-6 z-10 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white">
          <Trophy className="w-3.5 h-3.5 text-[#fdbb30]" />
          <span>{currentSelection.title}</span>
          <span className="text-[#8b949e]">({currentSelection.formation})</span>
        </div>

        {/* Cancha de fútbol SVG con líneas reglamentarias */}
        <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-xl border-2 border-emerald-500/30 overflow-hidden shadow-inner bg-[#0d2a1a]">
          
          {/* Césped a rayas */}
          <div className="absolute inset-0 flex flex-col pointer-events-none opacity-30">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? 'bg-emerald-900/30' : 'bg-emerald-950/20'}`}
              />
            ))}
          </div>

          {/* Marcaciones de cancha reglamentarias SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/40 fill-none" strokeWidth="1.5">
            {/* Línea media */}
            <line x1="0" y1="50%" x2="100%" y2="50%" />
            {/* Círculo central */}
            <circle cx="50%" cy="50%" r="15%" />
            <circle cx="50%" cy="50%" r="2" fill="white" className="fill-white/60" />

            {/* Área y arco superior (Arco Rival) */}
            <rect x="22%" y="0" width="56%" height="16%" />
            <rect x="36%" y="0" width="28%" height="6%" />
            <path d="M 40% 16% A 10% 10% 0 0 0 60% 16%" />

            {/* Área y arco inferior (Arco Propio) */}
            <rect x="22%" y="84%" width="56%" height="16%" />
            <rect x="36%" y="94%" width="28%" height="6%" />
            <path d="M 40% 84% A 10% 10% 0 0 1 60% 84%" />

            {/* Puntos de penal */}
            <circle cx="50%" cy="11%" r="2" fill="white" className="fill-white/60" />
            <circle cx="50%" cy="89%" r="2" fill="white" className="fill-white/60" />
          </svg>

          {/* Nodos de Jugadores colocados con coordenadas exactas */}
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
                className={`absolute z-20 flex flex-col items-center group transition transform active:scale-90 focus:outline-none`}
                title={`${p.name} - ${p.role}`}
              >
                {/* Badge / Pill del Jugador estilo grenal.org */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center font-bold text-xs shadow-lg transition duration-200 border-2 ${
                    isBoca
                      ? 'bg-[#0b2f6d] text-[#fdbb30] border-[#fdbb30] hover:shadow-[#fdbb30]/40'
                      : 'bg-[#c91024] text-white border-white hover:shadow-red-500/40'
                  } ${isSelected ? 'ring-4 ring-emerald-400 scale-110 shadow-xl' : 'group-hover:scale-105'}`}
                >
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-tighter leading-none font-black">
                    {p.posCode}
                  </span>
                  {p.number && (
                    <span className="text-[9px] opacity-80 leading-none">
                      #{p.number}
                    </span>
                  )}
                </div>

                {/* Nombre del Jugador bajo el badge */}
                <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-black/75 backdrop-blur border border-white/20 whitespace-nowrap shadow group-hover:bg-white group-hover:text-black transition">
                  {p.name}
                </span>
              </button>
            );
          })}

        </div>

        {/* Modal / Ficha Informativa del Jugador Seleccionado */}
        {selectedPlayer && (
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#161b22]/95 border border-[#30363d] backdrop-blur animate-fadeIn relative">
            <button
              onClick={() => setSelectedPlayer(null)}
              className="absolute top-3 right-3 p-1.5 text-[#8b949e] hover:text-white rounded-lg hover:bg-[#21262d]"
              aria-label="Cerrar detalle"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={selectedPlayer.team === 'boca' ? '/crest-boca.svg' : '/crest-river.svg'}
                  alt={selectedPlayer.team}
                  className="w-10 h-12 object-contain"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-black text-white">
                      {selectedPlayer.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#21262d] text-[#8b949e]">
                      {selectedPlayer.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8b949e] mt-0.5">
                    {selectedPlayer.keyFact}
                  </p>
                </div>
              </div>

              {/* Estadísticas en superclásicos */}
              <div className="flex items-center gap-4 self-start sm:self-auto border-t sm:border-t-0 sm:border-l border-[#30363d] pt-3 sm:pt-0 sm:pl-4">
                <div className="text-center">
                  <span className="block font-numbers text-xl font-black text-white">
                    {selectedPlayer.superclasicosCount}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#8b949e]">
                    Superclásicos
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-numbers text-xl font-black text-[#fdbb30]">
                    {selectedPlayer.goalsCount}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#8b949e]">
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
