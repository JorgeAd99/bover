import React, { useState } from 'react';
import { SUPERCLASICOS, TOTAL_STATS } from '../data/superclasicos';
import { Match, CompetitionCategory } from '../types';
import { Calendar, Filter, Trophy, ChevronRight } from 'lucide-react';

interface DecadeFilterViewProps {
  onSelectMatch: (match: Match) => void;
}

export const DecadeFilterView: React.FC<DecadeFilterViewProps> = ({ onSelectMatch }) => {
  const [selectedDecade, setSelectedDecade] = useState<string>('2020-2026');
  const [selectedCategory, setSelectedCategory] = useState<CompetitionCategory | 'all'>('all');
  const [selectedWinner, setSelectedWinner] = useState<'all' | 'boca' | 'river' | 'draw'>('all');

  const decadesList = TOTAL_STATS.byDecade;
  const currentDecadeData = decadesList.find(d => d.decade === selectedDecade) || decadesList[0];

  // Filtramos partidos
  const filteredMatches = SUPERCLASICOS.filter(m => {
    const matchesDecade = m.decade === selectedDecade;
    const matchesCategory = selectedCategory === 'all' || m.competitionCategory === selectedCategory;
    const matchesWinner = selectedWinner === 'all' || m.winner === selectedWinner;
    return matchesDecade && matchesCategory && matchesWinner;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Resumen dinámico de la década estilo grenal.org */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d] shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-[#8b949e] block mb-1">
          Década Seleccionada
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          {currentDecadeData.label}
        </h2>
        <p className="text-sm text-[#8b949e] leading-relaxed max-w-3xl">
          En los {currentDecadeData.matches} superclásicos disputados en este período, se registraron{' '}
          <strong className="text-[#fdbb30]">{currentDecadeData.bocaWins} victorias de Boca Juniors</strong>,{' '}
          <strong className="text-[#ff4d5a]">{currentDecadeData.riverWins} victorias de River Plate</strong> y{' '}
          <strong className="text-white">{currentDecadeData.draws} empates</strong>. Fueron{' '}
          {currentDecadeData.bocaGoals} goles para Boca y {currentDecadeData.riverGoals} para River.
        </p>
      </div>

      {/* Selector de Décadas idéntico a grenal.org */}
      <div>
        <h3 className="text-xs uppercase tracking-wider font-bold text-[#8b949e] mb-3">
          Superclásicos por década
        </h3>

        {/* Mobile Select dropdown */}
        <div className="block sm:hidden mb-4">
          <select
            value={selectedDecade}
            onChange={(e) => setSelectedDecade(e.target.value)}
            className="w-full bg-[#161b22] border border-[#30363d] rounded-xl px-4 py-3 text-sm text-white font-semibold focus:outline-none"
          >
            {decadesList.map((d) => (
              <option key={d.decade} value={d.decade}>
                {d.decade} ({d.matches} partidos)
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons Pills */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {decadesList.map((d) => {
            const isSelected = selectedDecade === d.decade;
            return (
              <button
                key={d.decade}
                onClick={() => setSelectedDecade(d.decade)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-[#161b22] hover:bg-[#21262d] text-[#8b949e] hover:text-white border border-[#30363d]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{d.decade}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${isSelected ? 'bg-black/10 text-black' : 'bg-[#21262d] text-[#8b949e]'}`}>
                  {d.matches}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtros secundarios: Torneo y Resultado */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#21262d] text-xs">
        
        {/* Filtro Competencia */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-lg border border-[#30363d]">
          <span className="text-[#8b949e] px-2 font-semibold flex items-center gap-1">
            <Filter className="w-3 h-3" /> Torneo:
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded transition ${selectedCategory === 'all' ? 'bg-[#21262d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedCategory('liga')}
            className={`px-2.5 py-1 rounded transition ${selectedCategory === 'liga' ? 'bg-[#21262d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Liga
          </button>
          <button
            onClick={() => setSelectedCategory('copa_nacional')}
            className={`px-2.5 py-1 rounded transition ${selectedCategory === 'copa_nacional' ? 'bg-[#21262d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Copas
          </button>
          <button
            onClick={() => setSelectedCategory('internacional')}
            className={`px-2.5 py-1 rounded transition ${selectedCategory === 'internacional' ? 'bg-[#21262d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Libertadores / Int.
          </button>
        </div>

        {/* Filtro Ganador */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-lg border border-[#30363d]">
          <span className="text-[#8b949e] px-2 font-semibold">Resultado:</span>
          <button
            onClick={() => setSelectedWinner('all')}
            className={`px-2.5 py-1 rounded transition ${selectedWinner === 'all' ? 'bg-[#21262d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedWinner('boca')}
            className={`px-2.5 py-1 rounded transition ${selectedWinner === 'boca' ? 'bg-[#0b2f6d] text-[#fdbb30] font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Ganó Boca
          </button>
          <button
            onClick={() => setSelectedWinner('river')}
            className={`px-2.5 py-1 rounded transition ${selectedWinner === 'river' ? 'bg-[#c91024] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Ganó River
          </button>
          <button
            onClick={() => setSelectedWinner('draw')}
            className={`px-2.5 py-1 rounded transition ${selectedWinner === 'draw' ? 'bg-[#30363d] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Empate
          </button>
        </div>

      </div>

      {/* Listado de Partidos idéntico a grenal.org con equipo Local a la izquierda */}
      {filteredMatches.length === 0 ? (
        <div className="py-16 text-center text-[#8b949e] bg-[#161b22]/30 rounded-2xl border border-[#30363d]">
          <Trophy className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="font-semibold text-white">No hay partidos registrados con los filtros seleccionados.</p>
          <p className="text-xs mt-1">Probá cambiando el filtro de torneo o resultado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((m) => {
            const isRiverHome = m.homeTeam === 'river';

            // Datos equipo LOCAL (a la izquierda)
            const homeTeamName = isRiverHome ? 'River Plate' : 'Boca Juniors';
            const homeCrest = isRiverHome ? '/crest-river.svg' : '/crest-boca.svg';
            const homeScore = isRiverHome ? m.riverScore : m.bocaScore;
            const homeGoals = isRiverHome ? m.riverGoals : m.bocaGoals;
            const isHomeWinner = isRiverHome ? m.winner === 'river' : m.winner === 'boca';
            const homeWinColor = isRiverHome ? 'text-[#ff4d5a]' : 'text-[#fdbb30]';
            const homeHoverColor = isRiverHome ? 'group-hover:text-[#ff4d5a]' : 'group-hover:text-[#fdbb30]';

            // Datos equipo VISITANTE (a la derecha)
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
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#21262d] text-xs font-semibold">
                  <span className="text-[#8b949e] flex items-center gap-1.5">
                    <span className="font-bold text-white">Superclásico #{m.number}</span>
                    <span>•</span>
                    <span>{m.formattedDate}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#21262d] text-[#8b949e] border border-[#30363d] truncate max-w-[150px]">
                    {m.tournament}
                  </span>
                </div>

                {/* Marcador Central: LOCAL a la izquierda, VISITANTE a la derecha */}
                <div className="flex items-center justify-between py-2 px-1">
                  
                  {/* LOCAL (Izquierda) */}
                  <div className="flex items-center gap-3">
                    <img src={homeCrest} alt={homeTeamName} className="w-10 h-12 object-contain drop-shadow" />
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

                  {/* Marcador Numérico */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 font-numbers text-2xl font-black px-3 py-1 bg-[#0d1117] rounded-lg border border-[#21262d]">
                      <span className={isHomeWinner ? homeWinColor : 'text-white'}>
                        {homeScore}
                      </span>
                      <span className="text-[#484f58]">:</span>
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

                  {/* VISITANTE (Derecha) */}
                  <div className="flex items-center gap-3 text-right flex-row-reverse">
                    <img src={awayCrest} alt={awayTeamName} className="w-10 h-12 object-contain drop-shadow" />
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

                {/* Footer */}
                <div className="pt-3 mt-3 border-t border-[#21262d] flex items-center justify-between text-[11px] text-[#8b949e]">
                  <span className="truncate max-w-[200px] sm:max-w-[280px]">{m.stadium}</span>
                  <span className="font-semibold text-white/70 group-hover:text-white flex items-center gap-1 transition">
                    Ver detalles <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
