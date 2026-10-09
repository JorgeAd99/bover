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
                {d.label} ({d.matches} partidos)
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons Pills Grid */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {decadesList.map((d) => {
            const isActive = d.decade === selectedDecade;
            return (
              <button
                key={d.decade}
                onClick={() => setSelectedDecade(d.decade)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition border ${
                  isActive
                    ? 'bg-[#21262d] text-white border-white/40 shadow-sm'
                    : 'bg-[#161b22] text-[#8b949e] border-[#30363d] hover:text-white hover:bg-[#21262d]'
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subfiltros adicionales: Competencia y Resultado */}
      <div className="flex flex-wrap items-center gap-3 pt-2 pb-4 border-b border-[#21262d] text-xs">
        
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
            className={`px-2.5 py-1 rounded transition ${selectedWinner === 'draw' ? 'bg-[#484f58] text-white font-bold' : 'text-[#8b949e] hover:text-white'}`}
          >
            Empates
          </button>
        </div>

      </div>

      {/* Listado de Partidos idéntico a grenal.org */}
      {filteredMatches.length === 0 ? (
        <div className="py-16 text-center text-[#8b949e] bg-[#161b22]/30 rounded-2xl border border-[#30363d]">
          <Trophy className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="font-semibold text-white">No hay partidos registrados con los filtros seleccionados.</p>
          <p className="text-xs mt-1">Probá cambiando el filtro de torneo o resultado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((m) => {
            const isBocaWinner = m.winner === 'boca';
            const isRiverWinner = m.winner === 'river';

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

                {/* Marcador */}
                <div className="flex items-center justify-between py-2 px-1">
                  
                  {/* Boca */}
                  <div className="flex items-center gap-3">
                    <img src="/crest-boca.svg" alt="Boca" className="w-10 h-12 object-contain drop-shadow" />
                    <div>
                      <span className="font-bold text-sm block text-white group-hover:text-[#fdbb30] transition">
                        Boca Juniors
                      </span>
                      <span className="text-xs text-[#8b949e]">
                        {m.bocaGoals.length > 0 ? m.bocaGoals.map(g => g.player).join(', ') : 'Sin goles'}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-2 font-numbers text-2xl font-black px-3 py-1 bg-[#0d1117] rounded-lg border border-[#21262d]">
                    <span className={isBocaWinner ? 'text-[#fdbb30]' : 'text-white'}>
                      {m.bocaScore}
                    </span>
                    <span className="text-[#484f58]">:</span>
                    <span className={isRiverWinner ? 'text-[#ff4d5a]' : 'text-white'}>
                      {m.riverScore}
                    </span>
                  </div>

                  {/* River */}
                  <div className="flex items-center gap-3 text-right flex-row-reverse">
                    <img src="/crest-river.svg" alt="River" className="w-10 h-12 object-contain drop-shadow" />
                    <div>
                      <span className="font-bold text-sm block text-white group-hover:text-[#ff4d5a] transition">
                        River Plate
                      </span>
                      <span className="text-xs text-[#8b949e]">
                        {m.riverGoals.length > 0 ? m.riverGoals.map(g => g.player).join(', ') : 'Sin goles'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Footer */}
                <div className="pt-3 mt-3 border-t border-[#21262d] flex items-center justify-between text-[11px] text-[#8b949e]">
                  <span className="truncate">{m.stadium}</span>
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
