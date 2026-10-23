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
  // Mostramos los últimos 4 partidos
  const recentMatches = matches.slice(0, 4);

  return (
    <section className="mb-14">
      {/* Título idéntico a grenal.org */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c91024]"></span>
          Últimos Superclásicos
        </h2>

        <button
          onClick={onViewAllMatches}
          className="text-xs sm:text-sm font-bold text-[#8b949e] hover:text-white flex items-center gap-1.5 transition group"
        >
          <span>Ver todas las partidas</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </button>
      </div>

      {/* Grid de Cards idéntico a grenal.org con equipo local siempre a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentMatches.map((m) => {
          const isRiverHome = m.homeTeam === 'river';

          // Datos del equipo LOCAL (a la izquierda)
          const homeTeamName = isRiverHome ? 'River Plate' : 'Boca Juniors';
          const homeCrest = isRiverHome ? '/crest-river.svg' : '/crest-boca.svg';
          const homeScore = isRiverHome ? m.riverScore : m.bocaScore;
          const homeGoals = isRiverHome ? m.riverGoals : m.bocaGoals;
          const isHomeWinner = isRiverHome ? m.winner === 'river' : m.winner === 'boca';
          const homeWinColor = isRiverHome ? 'text-[#ff4d5a]' : 'text-[#fdbb30]';
          const homeHoverColor = isRiverHome ? 'group-hover:text-[#ff4d5a]' : 'group-hover:text-[#fdbb30]';

          // Datos del equipo VISITANTE (a la derecha)
          const awayTeamName = isRiverHome ? 'Boca Juniors' : 'River Plate';
          const awayCrest = isRiverHome ? '/crest-boca.svg' : '/crest-river.svg';
          const awayScore = isRiverHome ? m.bocaScore : m.riverScore;
          const awayGoals = isRiverHome ? m.bocaGoals : m.riverGoals;
          const isAwayWinner = isRiverHome ? m.winner === 'boca' : m.winner === 'river';
          const awayWinColor = isRiverHome ? 'text-[#fdbb30]' : 'text-[#ff4d5a]';
          const awayHoverColor = isRiverHome ? 'group-hover:text-[#fdbb30]' : 'group-hover:text-[#ff4d5a]';

          return (
            <div
              key={m.id}
              onClick={() => onSelectMatch(m)}
              className="p-5 rounded-xl border border-[#30363d] bg-[#161b22]/70 hover:bg-[#161b22] hover:border-[#8b949e]/50 cursor-pointer transition shadow-sm group flex flex-col justify-between"
            >
              {/* Header de la tarjeta */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#21262d] text-xs font-semibold">
                <span className="text-[#8b949e] flex items-center gap-1.5">
                  <span className="font-bold text-white">Superclásico #{m.number}</span>
                  <span>•</span>
                  <span>{m.formattedDate}</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#21262d] text-[#8b949e] border border-[#30363d] truncate max-w-[140px]">
                  {m.tournament}
                </span>
              </div>

              {/* Marcador central: LOCAL A LA IZQUIERDA, VISITANTE A LA DERECHA */}
              <div className="flex items-center justify-between py-2 px-2">
                
                {/* Equipo LOCAL (Izquierda) */}
                <div className={`flex items-center gap-3 ${isHomeWinner ? 'opacity-100' : 'opacity-85'}`}>
                  <figure className="w-11 h-13 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={homeCrest}
                      alt={homeTeamName}
                      className="w-10 h-12 object-contain drop-shadow"
                    />
                  </figure>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className={`font-bold text-sm block text-white ${homeHoverColor} transition`}>
                        {homeTeamName}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                        Local
                      </span>
                    </div>
                    <span className="text-xs text-[#8b949e] line-clamp-1 max-w-[130px] sm:max-w-[150px]">
                      {homeGoals.length > 0 ? homeGoals.map(g => g.player).join(', ') : 'Sin goles'}
                    </span>
                  </div>
                </div>

                {/* Marcador Numérico Central (Local : Visitante) */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2.5 font-numbers text-2xl sm:text-3xl font-extrabold px-3 py-1 bg-[#0d1117] rounded-lg border border-[#21262d]">
                    <span className={isHomeWinner ? homeWinColor : 'text-white'}>
                      {homeScore}
                    </span>
                    <span className="text-[#484f58] text-xl font-normal">:</span>
                    <span className={isAwayWinner ? awayWinColor : 'text-white'}>
                      {awayScore}
                    </span>
                  </div>
                  {m.penalties && (
                    <span className="text-[10px] font-numbers text-[#8b949e] mt-1">
                      pen. {isRiverHome ? m.penalties.river : m.penalties.boca} - {isRiverHome ? m.penalties.boca : m.penalties.river}
                    </span>
                  )}
                </div>

                {/* Equipo VISITANTE (Derecha) */}
                <div className={`flex items-center gap-3 text-right flex-row-reverse ${isAwayWinner ? 'opacity-100' : 'opacity-85'}`}>
                  <figure className="w-11 h-13 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={awayCrest}
                      alt={awayTeamName}
                      className="w-10 h-12 object-contain drop-shadow"
                    />
                  </figure>
                  <div>
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                        Visita
                      </span>
                      <span className={`font-bold text-sm block text-white ${awayHoverColor} transition`}>
                        {awayTeamName}
                      </span>
                    </div>
                    <span className="text-xs text-[#8b949e] line-clamp-1 max-w-[130px] sm:max-w-[150px]">
                      {awayGoals.length > 0 ? awayGoals.map(g => g.player).join(', ') : 'Sin goles'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Footer con info de estadio */}
              <div className="pt-4 mt-2 border-t border-[#21262d] flex items-center justify-between text-[11px] text-[#8b949e]">
                <span className="truncate max-w-[200px] sm:max-w-[280px]">{m.stadium}</span>
                <span className="text-xs font-semibold text-white/60 group-hover:text-white transition flex items-center gap-1">
                  Ver ficha completa <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón inferior Ver todas las partidas */}
      <div className="mt-5 text-center">
        <button
          onClick={onViewAllMatches}
          className="w-full sm:w-auto px-8 py-3 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-xl text-sm font-bold text-white transition inline-flex items-center justify-center gap-2"
        >
          <Trophy className="w-4 h-4 text-[#fdbb30]" />
          <span>Ver todas las partidas históricas ({matches.length})</span>
        </button>
      </div>
    </section>
  );
};
