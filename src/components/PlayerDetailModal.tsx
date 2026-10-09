import React from 'react';
import { PlayerStats } from '../types';
import { X, Award, Flame, Calendar, ShieldCheck } from 'lucide-react';

interface PlayerDetailModalProps {
  player: PlayerStats | null;
  onClose: () => void;
}

export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ player, onClose }) => {
  if (!player) return null;

  const isBoca = player.team === 'boca';
  const isRiver = player.team === 'river';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#8b949e] hover:text-white rounded-lg hover:bg-[#21262d] transition"
          aria-label="Cerrar ficha"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header con Escudo y Nombre */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
            alt={player.team}
            className="w-12 h-14 object-contain drop-shadow"
          />
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#8b949e]">
              Leyenda del Superclásico • {player.era}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {player.name}
            </h3>
            <p className="text-xs text-[#8b949e] font-medium">
              {player.fullName} ({player.position})
            </p>
          </div>
        </div>

        {/* Métricas clave */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#0d1117] border border-[#21262d] text-center">
          <div>
            <span className="font-numbers text-2xl font-black text-white block">
              {player.matches}
            </span>
            <span className="text-[10px] uppercase font-bold text-[#8b949e]">
              Partidos
            </span>
          </div>
          <div>
            <span className="font-numbers text-2xl font-black text-[#fdbb30] block">
              {player.goals}
            </span>
            <span className="text-[10px] uppercase font-bold text-[#8b949e]">
              Goles
            </span>
          </div>
          <div>
            <span className="font-numbers text-2xl font-black text-emerald-400 block">
              {player.wins}
            </span>
            <span className="text-[10px] uppercase font-bold text-[#8b949e]">
              Victorias
            </span>
          </div>
        </div>

        {/* Hito Histórico */}
        <div className="p-4 rounded-xl bg-[#21262d]/50 border border-[#30363d] space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#fdbb30]">
            <Flame className="w-4 h-4" />
            <span>Hito Histórico en los Superclásicos</span>
          </div>
          <p className="text-xs sm:text-sm text-[#e6edf3] leading-relaxed">
            {player.topFact}
          </p>
        </div>

        {/* Pie */}
        <div className="flex items-center justify-between text-[11px] text-[#8b949e] pt-3 border-t border-[#21262d]">
          <span>Índice Bover: {player.rankingScore}/100</span>
          <span className="text-white font-semibold">
            {player.wins}G - {player.draws}E - {player.losses}P
          </span>
        </div>

      </div>
    </div>
  );
};
