import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, User, Shield } from 'lucide-react';
import { SUPERCLASICOS } from '../data/superclasicos';
import { TOP_PLAYERS } from '../data/players';
import { TOP_COACHES } from '../data/coaches';
import { Match, PlayerStats, CoachStats } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMatch: (match: Match) => void;
  onSelectPlayer: (player: PlayerStats) => void;
  onSelectCoach: (coach: CoachStats) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMatch,
  onSelectPlayer,
  onSelectCoach
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const matchResults = normalized === '' ? [] : SUPERCLASICOS.filter(m =>
    m.formattedDate.toLowerCase().includes(normalized) ||
    m.tournament.toLowerCase().includes(normalized) ||
    m.stadium.toLowerCase().includes(normalized) ||
    m.bocaGoals.some(g => g.player.toLowerCase().includes(normalized)) ||
    m.riverGoals.some(g => g.player.toLowerCase().includes(normalized)) ||
    m.bocaLineup.some(p => p.name.toLowerCase().includes(normalized)) ||
    m.riverLineup.some(p => p.name.toLowerCase().includes(normalized)) ||
    m.bocaCoach.toLowerCase().includes(normalized) ||
    m.riverCoach.toLowerCase().includes(normalized) ||
    `#${m.number}`.includes(normalized)
  ).slice(0, 5);

  const playerResults = normalized === '' ? [] : TOP_PLAYERS.filter(p =>
    p.name.toLowerCase().includes(normalized) ||
    p.fullName.toLowerCase().includes(normalized) ||
    p.topFact.toLowerCase().includes(normalized)
  ).slice(0, 4);

  const coachResults = normalized === '' ? [] : TOP_COACHES.filter(c =>
    c.name.toLowerCase().includes(normalized) ||
    c.fullName.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const hasResults = matchResults.length > 0 || playerResults.length > 0 || coachResults.length > 0;

  /*
   * Siguiendo la filosofía de Emil Kowalski (SKILL.md):
   * El Command Palette (⌘K) se abre instantáneamente sin animación de escala lenta
   * para sentirse ultra reactivo al teclado.
   */
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#121215] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden"
      >
        
        {/* Barra de Búsqueda Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.07] gap-3">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por jugador (Palermo, Labruna), partido (Madrid 2018), DT (Gallardo, Bianchi)..."
            className="w-full bg-transparent text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-100 rounded ui-pressable"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-[10px] font-numbers font-semibold text-zinc-400 hover:text-zinc-100 bg-zinc-900 rounded-md border border-white/[0.08] ui-pressable"
          >
            ESC
          </button>
        </div>

        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          
          {normalized === '' && (
            <div className="py-6 text-center text-zinc-400 text-xs space-y-3">
              <p className="font-medium text-zinc-300">Búsquedas rápidas sugeridas</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {['Cavani', 'Labruna', 'Palermo', 'Madrid 2018', 'Gallardo', 'Bianchi', '1981', 'Bombonera'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs border border-white/[0.07] ui-pressable"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {normalized !== '' && !hasResults && (
            <div className="py-10 text-center text-zinc-400 text-sm">
              No se encontraron registros para «{query}».
            </div>
          )}

          {/* Partidos Encontrados (Local siempre a la izquierda) */}
          {matchResults.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 px-2 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#facc15]" /> Partidos Oficiales
              </span>
              <div className="space-y-1.5">
                {matchResults.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => { onSelectMatch(m); onClose(); }}
                    className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/90 cursor-pointer ui-pressable flex items-center justify-between border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex items-center gap-1.5 font-numbers font-bold text-xs sm:text-sm shrink-0">
                        <span className="text-zinc-100">
                          {m.homeTeam === 'river' ? 'River' : 'Boca'} (L) {m.homeTeam === 'river' ? m.riverScore : m.bocaScore}
                        </span>
                        <span className="text-zinc-500">–</span>
                        <span className="text-zinc-100">
                          {m.homeTeam === 'river' ? m.bocaScore : m.riverScore} {m.homeTeam === 'river' ? 'Boca' : 'River'}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 truncate hidden sm:inline">
                        · {m.formattedDate} ({m.tournament})
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 font-numbers font-semibold pl-2">
                      #{m.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Jugadores Encontrados */}
          {playerResults.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 px-2 mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#e11d48]" /> Futbolistas
              </span>
              <div className="space-y-1.5">
                {playerResults.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => { onSelectPlayer(p); onClose(); }}
                    className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/90 cursor-pointer ui-pressable flex items-center justify-between border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={p.team === 'boca' ? '/crest-boca.svg' : p.team === 'river' ? '/crest-river.svg' : '/logo-bover.svg'}
                        alt={p.team}
                        className="w-4 h-5 object-contain"
                      />
                      <span className="text-sm font-bold text-zinc-100">{p.name}</span>
                      <span className="text-xs text-zinc-400">({p.position})</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-numbers">
                      {p.matches} PJ · <strong className="text-[#facc15]">{p.goals} goles</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Técnicos Encontrados */}
          {coachResults.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 px-2 mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Directores Técnicos
              </span>
              <div className="space-y-1.5">
                {coachResults.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => { onSelectCoach(c); onClose(); }}
                    className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/90 cursor-pointer ui-pressable flex items-center justify-between border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={c.team === 'boca' ? '/crest-boca.svg' : '/crest-river.svg'}
                        alt={c.team}
                        className="w-4 h-5 object-contain"
                      />
                      <span className="text-sm font-bold text-zinc-100">{c.name}</span>
                      <span className="text-xs text-zinc-400">({c.era})</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-numbers">
                      {c.matches} clásicos · {c.wins} victorias
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
