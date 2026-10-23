import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { Match } from '../types';

interface LastMatchesSectionProps {
  matches: Match[];
  onSelectMatch: (match: Match) => void;
  onViewAllMatches: () => void;
}

export const LastMatchesSection: React.FC<LastMatchesSectionProps> = ({
  matches,
  onSelectMatch,
  onViewAllMatches
}) => {
  const recentMatches = matches.slice(0, 4);

  return (
    <section aria-labelledby="recent-matches-heading">
      {/* Encabezado */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 id="recent-matches-heading" className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
            Últimos Superclásicos Disputados
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Equipo local siempre exhibido a la izquierda según registro oficial
          </p>
        </div>

        <button
          onClick={onViewAllMatches}
          className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-zinc-50 flex items-center gap-1.5 ui-pressable group shrink-0"
        >
          <span>Archivo completo</span>
          <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Grid de Partidos Recientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentMatches.map((m) => {
          const isRiverHome = m.homeTeam === 'river';

          // Equipo LOCAL (Izquierda)
          const homeTeamName = isRiverHome ? 'River Plate' : 'Boca Juniors';
          const homeCrest = isRiverHome ? '/crest-river.svg' : '/crest-boca.svg';
          const homeScore = isRiverHome ? m.riverScore : m.bocaScore;
          const homeGoals = isRiverHome ? m.riverGoals : m.bocaGoals;
          const isHomeWinner = isRiverHome ? m.winner === 'river' : m.winner === 'boca';
          const homeWinColor = isRiverHome ? 'text-[#fb7185]' : 'text-[#facc15]';

          // Equipo VISITANTE (Derecha)
          const awayTeamName = isRiverHome ? 'Boca Juniors' : 'River Plate';
          const awayCrest = isRiverHome ? '/crest-boca.svg' : '/crest-river.svg';
          const awayScore = isRiverHome ? m.bocaScore : m.riverScore;
          const awayGoals = isRiverHome ? m.bocaGoals : m.riverGoals;
          const isAwayWinner = isRiverHome ? m.winner === 'boca' : m.winner === 'river';
          const awayWinColor = isRiverHome ? 'text-[#facc15]' : 'text-[#fb7185]';

          return (
            <article
              key={m.id}
              onClick={() => onSelectMatch(m)}
              className="p-5 rounded-2xl border border-white/[0.07] bg-[#121215] hover:bg-[#16161a] cursor-pointer ui-card-interactive group flex flex-col justify-between"
            >
              {/* Meta Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06] text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="font-numbers font-bold text-zinc-200 bg-zinc-800/90 px-2 py-0.5 rounded-md border border-white/[0.06]">
                    #{m.number}
                  </span>
                  <span>{m.formattedDate}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-white/[0.07] truncate max-w-[165px]">
                  {m.tournament}
                </span>
              </div>

              {/* Marcador Central: LOCAL (Izquierda) vs VISITANTE (Derecha) */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-1">
                
                {/* Equipo LOCAL (Izquierda) */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={homeCrest}
                      alt={homeTeamName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`font-bold text-sm truncate ${isHomeWinner ? 'text-zinc-50' : 'text-zinc-300'}`}>
                        {homeTeamName}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/25 shrink-0">
                        Local
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 truncate block mt-0.5">
                      {homeGoals.length > 0 ? homeGoals.map(g => g.player).join(', ') : 'Sin goles'}
                    </span>
                  </div>
                </div>

                {/* Marcador Numérico Central */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center gap-2.5 font-numbers text-2xl sm:text-[28px] font-black px-3.5 py-1.5 bg-[#09090b] rounded-xl border border-white/[0.08]">
                    <span className={isHomeWinner ? homeWinColor : 'text-zinc-100'}>
                      {homeScore}
                    </span>
                    <span className="text-zinc-600 text-lg font-normal">:</span>
                    <span className={isAwayWinner ? awayWinColor : 'text-zinc-100'}>
                      {awayScore}
                    </span>
                  </div>
                  {m.penalties && (
                    <span className="text-[10px] font-numbers font-medium text-emerald-400 mt-1">
                      Pen. {isRiverHome ? m.penalties.river : m.penalties.boca}–{isRiverHome ? m.penalties.boca : m.penalties.river}
                    </span>
                  )}
                </div>

                {/* Equipo VISITANTE (Derecha) */}
                <div className="flex items-center gap-3 text-right flex-row-reverse min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                    <img
                      src={awayCrest}
                      alt={awayTeamName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-end gap-1.5 flex-wrap">
                      <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-white/[0.06] shrink-0">
                        Visita
                      </span>
                      <span className={`font-bold text-sm truncate ${isAwayWinner ? 'text-zinc-50' : 'text-zinc-300'}`}>
                        {awayTeamName}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 truncate block mt-0.5">
                      {awayGoals.length > 0 ? awayGoals.map(g => g.player).join(', ') : 'Sin goles'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Footer de tarjeta */}
              <div className="pt-3.5 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span className="truncate max-w-[210px] sm:max-w-[280px]">{m.stadium}</span>
                <span className="font-medium text-zinc-300 group-hover:text-zinc-50 flex items-center gap-1 transition-colors">
                  Ficha técnica <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA Inferior */}
      <div className="mt-5 text-center">
        <button
          onClick={onViewAllMatches}
          className="w-full sm:w-auto px-7 py-3 bg-[#121215] hover:bg-zinc-800/90 border border-white/[0.09] hover:border-white/[0.18] rounded-xl text-xs sm:text-sm font-semibold text-zinc-100 ui-pressable inline-flex items-center justify-center gap-2.5"
        >
          <Trophy className="w-4 h-4 text-[#facc15]" />
          <span>Explorar los {matches.length} Superclásicos oficiales</span>
        </button>
      </div>
    </section>
  );
};
