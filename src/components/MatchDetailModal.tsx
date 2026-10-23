import React from 'react';
import { Match } from '../types';
import { X, MapPin, User, Users, Shield } from 'lucide-react';

interface MatchDetailModalProps {
  match: Match | null;
  onClose: () => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({ match, onClose }) => {
  if (!match) return null;

  const isRiverHome = match.homeTeam === 'river';

  // Datos del equipo LOCAL (a la izquierda)
  const homeTeamName = isRiverHome ? 'River Plate' : 'Boca Juniors';
  const homeCrest = isRiverHome ? '/crest-river.svg' : '/crest-boca.svg';
  const homeScore = isRiverHome ? match.riverScore : match.bocaScore;
  const homeCoach = isRiverHome ? match.riverCoach : match.bocaCoach;
  const homeLineup = isRiverHome ? match.riverLineup : match.bocaLineup;
  const isHomeWinner = isRiverHome ? match.winner === 'river' : match.winner === 'boca';
  const homeColor = isRiverHome ? 'text-[#ff4d5a]' : 'text-[#fdbb30]';
  const homeBadgeBg = isRiverHome ? 'bg-[#c91024] text-white' : 'bg-[#fdbb30] text-black';

  // Datos del equipo VISITANTE (a la derecha)
  const awayTeamName = isRiverHome ? 'Boca Juniors' : 'River Plate';
  const awayCrest = isRiverHome ? '/crest-boca.svg' : '/crest-river.svg';
  const awayScore = isRiverHome ? match.bocaScore : match.riverScore;
  const awayCoach = isRiverHome ? match.bocaCoach : match.riverCoach;
  const awayLineup = isRiverHome ? match.bocaLineup : match.riverLineup;
  const isAwayWinner = isRiverHome ? match.winner === 'boca' : match.winner === 'river';
  const awayColor = isRiverHome ? 'text-[#fdbb30]' : 'text-[#ff4d5a]';
  const awayBadgeBg = isRiverHome ? 'bg-[#fdbb30] text-black' : 'bg-[#c91024] text-white';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1117] border border-[#30363d] rounded-2xl shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Barra superior con botón cerrar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#161b22]/90 backdrop-blur border-b border-[#21262d]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#8b949e]" />
            <span className="font-bold text-xs uppercase tracking-wider text-[#8b949e]">
              Ficha Técnica Oficial del Superclásico
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8b949e] hover:text-white rounded-lg hover:bg-[#21262d] transition"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Marcador Principal: LOCAL a la izquierda, VISITANTE a la derecha */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-[#161b22] to-[#0d1117] border-b border-[#21262d]">
          
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#21262d] text-[#8b949e] border border-[#30363d] mb-2">
              {match.tournament}
            </span>
            <h2 className="text-lg sm:text-2xl font-black text-white">
              Superclásico {match.number} : {match.formattedDate}
            </h2>
          </div>

          {/* Marcador Central */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 my-4">
            
            {/* Equipo LOCAL (Izquierda) */}
            <div className="flex flex-col items-center text-center">
              <figure className="w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center mb-2">
                <img
                  src={homeCrest}
                  alt={homeTeamName}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </figure>
              <div className="flex items-center gap-1.5">
                <span className={`text-base sm:text-xl font-bold ${isHomeWinner ? homeColor : 'text-white'}`}>
                  {homeTeamName}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  Local
                </span>
              </div>
              {homeCoach && (
                <span className="text-xs text-[#8b949e] mt-1 font-medium">
                  DT: {homeCoach}
                </span>
              )}
            </div>

            {/* Score Numbers (Home : Away) */}
            <div className="flex items-center gap-3 font-numbers text-4xl sm:text-6xl font-black px-5 py-2.5 bg-[#0b0e14] border border-[#30363d] rounded-2xl shadow-inner">
              <span className={isHomeWinner ? homeColor : 'text-white'}>
                {homeScore}
              </span>
              <span className="text-[#484f58] text-3xl sm:text-4xl font-normal">:</span>
              <span className={isAwayWinner ? awayColor : 'text-white'}>
                {awayScore}
              </span>
            </div>

            {/* Equipo VISITANTE (Derecha) */}
            <div className="flex flex-col items-center text-center">
              <figure className="w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center mb-2">
                <img
                  src={awayCrest}
                  alt={awayTeamName}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </figure>
              <div className="flex items-center gap-1.5">
                <span className={`text-base sm:text-xl font-bold ${isAwayWinner ? awayColor : 'text-white'}`}>
                  {awayTeamName}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                  Visita
                </span>
              </div>
              {awayCoach && (
                <span className="text-xs text-[#8b949e] mt-1 font-medium">
                  DT: {awayCoach}
                </span>
              )}
            </div>

          </div>

          {/* Penales si hubo definición */}
          {match.penalties && (
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-[#21262d] text-emerald-400 font-numbers text-xs font-bold rounded-lg border border-emerald-500/20">
                Definición por penales: {homeTeamName} ({isRiverHome ? match.penalties.river : match.penalties.boca}) - ({isRiverHome ? match.penalties.boca : match.penalties.river}) {awayTeamName}
              </span>
            </div>
          )}

          {/* Ficha técnica resumida */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-[#21262d] text-xs text-[#8b949e]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8b949e]" />
              {match.stadium}
            </span>
            {match.referee && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8b949e]" />
                Árbitro: {match.referee}
              </span>
            )}
            {match.attendance && (
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#8b949e]" />
                {match.attendance}
              </span>
            )}
          </div>
        </div>

        {/* Resumen / Crónica Histórica */}
        {match.summary && (
          <div className="px-6 sm:px-8 py-4 bg-[#161b22]/40 border-b border-[#21262d] text-xs text-[#8b949e] leading-relaxed italic">
            {match.summary}
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Sección Alineaciones (Escalação) */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] pb-3 border-b border-[#21262d] mb-4">
              Alineaciones Oficiales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Alineación LOCAL (Izquierda) */}
              <div className="p-4 rounded-xl bg-[#161b22]/50 border border-[#30363d]">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#21262d]">
                  <div className="flex items-center gap-2">
                    <img src={homeCrest} alt={homeTeamName} className="w-4 h-5 object-contain" />
                    <span className={`font-bold text-sm ${homeColor}`}>{homeTeamName}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Local
                  </span>
                </div>

                {homeLineup && homeLineup.length > 0 ? (
                  <ul className="space-y-1.5 text-xs">
                    {homeLineup.map((p, idx) => (
                      <li key={idx} className="flex items-center justify-between text-[#8b949e]">
                        <span className="flex items-center gap-2">
                          {p.number && (
                            <span className="font-numbers text-[10px] w-4 text-center opacity-70">
                              {p.number}
                            </span>
                          )}
                          <span className="text-white font-medium">{p.name}</span>
                          {p.position && (
                            <span className="text-[10px] text-[#8b949e]">({p.position})</span>
                          )}
                        </span>

                        {/* Insignias de Goles / Tarjetas */}
                        <span className="flex items-center gap-1">
                          {p.goals && p.goals.length > 0 && (
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${homeBadgeBg}`}>
                              ⚽ {p.goals.join(', ')}'
                            </span>
                          )}
                          {p.yellowCardMinute && (
                            <span className="w-2.5 h-3.5 bg-yellow-400 rounded-[1px] inline-block" title={`Amarilla min ${p.yellowCardMinute}`} />
                          )}
                          {p.redCardMinute && (
                            <span className="w-2.5 h-3.5 bg-red-600 rounded-[1px] inline-block" title={`Roja min ${p.redCardMinute}`} />
                          )}
                          {p.sub && (
                            <span className="text-[10px] text-emerald-400 font-semibold">(Suplente)</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-[#8b949e] italic py-3">
                    Alineación histórica archivada. Goles registrados: {isRiverHome ? (match.riverGoals.length > 0 ? match.riverGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Ninguno') : (match.bocaGoals.length > 0 ? match.bocaGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Ninguno')}.
                  </p>
                )}

                {homeCoach && (
                  <div className="mt-4 pt-3 border-t border-[#21262d] text-xs text-[#8b949e]">
                    <span className="font-bold text-white">Director Técnico: </span>
                    <span>{homeCoach}</span>
                  </div>
                )}
              </div>

              {/* Alineación VISITANTE (Derecha) */}
              <div className="p-4 rounded-xl bg-[#161b22]/50 border border-[#30363d]">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#21262d]">
                  <div className="flex items-center gap-2">
                    <img src={awayCrest} alt={awayTeamName} className="w-4 h-5 object-contain" />
                    <span className={`font-bold text-sm ${awayColor}`}>{awayTeamName}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#8b949e] bg-[#21262d] border border-[#30363d] px-2 py-0.5 rounded">
                    Visitante
                  </span>
                </div>

                {awayLineup && awayLineup.length > 0 ? (
                  <ul className="space-y-1.5 text-xs">
                    {awayLineup.map((p, idx) => (
                      <li key={idx} className="flex items-center justify-between text-[#8b949e]">
                        <span className="flex items-center gap-2">
                          {p.number && (
                            <span className="font-numbers text-[10px] w-4 text-center opacity-70">
                              {p.number}
                            </span>
                          )}
                          <span className="text-white font-medium">{p.name}</span>
                          {p.position && (
                            <span className="text-[10px] text-[#8b949e]">({p.position})</span>
                          )}
                        </span>

                        {/* Insignias de Goles / Tarjetas */}
                        <span className="flex items-center gap-1">
                          {p.goals && p.goals.length > 0 && (
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${awayBadgeBg}`}>
                              ⚽ {p.goals.join(', ')}'
                            </span>
                          )}
                          {p.yellowCardMinute && (
                            <span className="w-2.5 h-3.5 bg-yellow-400 rounded-[1px] inline-block" title={`Amarilla min ${p.yellowCardMinute}`} />
                          )}
                          {p.redCardMinute && (
                            <span className="w-2.5 h-3.5 bg-red-600 rounded-[1px] inline-block" title={`Roja min ${p.redCardMinute}`} />
                          )}
                          {p.sub && (
                            <span className="text-[10px] text-emerald-400 font-semibold">(Suplente)</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-[#8b949e] italic py-3">
                    Alineación histórica archivada. Goles registrados: {!isRiverHome ? (match.riverGoals.length > 0 ? match.riverGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Ninguno') : (match.bocaGoals.length > 0 ? match.bocaGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Ninguno')}.
                  </p>
                )}

                {awayCoach && (
                  <div className="mt-4 pt-3 border-t border-[#21262d] text-xs text-[#8b949e]">
                    <span className="font-bold text-white">Director Técnico: </span>
                    <span>{awayCoach}</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Sección Minuto a Minuto (O Jogo) idéntica a grenal.org */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] pb-3 border-b border-[#21262d] mb-4">
              Línea de Tiempo del Partido (El Juego)
            </h3>

            <div className="relative border-l border-[#30363d] ml-4 space-y-4 text-xs">
              {match.timeline && match.timeline.length > 0 ? (
                match.timeline.map((event, idx) => {
                  const isBocaEvent = event.team === 'boca';

                  return (
                    <div key={idx} className="relative pl-6 group">
                      {/* Marcador circular del timeline */}
                      <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-[#0d1117] ${
                        event.type === 'goal'
                          ? 'bg-emerald-400 scale-125'
                          : event.type === 'red'
                          ? 'bg-red-500'
                          : event.type === 'yellow'
                          ? 'bg-yellow-400'
                          : 'bg-[#8b949e]'
                      }`} />

                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            {event.type === 'goal' && <span>⚽</span>}
                            {event.type === 'yellow' && <span className="w-2 h-3 bg-yellow-400 inline-block rounded-[1px]" />}
                            {event.type === 'red' && <span className="w-2 h-3 bg-red-600 inline-block rounded-[1px]" />}
                            {event.type === 'sub' && <span className="text-blue-400">⇄</span>}
                            {event.type === 'var' && <span className="text-purple-400">📺</span>}

                            {event.player && (
                              <span className="font-bold text-white">
                                {event.player}
                              </span>
                            )}

                            {event.team && (
                              <img
                                src={isBocaEvent ? '/crest-boca.svg' : '/crest-river.svg'}
                                alt={event.team}
                                className="w-3 h-3.5 object-contain inline"
                              />
                            )}
                          </div>

                          {event.detail && (
                            <p className="text-[#8b949e] text-[11px]">
                              {event.detail}
                            </p>
                          )}
                        </div>

                        <span className="font-numbers text-[11px] font-bold text-[#8b949e] whitespace-nowrap">
                          {event.minute > 0 ? `${event.minute}'` : 'Inicio'}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="pl-6 text-xs text-[#8b949e] italic">
                  Detalle cronológico estándar archivado.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
