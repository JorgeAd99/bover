import React, { useState } from 'react';
import { TOP_COACHES } from '../data/coaches';
import { CoachStats } from '../types';
import { Trophy } from 'lucide-react';

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
      
      {/* Segmented Control por Club */}
      <div className="flex items-center gap-1 bg-[#121215] p-1 rounded-xl border border-white/[0.07] text-xs font-medium w-fit">
        <button
          onClick={() => setFilterTeam('all')}
          className={`px-4 py-2 rounded-lg ui-pressable ${
            filterTeam === 'all' ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Todos los Técnicos
        </button>
        <button
          onClick={() => setFilterTeam('boca')}
          className={`px-4 py-2 rounded-lg ui-pressable ${
            filterTeam === 'boca' ? 'bg-[#0a2558] text-[#facc15] font-semibold border border-[#facc15]/30' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Boca Juniors
        </button>
        <button
          onClick={() => setFilterTeam('river')}
          className={`px-4 py-2 rounded-lg ui-pressable ${
            filterTeam === 'river' ? 'bg-[#e11d48] text-white font-semibold border border-white/20' : 'text-zinc-400 hover:text-zinc-200'
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
            <article
              key={coach.id}
              className="p-6 rounded-2xl border border-white/[0.07] bg-[#121215] hover:border-white/[0.14] transition-colors space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/[0.06] flex items-center justify-center p-2 shrink-0">
                      <img
                        src={isBoca ? '/crest-boca.svg' : '/crest-river.svg'}
                        alt={coach.team}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-zinc-50 leading-tight">
                        {coach.name}
                      </h3>
                      <span className="text-xs text-zinc-400 font-normal block mt-0.5">
                        {coach.fullName} · {coach.era}
                      </span>
                    </div>
                  </div>

                  <span className="font-numbers text-xs font-bold px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/[0.06]">
                    #{idx + 1}
                  </span>
                </div>

                {/* Estadísticas Tabulares */}
                <div className="grid grid-cols-4 gap-2 p-3.5 rounded-xl bg-[#09090b] border border-white/[0.06] text-center font-numbers text-xs">
                  <div>
                    <span className="font-black text-base text-zinc-100 block">
                      {coach.matches}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Dirigidos
                    </span>
                  </div>
                  <div>
                    <span className="font-black text-base text-emerald-400 block">
                      {coach.wins}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Victorias
                    </span>
                  </div>
                  <div>
                    <span className="font-black text-base text-zinc-200 block">
                      {coach.draws}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Empates
                    </span>
                  </div>
                  <div>
                    <span className="font-black text-base text-[#facc15] block">
                      {coach.winPercentage}%
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">
                      Eficacia
                    </span>
                  </div>
                </div>
              </div>

              {/* Hitos directos */}
              {coach.titlesAgainstRival && coach.titlesAgainstRival.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-white/[0.06] text-xs">
                  <span className="font-semibold text-zinc-300 flex items-center gap-1.5 text-xs">
                    <Trophy className="w-3.5 h-3.5 text-[#facc15]" />
                    Hitos y eliminaciones directas:
                  </span>
                  <ul className="space-y-1 pl-4 list-disc text-zinc-400">
                    {coach.titlesAgainstRival.map((title, i) => (
                      <li key={i}>{title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>

    </div>
  );
};
