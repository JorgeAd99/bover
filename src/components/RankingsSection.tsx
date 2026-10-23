import React from 'react';
import { TOP_PLAYERS } from '../data/players';
import { TOP_COACHES } from '../data/coaches';
import { ArrowRight, Award, Shield } from 'lucide-react';
import { PlayerStats, CoachStats } from '../types';

interface RankingsSectionProps {
  onSelectPlayer: (player: PlayerStats) => void;
  onSelectCoach?: (coach: CoachStats) => void;
  onViewAllPlayers: () => void;
  onViewAllCoaches: () => void;
}

export const RankingsSection: React.FC<RankingsSectionProps> = ({
  onSelectPlayer,
  onSelectCoach,
  onViewAllPlayers,
  onViewAllCoaches
}) => {
  const top3Players = TOP_PLAYERS.slice(0, 3);
  const top3Coaches = TOP_COACHES.slice(0, 3);

  return (
    <section aria-labelledby="rankings-heading">
      <div className="mb-6">
        <h2 id="rankings-heading" className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
          Índice Histórico de Protagonistas
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
          Máximas figuras y entrenadores con mayor impacto estadístico en el Superclásico
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Columna: Jugadores */}
        <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-[#121215] flex flex-col justify-between space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <h3 className="text-base font-bold text-zinc-50 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#facc15]" />
              <span>Futbolistas Legendarios</span>
            </h3>
            <button
              onClick={onViewAllPlayers}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 ui-pressable"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {top3Players.map((player, index) => {
              const isBoca = player.team === 'boca';
              const isRiver = player.team === 'river';

              return (
                <div
                  key={player.id}
                  onClick={() => onSelectPlayer(player)}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-zinc-900/60 hover:bg-zinc-900 cursor-pointer ui-card-interactive flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                      <img
                        src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
                        alt={player.team}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-zinc-100 group-hover:text-[#facc15] transition-colors truncate">
                          {player.name}
                        </span>
                        <span className="text-xs text-zinc-400 hidden sm:inline truncate">
                          · {player.era}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 font-numbers">
                        <strong className="text-zinc-200">{player.goals} goles</strong> en {player.matches} partidos
                      </p>
                    </div>
                  </div>

                  <span className="font-numbers text-lg font-black text-zinc-400 group-hover:text-zinc-100 transition-colors pl-3">
                    #{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewAllPlayers}
            className="w-full py-2.5 text-xs font-semibold text-zinc-300 hover:text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-white/[0.07] ui-pressable flex items-center justify-center gap-1.5"
          >
            <span>Ranking completo de jugadores</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Columna: Técnicos */}
        <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-[#121215] flex flex-col justify-between space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <h3 className="text-base font-bold text-zinc-50 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#e11d48]" />
              <span>Directores Técnicos</span>
            </h3>
            <button
              onClick={onViewAllCoaches}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 ui-pressable"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {top3Coaches.map((coach, index) => {
              const isBoca = coach.team === 'boca';

              return (
                <div
                  key={coach.id}
                  onClick={() => onSelectCoach?.(coach)}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-zinc-900/60 hover:bg-zinc-900 cursor-pointer ui-card-interactive flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                      <img
                        src={isBoca ? '/crest-boca.svg' : '/crest-river.svg'}
                        alt={coach.team}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-zinc-100 group-hover:text-[#fb7185] transition-colors truncate">
                          {coach.name}
                        </span>
                        <span className="text-xs text-zinc-400 hidden sm:inline truncate">
                          · {coach.era}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 font-numbers">
                        <strong className="text-zinc-200">{coach.wins} victorias</strong> en {coach.matches} clásicos ({coach.winPercentage}%)
                      </p>
                    </div>
                  </div>

                  <span className="font-numbers text-lg font-black text-zinc-400 group-hover:text-zinc-100 transition-colors pl-3">
                    #{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewAllCoaches}
            className="w-full py-2.5 text-xs font-semibold text-zinc-300 hover:text-zinc-50 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-white/[0.07] ui-pressable flex items-center justify-center gap-1.5"
          >
            <span>Ranking completo de entrenadores</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
