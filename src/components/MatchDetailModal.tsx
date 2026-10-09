import React from 'react';
import { Match } from '../types';
import { X, Trophy, MapPin, User, Users, Calendar, AlertCircle } from 'lucide-react';

interface MatchDetailModalProps {
  match: Match | null;
  onClose: () => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({ match, onClose }) => {
  if (!match) return null;

  const isBocaWinner = match.winner === 'boca';
  const isRiverWinner = match.winner === 'river';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Contenedor Modal */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d1117] border border-[#30363d] rounded-2xl shadow-2xl text-left custom-scroll">
        
        {/* Sticky Top Bar con botón de cerrar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#161b22]/95 border-b border-[#21262d] backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fdbb30]"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-[#8b949e]">
              Ficha del Superclásico #{match.number}
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

        {/* Marcador Principal idéntico a grenal.org */}
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
            
            {/* Boca Juniors */}
            <div className="flex flex-col items-center text-center">
              <figure className="w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center mb-2">
                <img
                  src="/crest-boca.svg"
                  alt="Boca Juniors"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </figure>
              <span className={`text-base sm:text-xl font-bold ${isBocaWinner ? 'text-[#fdbb30]' : 'text-white'}`}>
                Boca Juniors
              </span>
              <span className="text-xs text-[#8b949e] mt-1 font-medium">
                DT: {match.bocaCoach}
              </span>
            </div>

            {/* Score Numbers */}
            <div className="flex items-center gap-3 font-numbers text-4xl sm:text-6xl font-black px-5 py-2.5 bg-[#0b0e14] border border-[#30363d] rounded-2xl shadow-inner">
              <span className={isBocaWinner ? 'text-[#fdbb30]' : 'text-white'}>
                {match.bocaScore}
              </span>
              <span className="text-[#484f58] text-3xl sm:text-4xl font-normal">:</span>
              <span className={isRiverWinner ? 'text-[#ff4d5a]' : 'text-white'}>
                {match.riverScore}
              </span>
            </div>

            {/* River Plate */}
            <div className="flex flex-col items-center text-center">
              <figure className="w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center mb-2">
                <img
                  src="/crest-river.svg"
                  alt="River Plate"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </figure>
              <span className={`text-base sm:text-xl font-bold ${isRiverWinner ? 'text-[#ff4d5a]' : 'text-white'}`}>
                River Plate
              </span>
              <span className="text-xs text-[#8b949e] mt-1 font-medium">
                DT: {match.riverCoach}
              </span>
            </div>

          </div>

          {/* Penales si hubo definición */}
          {match.penalties && (
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-[#21262d] text-emerald-400 font-numbers text-xs font-bold rounded-lg border border-emerald-500/20">
                Definición por penales: Boca ({match.penalties.boca}) - ({match.penalties.river}) River
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

        {/* Resumen / Crónica del Clásico */}
        {match.summary && (
          <div className="px-6 sm:px-8 py-4 bg-[#161b22]/40 border-b border-[#21262d] text-xs sm:text-sm text-[#8b949e] leading-relaxed">
            <span className="font-bold text-white mr-1.5">Crónica:</span>
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
              
              {/* Alineación Boca */}
              <div className="p-4 rounded-xl bg-[#161b22]/50 border border-[#30363d]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#21262d]">
                  <img src="/crest-boca.svg" alt="Boca" className="w-4 h-5 object-contain" />
                  <span className="font-bold text-sm text-[#fdbb30]">Boca Juniors</span>
                </div>

                <ul className="space-y-1.5 text-xs">
                  {match.bocaLineup.map((p, idx) => (
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
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#fdbb30] text-black">
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

                <div className="mt-4 pt-3 border-t border-[#21262d] text-xs text-[#8b949e]">
                  <span className="font-bold text-white">Director Técnico: </span>
                  <span>{match.bocaCoach}</span>
                </div>
              </div>

              {/* Alineación River */}
              <div className="p-4 rounded-xl bg-[#161b22]/50 border border-[#30363d]">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#21262d]">
                  <img src="/crest-river.svg" alt="River" className="w-4 h-5 object-contain" />
                  <span className="font-bold text-sm text-[#ff4d5a]">River Plate</span>
                </div>

                <ul className="space-y-1.5 text-xs">
                  {match.riverLineup.map((p, idx) => (
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
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#c91024] text-white">
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

                <div className="mt-4 pt-3 border-t border-[#21262d] text-xs text-[#8b949e]">
                  <span className="font-bold text-white">Director Técnico: </span>
                  <span>{match.riverCoach}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Sección Minuto a Minuto (O Jogo) idéntica a grenal.org */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] pb-3 border-b border-[#21262d] mb-4">
              Línea de Tiempo del Partido (El Juego)
            </h3>

            <div className="relative border-l border-[#30363d] ml-4 space-y-4 text-xs">
              {match.timeline.map((event, idx) => {
                const isBocaEvent = event.team === 'boca';
                const isRiverEvent = event.team === 'river';

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
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
