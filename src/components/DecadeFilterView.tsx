import React, { useState } from 'react';
import { SUPERCLASICOS, TOTAL_STATS } from '../data/superclasicos';
import { Match, CompetitionCategory } from '../types';
import { Calendar, Filter, Trophy, ArrowRight } from 'lucide-react';

interface DecadeFilterViewProps {
  onSelectMatch: (match: Match) => void;
}

export const DecadeFilterView: React.FC<DecadeFilterViewProps> = ({ onSelectMatch }) => {
  const [selectedDecade, setSelectedDecade] = useState<string>('2020-2026');
  const [selectedCategory, setSelectedCategory] = useState<CompetitionCategory | 'all'>('all');
  const [selectedWinner, setSelectedWinner] = useState<'all' | 'boca' | 'river' | 'draw'>('all');

  const decadesList = TOTAL_STATS.byDecade;
  const currentDecadeData = decadesList.find(d => d.decade === selectedDecade) || decadesList[0];

  const filteredMatches = SUPERCLASICOS.filter(m => {
    const matchesDecade = m.decade === selectedDecade;
    const matchesCategory = selectedCategory === 'all' || m.competitionCategory === selectedCategory;
    const matchesWinner = selectedWinner === 'all' || m.winner === selectedWinner;
    return matchesDecade && matchesCategory && matchesWinner;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Selector de Décadas Horizontal */}
      <div>
        <div className="block sm:hidden mb-4">
          <label htmlFor="decade-select" className="block text-xs font-medium text-zinc-400 mb-1.5">
            Seleccionar período histórico
          </label>
          <select
            id="decade-select"
            value={selectedDecade}
            onChange={(e) => setSelectedDecade(e.target.value)}
            className="w-full bg-[#121215] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-zinc-100 font-semibold focus:outline-none"
          >
            {decadesList.map((d) => (
              <option key={d.decade} value={d.decade}>
                {d.decade} ({d.matches} partidos)
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-[#121215] border border-white/[0.07]">
          {decadesList.map((d) => {
            const isSelected = selectedDecade === d.decade;
            return (
              <button
                key={d.decade}
                onClick={() => setSelectedDecade(d.decade)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold ui-pressable flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-zinc-100 text-zinc-950 shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 opacity-75" />
                <span className="font-numbers">{d.decade}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-numbers font-bold ${
                  isSelected ? 'bg-zinc-950/15 text-zinc-950' : 'bg-zinc-800/90 text-zinc-400'
                }`}>
                  {d.matches}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumen de la Década Seleccionada */}
      <div className="p-6 rounded-2xl bg-[#121215] border border-white/[0.07] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
            {currentDecadeData.label}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Sobre <strong className="text-zinc-200 font-numbers">{currentDecadeData.matches} partidos oficiales</strong> disputados en la década, Boca Juniors obtuvo{' '}
            <strong className="text-[#facc15] font-numbers">{currentDecadeData.bocaWins} triunfos</strong> ({currentDecadeData.bocaGoals} goles), River Plate logró{' '}
            <strong className="text-[#fb7185] font-numbers">{currentDecadeData.riverWins} victorias</strong> ({currentDecadeData.riverGoals} goles) y empataron en{' '}
            <strong className="text-zinc-200 font-numbers">{currentDecadeData.draws} ocasiones</strong>.
          </p>
        </div>

        {/* Mini KPIs de la década */}
        <div className="grid grid-cols-3 gap-2.5 shrink-0 font-numbers text-center">
          <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-[#facc15]/20">
            <span className="text-xl font-black text-[#facc15] block leading-none">{currentDecadeData.bocaWins}</span>
            <span className="text-[10px] font-semibold uppercase text-zinc-400 mt-1 block">Boca</span>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.07]">
            <span className="text-xl font-black text-zinc-200 block leading-none">{currentDecadeData.draws}</span>
            <span className="text-[10px] font-semibold uppercase text-zinc-400 mt-1 block">Empates</span>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-[#e11d48]/25">
            <span className="text-xl font-black text-[#fb7185] block leading-none">{currentDecadeData.riverWins}</span>
            <span className="text-[10px] font-semibold uppercase text-zinc-400 mt-1 block">River</span>
          </div>
        </div>
      </div>

      {/* Controles de Filtro Secundarios */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Filtro Competencia */}
        <div className="flex flex-wrap items-center gap-1 bg-[#121215] p-1 rounded-xl border border-white/[0.07]">
          <span className="text-zinc-400 px-2.5 font-medium flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Competencia:
          </span>
          {([
            { id: 'all', label: 'Todas' },
            { id: 'liga', label: 'Ligas' },
            { id: 'copa_nacional', label: 'Copas Nac.' },
            { id: 'internacional', label: 'CONMEBOL' },
          ] as const).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg ui-pressable ${
                selectedCategory === cat.id
                  ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtro Ganador */}
        <div className="flex flex-wrap items-center gap-1 bg-[#121215] p-1 rounded-xl border border-white/[0.07]">
          <span className="text-zinc-400 px-2.5 font-medium">Resultado:</span>
          <button
            onClick={() => setSelectedWinner('all')}
            className={`px-3 py-1.5 rounded-lg ui-pressable ${selectedWinner === 'all' ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedWinner('boca')}
            className={`px-3 py-1.5 rounded-lg ui-pressable ${selectedWinner === 'boca' ? 'bg-[#0a2558] text-[#facc15] font-semibold border border-[#facc15]/30' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Boca Juniors
          </button>
          <button
            onClick={() => setSelectedWinner('river')}
            className={`px-3 py-1.5 rounded-lg ui-pressable ${selectedWinner === 'river' ? 'bg-[#e11d48] text-white font-semibold border border-white/20' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            River Plate
          </button>
          <button
            onClick={() => setSelectedWinner('draw')}
            className={`px-3 py-1.5 rounded-lg ui-pressable ${selectedWinner === 'draw' ? 'bg-zinc-700 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            Empate
          </button>
        </div>

      </div>

      {/* Listado de Partidos con Equipo Local siempre a la izquierda */}
      {filteredMatches.length === 0 ? (
        <div className="py-16 text-center text-zinc-400 bg-[#121215] rounded-2xl border border-white/[0.07]">
          <Trophy className="w-8 h-8 mx-auto mb-2.5 text-zinc-600" />
          <p className="font-semibold text-zinc-200">No se registran encuentros con estos criterios en la década.</p>
          <p className="text-xs mt-1">Probá seleccionando otra competencia o resultado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((m) => {
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
                {/* Header */}
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

                {/* Marcador Central: LOCAL a la izquierda, VISITANTE a la derecha */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-1">
                  
                  {/* LOCAL (Izquierda) */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                      <img src={homeCrest} alt={homeTeamName} className="w-full h-full object-contain" />
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

                  {/* Marcador Numérico */}
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

                  {/* VISITANTE (Derecha) */}
                  <div className="flex items-center gap-3 text-right flex-row-reverse min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                      <img src={awayCrest} alt={awayTeamName} className="w-full h-full object-contain" />
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

                {/* Footer */}
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
      )}

    </div>
  );
};
