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
    <section className="mb-14">
      {/* Encabezado Índice Bover idéntico a grenal.org */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fdbb30]"></span>
          Índice Bover
        </h2>
        <p className="text-xs sm:text-sm text-[#8b949e] mt-1">
          Ranking estadístico histórico de todos los jugadores y entrenadores del Superclásico.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Columna: Ranking de Jugadores */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#21262d]">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-[#fdbb30]" />
              <span>Jugadores</span>
            </h3>
            <button
              onClick={onViewAllPlayers}
              className="text-xs font-semibold text-[#8b949e] hover:text-white flex items-center gap-1 transition"
            >
              <span>Ver ranking completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {top3Players.map((player, index) => {
              const isBoca = player.team === 'boca';
              const isRiver = player.team === 'river';

              return (
                <div
                  key={player.id}
                  onClick={() => onSelectPlayer(player)}
                  className="p-4 rounded-xl border border-[#30363d] bg-[#161b22]/70 hover:bg-[#161b22] hover:border-[#8b949e]/50 cursor-pointer transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Crest */}
                    <img
                      src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
                      alt={player.team}
                      className="w-7 h-9 object-contain drop-shadow"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white group-hover:text-[#fdbb30] transition">
                          {player.name}
                        </span>
                        <span className="text-[11px] text-[#8b949e] hidden sm:inline">
                          ({player.fullName})
                        </span>
                      </div>
                      <p className="text-xs text-[#8b949e] mt-0.5">
                        {player.matches} partidos • {player.goals} goles • {player.era}
                      </p>
                    </div>
                  </div>

                  {/* Número de Ranking #1, #2, etc. */}
                  <div className="flex items-center gap-3">
                    <span className="font-numbers text-xl sm:text-2xl font-black text-[#8b949e] group-hover:text-white transition">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewAllPlayers}
            className="w-full py-2.5 text-xs font-bold text-[#8b949e] hover:text-white bg-[#161b22] hover:bg-[#21262d] rounded-lg border border-[#30363d] transition flex items-center justify-center gap-1.5"
          >
            <span>Ver ranking completo de jugadores</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Columna: Ranking de Técnicos */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#21262d]">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#c91024]" />
              <span>Técnicos</span>
            </h3>
            <button
              onClick={onViewAllCoaches}
              className="text-xs font-semibold text-[#8b949e] hover:text-white flex items-center gap-1 transition"
            >
              <span>Ver ranking completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {top3Coaches.map((coach, index) => {
              const isBoca = coach.team === 'boca';

              return (
                <div
                  key={coach.id}
                  onClick={() => onSelectCoach?.(coach)}
                  className="p-4 rounded-xl border border-[#30363d] bg-[#161b22]/70 hover:bg-[#161b22] hover:border-[#8b949e]/50 cursor-pointer transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Crest */}
                    <img
                      src={isBoca ? '/crest-boca.svg' : '/crest-river.svg'}
                      alt={coach.team}
                      className="w-7 h-9 object-contain drop-shadow"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white group-hover:text-[#ff4d5a] transition">
                          {coach.name}
                        </span>
                        <span className="text-[11px] text-[#8b949e] hidden sm:inline">
                          ({coach.era})
                        </span>
                      </div>
                      <p className="text-xs text-[#8b949e] mt-0.5">
                        {coach.matches} clásicos • {coach.wins} victorias • {coach.winPercentage}% efectividad
                      </p>
                    </div>
                  </div>

                  {/* Número de Ranking #1, #2, etc. */}
                  <div className="flex items-center gap-3">
                    <span className="font-numbers text-xl sm:text-2xl font-black text-[#8b949e] group-hover:text-white transition">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onViewAllCoaches}
            className="w-full py-2.5 text-xs font-bold text-[#8b949e] hover:text-white bg-[#161b22] hover:bg-[#21262d] rounded-lg border border-[#30363d] transition flex items-center justify-center gap-1.5"
          >
            <span>Ver ranking completo de técnicos</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
