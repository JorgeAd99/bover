import React, { useEffect } from 'react';
import { PlayerStats } from '../types';
import { X, Flame } from 'lucide-react';

interface PlayerDetailModalProps {
  player: PlayerStats | null;
  onClose: () => void;
}

export const PlayerDetailModal: React.FC<PlayerDetailModalProps> = ({ player, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && player) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [player, onClose]);

  if (!player) return null;

  const isBoca = player.team === 'boca';
  const isRiver = player.team === 'river';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#121215] border border-white/[0.1] rounded-2xl shadow-2xl p-6 sm:p-8 text-left animate-modal"
      >
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 ui-pressable"
          aria-label="Cerrar ficha"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header con Escudo y Nombre */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center p-2.5 shrink-0">
            <img
              src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
              alt={player.team}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
              {player.name}
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">
              {player.fullName} · {player.position} ({player.era})
            </p>
          </div>
        </div>

        {/* Métricas clave */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#09090b] border border-white/[0.07] text-center font-numbers">
          <div>
            <span className="text-2xl font-black text-zinc-50 block leading-none">
              {player.matches}
            </span>
            <span className="text-[10px] uppercase font-semibold text-zinc-400 mt-1 block">
              Partidos
            </span>
          </div>
          <div>
            <span className="text-2xl font-black text-[#facc15] block leading-none">
              {player.goals}
            </span>
            <span className="text-[10px] uppercase font-semibold text-zinc-400 mt-1 block">
              Goles
            </span>
          </div>
          <div>
            <span className="text-2xl font-black text-emerald-400 block leading-none">
              {player.wins}
            </span>
            <span className="text-[10px] uppercase font-semibold text-zinc-400 mt-1 block">
              Victorias
            </span>
          </div>
        </div>

        {/* Hito Histórico */}
        <div className="p-4 rounded-xl bg-zinc-900/70 border border-white/[0.07] space-y-1.5 mb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#facc15]">
            <Flame className="w-4 h-4" />
            <span>Registro Destacado</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {player.topFact}
          </p>
        </div>

        {/* Pie */}
        <div className="flex items-center justify-between text-xs text-zinc-400 pt-3.5 border-t border-white/[0.07] font-numbers">
          <span>Índice de impacto: <strong className="text-zinc-200">{player.rankingScore}/100</strong></span>
          <span className="text-zinc-200 font-semibold">
            {player.wins}G · {player.draws}E · {player.losses}P
          </span>
        </div>

      </div>
    </div>
  );
};
