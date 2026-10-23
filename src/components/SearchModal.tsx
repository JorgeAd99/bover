import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, User, Shield, Trophy } from 'lucide-react';
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
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Manejo de atajo Escape
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

  // Búsqueda de partidos
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

  // Búsqueda de jugadores
  const playerResults = normalized === '' ? [] : TOP_PLAYERS.filter(p =>
    p.name.toLowerCase().includes(normalized) ||
    p.fullName.toLowerCase().includes(normalized) ||
    p.topFact.toLowerCase().includes(normalized)
  ).slice(0, 4);

  // Búsqueda de técnicos
  const coachResults = normalized === '' ? [] : TOP_COACHES.filter(c =>
    c.name.toLowerCase().includes(normalized) ||
    c.fullName.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const hasResults = matchResults.length > 0 || playerResults.length > 0 || coachResults.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Barra de Búsqueda Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#21262d] gap-3">
          <Search className="w-5 h-5 text-[#8b949e]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por jugador (Palermo, Labruna), partido (Madrid 2018), DT (Gallardo, Bianchi)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#8b949e] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8b949e] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#8b949e] hover:text-white bg-[#21262d] rounded border border-[#30363d]"
          >
            ESC
          </button>
        </div>

        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {normalized === '' && (
            <div className="py-8 text-center text-[#8b949e] text-xs space-y-2">
              <p className="font-semibold text-white">Sugerencias rápidas:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Cavani', 'Labruna', 'Palermo', 'Madrid 2018', 'Gallardo', 'Bianchi', '1981', 'Bombonera'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-full bg-[#21262d] hover:bg-[#30363d] text-white text-xs border border-[#30363d] transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {normalized !== '' && !hasResults && (
            <div className="py-12 text-center text-[#8b949e] text-sm">
              No se encontraron coincidencias para "{query}".
            </div>
          )}

          {/* Partidos Encontrados */}
          {matchResults.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b949e] px-2 mb-2 block flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#fdbb30]" /> Partidos
              </span>
              <div className="space-y-1.5">
                {matchResults.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => { onSelectMatch(m); onClose(); }}
                    className="p-2.5 rounded-lg bg-[#0d1117] hover:bg-[#21262d] cursor-pointer transition flex items-center justify-between border border-[#21262d]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 font-numbers font-bold text-sm">
                        <span className="text-white">
                          {m.homeTeam === 'river' ? 'River' : 'Boca'} (L) {m.homeTeam === 'river' ? m.riverScore : m.bocaScore}
                        </span>
                        <span className="text-[#8b949e]">-</span>
                        <span className="text-white">
                          {m.homeTeam === 'river' ? m.bocaScore : m.riverScore} {m.homeTeam === 'river' ? 'Boca' : 'River'}
                        </span>
                      </div>
                      <span className="text-xs text-[#8b949e] hidden sm:inline">
                        • {m.formattedDate} ({m.tournament})
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8b949e] font-numbers">
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
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b949e] px-2 mb-2 block flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#c91024]" /> Jugadores
              </span>
              <div className="space-y-1.5">
                {playerResults.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => { onSelectPlayer(p); onClose(); }}
                    className="p-2.5 rounded-lg bg-[#0d1117] hover:bg-[#21262d] cursor-pointer transition flex items-center justify-between border border-[#21262d]"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={p.team === 'boca' ? '/crest-boca.svg' : p.team === 'river' ? '/crest-river.svg' : '/logo-bover.svg'}
                        alt={p.team}
                        className="w-4 h-5 object-contain"
                      />
                      <span className="text-sm font-bold text-white">{p.name}</span>
                      <span className="text-xs text-[#8b949e]">({p.position})</span>
                    </div>
                    <span className="text-xs text-[#8b949e]">
                      {p.matches} PJ • {p.goals} Goles
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Técnicos Encontrados */}
          {coachResults.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b949e] px-2 mb-2 block flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" /> Entrenadores
              </span>
              <div className="space-y-1.5">
                {coachResults.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => { onSelectCoach(c); onClose(); }}
                    className="p-2.5 rounded-lg bg-[#0d1117] hover:bg-[#21262d] cursor-pointer transition flex items-center justify-between border border-[#21262d]"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={c.team === 'boca' ? '/crest-boca.svg' : '/crest-river.svg'}
                        alt={c.team}
                        className="w-4 h-5 object-contain"
                      />
                      <span className="text-sm font-bold text-white">{c.name}</span>
                      <span className="text-xs text-[#8b949e]">({c.era})</span>
                    </div>
                    <span className="text-xs text-[#8b949e]">
                      {c.matches} clásicos • {c.wins} PG
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
