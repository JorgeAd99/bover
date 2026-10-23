import React, { useState } from 'react';
import { TOP_PLAYERS } from '../data/players';
import { PlayerStats, TeamType } from '../types';
import { Search } from 'lucide-react';

interface PlayersListViewProps {
  onSelectPlayer: (player: PlayerStats) => void;
}

export const PlayersListView: React.FC<PlayersListViewProps> = ({ onSelectPlayer }) => {
  const [filterTeam, setFilterTeam] = useState<TeamType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlayers = TOP_PLAYERS.filter(p => {
    const matchesTeam = filterTeam === 'all' || p.team === filterTeam || p.team === 'both';
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Controles de filtro y búsqueda */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Segmented Control por club */}
        <div className="flex items-center gap-1 bg-[#121215] p-1 rounded-xl border border-white/[0.07] text-xs font-medium w-full sm:w-auto">
          <button
            onClick={() => setFilterTeam('all')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg ui-pressable ${
              filterTeam === 'all' ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Todos los Clubes
          </button>
          <button
            onClick={() => setFilterTeam('boca')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg ui-pressable ${
              filterTeam === 'boca' ? 'bg-[#0a2558] text-[#facc15] font-semibold border border-[#facc15]/30' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Boca Juniors
          </button>
          <button
            onClick={() => setFilterTeam('river')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg ui-pressable ${
              filterTeam === 'river' ? 'bg-[#e11d48] text-white font-semibold border border-white/20' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            River Plate
          </button>
        </div>

        {/* Buscador local */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por nombre de jugador..."
            className="w-full bg-[#121215] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/[0.22] transition-colors"
          />
        </div>

      </div>

      {/* Grid de tarjetas de jugadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player, idx) => {
          const isBoca = player.team === 'boca';
          const isRiver = player.team === 'river';

          return (
            <article
              key={player.id}
              onClick={() => onSelectPlayer(player)}
              className="p-5 rounded-2xl border border-white/[0.07] bg-[#121215] hover:bg-[#16161a] cursor-pointer ui-card-interactive group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/[0.06] flex items-center justify-center p-1.5 shrink-0">
                      <img
                        src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
                        alt={player.team}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-zinc-50 group-hover:text-[#facc15] transition-colors leading-tight">
                        {player.name}
                      </h3>
                      <span className="text-xs text-zinc-400 font-normal block mt-0.5">
                        {player.position} · {player.era}
                      </span>
                    </div>
                  </div>

                  <span className="font-numbers text-xs font-bold px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-white/[0.06]">
                    #{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                  {player.topFact}
                </p>
              </div>

              {/* Estadísticas en pie */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-numbers">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-zinc-100 font-bold text-sm">{player.matches}</span>
                    <span className="text-zinc-400 ml-1 text-[11px]">PJ</span>
                  </div>
                  <div>
                    <span className="text-[#facc15] font-bold text-sm">{player.goals}</span>
                    <span className="text-zinc-400 ml-1 text-[11px]">Goles</span>
                  </div>
                </div>
                <span className="text-emerald-400 font-semibold text-xs">
                  {player.wins} PG
                </span>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
