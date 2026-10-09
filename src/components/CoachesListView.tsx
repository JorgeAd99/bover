import React, { useState } from 'react';
import { TOP_COACHES } from '../data/coaches';
import { CoachStats } from '../types';
import { Shield, Trophy, Award, Search } from 'lucide-react';

interface CoachesListViewProps {
  onSelectCoach?: (coach: CoachStats) => void;
}

export const CoachesListView: React.FC<CoachesListViewProps> = () => {
  const [filterTeam, setFilterTeam] = useState<'all' | 'boca' | 'river'>('all');

  const filteredCoaches = TOP_COACHES.filter(c => {
    return filterTeam === 'all' || c.team === filterTeam;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Banner de Técnicos */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d]">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Ranking Histórico de Entrenadores
        </h2>
        <p className="text-sm text-[#8b949e] max-w-2xl">
          Estrategas ilustres que marcaron épocas doradas desde el banco de suplentes: más clásicos dirigidos, victorias y títulos directos.
        </p>
      </div>

      {/* Filtro por Club */}
      <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-xl border border-[#30363d] text-xs font-bold w-fit">
        <button
          onClick={() => setFilterTeam('all')}
          className={`px-4 py-2 rounded-lg transition ${
            filterTeam === 'all' ? 'bg-[#21262d] text-white shadow' : 'text-[#8b949e] hover:text-white'
          }`}
        >
          Todos los Técnicos
        </button>
        <button
          onClick={() => setFilterTeam('boca')}
          className={`px-4 py-2 rounded-lg transition ${
            filterTeam === 'boca' ? 'bg-[#0b2f6d] text-[#fdbb30] shadow' : 'text-[#8b949e] hover:text-white'
          }`}
        >
          Boca Juniors
        </button>
        <button
          onClick={() => setFilterTeam('river')}
          className={`px-4 py-2 rounded-lg transition ${
            filterTeam === 'river' ? 'bg-[#c91024] text-white shadow' : 'text-[#8b949e] hover:text-white'
          }`}
        >
          River Plate
        </button>
      </div>

      {/* Grid de Técnicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCoaches.map((coach, idx) => {
          const isBoca = coach.team === 'boca';

          return (
            <div
              key={coach.id}
              className="p-5 sm:p-6 rounded-2xl border border-[#30363d] bg-[#161b22]/70 hover:bg-[#161b22] transition shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={isBoca ? '/crest-boca.svg' : '/crest-river.svg'}
                    alt={coach.team}
                    className="w-9 h-11 object-contain drop-shadow"
                  />
                  <div>
                    <h3 className="font-black text-lg text-white">
                      {coach.name}
                    </h3>
                    <span className="text-xs text-[#8b949e] font-medium block">
                      {coach.fullName} • {coach.era}
                    </span>
                  </div>
                </div>

                <span className="font-numbers text-sm font-black px-2.5 py-1 rounded-lg bg-[#21262d] text-white">
                  #{idx + 1}
                </span>
              </div>

              {/* Estadísticas de Duelos */}
              <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-[#0d1117] border border-[#21262d] text-center font-numbers text-xs">
                <div>
                  <span className="font-extrabold text-base text-white block">
                    {coach.matches}
                  </span>
                  <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                    Partidos
                  </span>
                </div>
                <div>
                  <span className="font-extrabold text-base text-emerald-400 block">
                    {coach.wins}
                  </span>
                  <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                    Victorias
                  </span>
                </div>
                <div>
                  <span className="font-extrabold text-base text-white block">
                    {coach.draws}
                  </span>
                  <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                    Empates
                  </span>
                </div>
                <div>
                  <span className="font-extrabold text-base text-[#fdbb30] block">
                    {coach.winPercentage}%
                  </span>
                  <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                    Efectividad
                  </span>
                </div>
              </div>

              {/* Títulos / Hitos directos */}
              {coach.titlesAgainstRival && coach.titlesAgainstRival.length > 0 && (
                <div className="space-y-1.5 pt-1 text-xs">
                  <span className="font-bold text-[#8b949e] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5 text-[#fdbb30]" />
                    Hitos y títulos frente al rival:
                  </span>
                  <ul className="space-y-1 pl-4 list-disc text-[#e6edf3]">
                    {coach.titlesAgainstRival.map((title, i) => (
                      <li key={i}>{title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
