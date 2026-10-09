import React, { useState } from 'react';
import { TOP_PLAYERS } from '../data/players';
import { PlayerStats, TeamType } from '../types';
import { Award, Flame, Search, Filter } from 'lucide-react';

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
      
      {/* Banner de Jugadores */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d]">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Ranking Histórico de Jugadores
        </h2>
        <p className="text-sm text-[#8b949e] max-w-2xl">
          Goleadores máximos, hombres récords de presencias y figuras inolvidables que dejaron su sello en los 113 años de Superclásicos.
        </p>
      </div>

      {/* Controles de filtro y búsqueda */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#21262d]">
        
        {/* Filtro por club */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-xl border border-[#30363d] text-xs font-bold w-full sm:w-auto">
          <button
            onClick={() => setFilterTeam('all')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition ${
              filterTeam === 'all' ? 'bg-[#21262d] text-white shadow' : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterTeam('boca')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition ${
              filterTeam === 'boca' ? 'bg-[#0b2f6d] text-[#fdbb30] shadow' : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Boca Juniors
          </button>
          <button
            onClick={() => setFilterTeam('river')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition ${
              filterTeam === 'river' ? 'bg-[#c91024] text-white shadow' : 'text-[#8b949e] hover:text-white'
            }`}
          >
            River Plate
          </button>
        </div>

        {/* Buscador local */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8b949e]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar futbolista..."
            className="w-full bg-[#161b22] border border-[#30363d] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-white/40"
          />
        </div>

      </div>

      {/* Listado de tarjetas de jugadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player, idx) => {
          const isBoca = player.team === 'boca';
          const isRiver = player.team === 'river';

          return (
            <div
              key={player.id}
              onClick={() => onSelectPlayer(player)}
              className="p-5 rounded-2xl border border-[#30363d] bg-[#161b22]/70 hover:bg-[#161b22] hover:border-[#8b949e]/50 cursor-pointer transition shadow-sm group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={isBoca ? '/crest-boca.svg' : isRiver ? '/crest-river.svg' : '/logo-bover.svg'}
                      alt={player.team}
                      className="w-8 h-10 object-contain drop-shadow"
                    />
                    <div>
                      <h3 className="font-black text-base text-white group-hover:text-[#fdbb30] transition leading-tight">
                        {player.name}
                      </h3>
                      <span className="text-xs text-[#8b949e] font-medium block">
                        {player.position}
                      </span>
                    </div>
                  </div>

                  <span className="font-numbers text-xs font-black px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e]">
                    #{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#8b949e] line-clamp-2 mt-2 leading-relaxed">
                  {player.topFact}
                </p>
              </div>

              {/* Estadísticas en pie */}
              <div className="mt-5 pt-3 border-t border-[#21262d] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#8b949e]">
                  {player.era}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-numbers text-white font-bold">
                    {player.matches} <span className="text-[#8b949e] font-normal text-[10px]">PJ</span>
                  </span>
                  <span className="font-numbers text-[#fdbb30] font-bold">
                    {player.goals} <span className="text-[#8b949e] font-normal text-[10px]">Goles</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
