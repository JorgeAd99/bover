import React, { useEffect } from 'react';
import { Match } from '../types';
import { X, MapPin, User, Users, Shield, CircleDot, ArrowLeftRight, Tv } from 'lucide-react';

interface MatchDetailModalProps {
  match: Match | null;
  onClose: () => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({ match, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && match) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [match, onClose]);

  if (!match) return null;

  const isRiverHome = match.homeTeam === 'river';

  // Equipo LOCAL (Izquierda)
  const homeTeamName = isRiverHome ? 'River Plate' : 'Boca Juniors';
  const homeCrest = isRiverHome ? '/crest-river.svg' : '/crest-boca.svg';
  const homeScore = isRiverHome ? match.riverScore : match.bocaScore;
  const homeCoach = isRiverHome ? match.riverCoach : match.bocaCoach;
  const homeLineup = isRiverHome ? match.riverLineup : match.bocaLineup;
  const isHomeWinner = isRiverHome ? match.winner === 'river' : match.winner === 'boca';
  const homeColor = isRiverHome ? 'text-[#fb7185]' : 'text-[#facc15]';
  const homeBadgeBg = isRiverHome ? 'bg-[#e11d48]/20 text-[#fb7185] border border-[#e11d48]/30' : 'bg-[#facc15]/15 text-[#facc15] border border-[#facc15]/30';

  // Equipo VISITANTE (Derecha)
  const awayTeamName = isRiverHome ? 'Boca Juniors' : 'River Plate';
  const awayCrest = isRiverHome ? '/crest-boca.svg' : '/crest-river.svg';
  const awayScore = isRiverHome ? match.bocaScore : match.riverScore;
  const awayCoach = isRiverHome ? match.bocaCoach : match.riverCoach;
  const awayLineup = isRiverHome ? match.bocaLineup : match.riverLineup;
  const isAwayWinner = isRiverHome ? match.winner === 'boca' : match.winner === 'river';
  const awayColor = isRiverHome ? 'text-[#facc15]' : 'text-[#fb7185]';
  const awayBadgeBg = isRiverHome ? 'bg-[#facc15]/15 text-[#facc15] border border-[#facc15]/30' : 'bg-[#e11d48]/20 text-[#fb7185] border border-[#e11d48]/30';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-backdrop"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121215] border border-white/[0.1] rounded-2xl shadow-2xl text-zinc-50 animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Barra superior fija */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121215]/90 backdrop-blur-md border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zinc-400" />
            <span className="font-semibold text-xs text-zinc-300">
              Acta Oficial · Superclásico #{match.number}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 ui-pressable"
            aria-label="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Marcador Principal: LOCAL a la izquierda, VISITANTE a la derecha */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-zinc-900/60 to-[#121215] border-b border-white/[0.07]">
          
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 text-zinc-300 border border-white/[0.08] mb-2">
              {match.tournament} · {match.formattedDate}
            </span>
          </div>

          {/* Scoreboard Central */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-10 max-w-2xl mx-auto my-2">
            
            {/* Equipo LOCAL (Izquierda) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center p-3 mb-3">
                <img
                  src={homeCrest}
                  alt={homeTeamName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <span className={`text-sm sm:text-lg font-bold ${isHomeWinner ? homeColor : 'text-zinc-100'}`}>
                  {homeTeamName}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/25">
                  Local
                </span>
              </div>
              {homeCoach && (
                <span className="text-xs text-zinc-400 mt-1">
                  DT: {homeCoach}
                </span>
              )}
            </div>

            {/* Score Numbers (Home : Away) */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3.5 font-numbers text-4xl sm:text-5xl font-black px-5 py-3 bg-[#09090b] border border-white/[0.09] rounded-2xl">
                <span className={isHomeWinner ? homeColor : 'text-zinc-100'}>
                  {homeScore}
                </span>
                <span className="text-zinc-600 text-2xl sm:text-3xl font-normal">:</span>
                <span className={isAwayWinner ? awayColor : 'text-zinc-100'}>
                  {awayScore}
                </span>
              </div>
              {match.penalties && (
                <span className="mt-2 px-2.5 py-0.5 bg-emerald-950/50 text-emerald-400 font-numbers text-xs font-semibold rounded-md border border-emerald-500/25">
                  Penales: {isRiverHome ? match.penalties.river : match.penalties.boca} – {isRiverHome ? match.penalties.boca : match.penalties.river}
                </span>
              )}
            </div>

            {/* Equipo VISITANTE (Derecha) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center p-3 mb-3">
                <img
                  src={awayCrest}
                  alt={awayTeamName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <span className={`text-sm sm:text-lg font-bold ${isAwayWinner ? awayColor : 'text-zinc-100'}`}>
                  {awayTeamName}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/[0.07]">
                  Visita
                </span>
              </div>
              {awayCoach && (
                <span className="text-xs text-zinc-400 mt-1">
                  DT: {awayCoach}
                </span>
              )}
            </div>

          </div>

          {/* Metadatos del encuentro */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-6 pt-5 border-t border-white/[0.06] text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              {match.stadium}
            </span>
            {match.referee && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-400" />
                Árbitro: {match.referee}
              </span>
            )}
            {match.attendance && (
              <span className="flex items-center gap-1.5 font-numbers">
                <Users className="w-3.5 h-3.5 text-zinc-400" />
                {match.attendance}
              </span>
            )}
          </div>
        </div>

        {/* Crónica Histórica */}
        {match.summary && (
          <div className="px-6 sm:px-8 py-4 bg-zinc-900/40 border-b border-white/[0.06] text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {match.summary}
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Alineaciones Oficiales */}
          <div>
            <h3 className="text-sm font-bold text-zinc-200 pb-3 border-b border-white/[0.07] mb-4">
              Formaciones y Goleadores
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Alineación LOCAL (Izquierda) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#09090b] border border-white/[0.07]">
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <img src={homeCrest} alt={homeTeamName} className="w-4 h-5 object-contain" />
                    <span className={`font-bold text-sm ${homeColor}`}>{homeTeamName}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/25 px-2 py-0.5 rounded">
                    Local
                  </span>
                </div>

                {homeLineup && homeLineup.length > 0 ? (
                  <ul className="space-y-2 text-xs">
                    {homeLineup.map((p, idx) => (
                      <li key={idx} className="flex items-center justify-between text-zinc-400">
                        <span className="flex items-center gap-2">
                          {p.number && (
                            <span className="font-numbers text-[11px] w-4 text-center text-zinc-500">
                              {p.number}
                            </span>
                          )}
                          <span className="text-zinc-100 font-medium">{p.name}</span>
                          {p.position && (
                            <span className="text-[10px] text-zinc-500">({p.position})</span>
                          )}
                        </span>

                        <span className="flex items-center gap-1.5 font-numbers">
                          {p.goals && p.goals.length > 0 && (
                            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${homeBadgeBg}`}>
                              <CircleDot className="w-2.5 h-2.5" /> {p.goals.join(', ')}'
                            </span>
                          )}
                          {p.yellowCardMinute && (
                            <span className="w-2 h-3 bg-amber-400 rounded-[2px] inline-block" title={`Amarilla ${p.yellowCardMinute}'`} />
                          )}
                          {p.redCardMinute && (
                            <span className="w-2 h-3 bg-rose-600 rounded-[2px] inline-block" title={`Roja ${p.redCardMinute}'`} />
                          )}
                          {p.sub && (
                            <span className="text-[10px] text-zinc-400 font-medium">Ingresó</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-400 py-3 leading-relaxed">
                    Goles registrados: <strong className="text-zinc-200">{isRiverHome ? (match.riverGoals.length > 0 ? match.riverGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Sin goles') : (match.bocaGoals.length > 0 ? match.bocaGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Sin goles')}</strong>.
                  </p>
                )}

                {homeCoach && (
                  <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-200">Director Técnico: </span>
                    <span>{homeCoach}</span>
                  </div>
                )}
              </div>

              {/* Alineación VISITANTE (Derecha) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#09090b] border border-white/[0.07]">
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <img src={awayCrest} alt={awayTeamName} className="w-4 h-5 object-contain" />
                    <span className={`font-bold text-sm ${awayColor}`}>{awayTeamName}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-800 border border-white/[0.07] px-2 py-0.5 rounded">
                    Visitante
                  </span>
                </div>

                {awayLineup && awayLineup.length > 0 ? (
                  <ul className="space-y-2 text-xs">
                    {awayLineup.map((p, idx) => (
                      <li key={idx} className="flex items-center justify-between text-zinc-400">
                        <span className="flex items-center gap-2">
                          {p.number && (
                            <span className="font-numbers text-[11px] w-4 text-center text-zinc-500">
                              {p.number}
                            </span>
                          )}
                          <span className="text-zinc-100 font-medium">{p.name}</span>
                          {p.position && (
                            <span className="text-[10px] text-zinc-500">({p.position})</span>
                          )}
                        </span>

                        <span className="flex items-center gap-1.5 font-numbers">
                          {p.goals && p.goals.length > 0 && (
                            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${awayBadgeBg}`}>
                              <CircleDot className="w-2.5 h-2.5" /> {p.goals.join(', ')}'
                            </span>
                          )}
                          {p.yellowCardMinute && (
                            <span className="w-2 h-3 bg-amber-400 rounded-[2px] inline-block" title={`Amarilla ${p.yellowCardMinute}'`} />
                          )}
                          {p.redCardMinute && (
                            <span className="w-2 h-3 bg-rose-600 rounded-[2px] inline-block" title={`Roja ${p.redCardMinute}'`} />
                          )}
                          {p.sub && (
                            <span className="text-[10px] text-zinc-400 font-medium">Ingresó</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-zinc-400 py-3 leading-relaxed">
                    Goles registrados: <strong className="text-zinc-200">{!isRiverHome ? (match.riverGoals.length > 0 ? match.riverGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Sin goles') : (match.bocaGoals.length > 0 ? match.bocaGoals.map(g => `${g.player} (${g.minute}')`).join(', ') : 'Sin goles')}</strong>.
                  </p>
                )}

                {awayCoach && (
                  <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-200">Director Técnico: </span>
                    <span>{awayCoach}</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Línea de Tiempo del Partido */}
          <div>
            <h3 className="text-sm font-bold text-zinc-200 pb-3 border-b border-white/[0.07] mb-4">
              Cronología de Incidencias
            </h3>

            <div className="relative border-l border-white/[0.1] ml-3 space-y-4 text-xs">
              {match.timeline && match.timeline.length > 0 ? (
                match.timeline.map((event, idx) => {
                  const isBocaEvent = event.team === 'boca';

                  return (
                    <div key={idx} className="relative pl-6">
                      <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#121215] ${
                        event.type === 'goal'
                          ? 'bg-emerald-400'
                          : event.type === 'red'
                          ? 'bg-rose-500'
                          : event.type === 'yellow'
                          ? 'bg-amber-400'
                          : 'bg-zinc-500'
                      }`} />

                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            {event.type === 'goal' && <CircleDot className="w-3.5 h-3.5 text-emerald-400" />}
                            {event.type === 'yellow' && <span className="w-2 h-3 bg-amber-400 inline-block rounded-[2px]" />}
                            {event.type === 'red' && <span className="w-2 h-3 bg-rose-600 inline-block rounded-[2px]" />}
                            {event.type === 'sub' && <ArrowLeftRight className="w-3.5 h-3.5 text-sky-400" />}
                            {event.type === 'var' && <Tv className="w-3.5 h-3.5 text-purple-400" />}

                            {event.player && (
                              <span className="font-bold text-zinc-100">
                                {event.player}
                              </span>
                            )}

                            {event.team && (
                              <img
                                src={isBocaEvent ? '/crest-boca.svg' : '/crest-river.svg'}
                                alt={event.team}
                                className="w-3.5 h-4 object-contain inline"
                              />
                            )}
                          </div>

                          {event.detail && (
                            <p className="text-zinc-400 text-xs">
                              {event.detail}
                            </p>
                          )}
                        </div>

                        <span className="font-numbers text-xs font-semibold text-zinc-400 whitespace-nowrap">
                          {event.minute > 0 ? `${event.minute}'` : 'Inicio'}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="pl-6 text-xs text-zinc-400">
                  Registro histórico de resultado y goleadores verificado en acta oficial.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
