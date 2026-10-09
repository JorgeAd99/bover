import React, { useState } from 'react';
import { TOTAL_STATS } from '../data/superclasicos';

export const NumbersSection: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string>('all');

  // Cálculo de estadísticas según filtro
  const currentStats = React.useMemo(() => {
    if (selectedComp === 'all') {
      return {
        matches: TOTAL_STATS.totalMatches,
        bocaWins: TOTAL_STATS.bocaWins,
        riverWins: TOTAL_STATS.riverWins,
        draws: TOTAL_STATS.draws,
        bocaGoals: TOTAL_STATS.bocaGoals,
        riverGoals: TOTAL_STATS.riverGoals
      };
    }
    const found = TOTAL_STATS.byCompetition.find(c => c.name.toLowerCase().includes(selectedComp));
    if (found) {
      return {
        matches: found.matches,
        bocaWins: found.bocaWins,
        riverWins: found.riverWins,
        draws: found.draws,
        bocaGoals: found.bocaGoals,
        riverGoals: found.riverGoals
      };
    }
    return {
      matches: TOTAL_STATS.totalMatches,
      bocaWins: TOTAL_STATS.bocaWins,
      riverWins: TOTAL_STATS.riverWins,
      draws: TOTAL_STATS.draws,
      bocaGoals: TOTAL_STATS.bocaGoals,
      riverGoals: TOTAL_STATS.riverGoals
    };
  }, [selectedComp]);

  // Cálculos porcentuales para el Donut SVG
  const totalMatches = currentStats.matches;
  const bocaPct = (currentStats.bocaWins / totalMatches) * 100;
  const riverPct = (currentStats.riverWins / totalMatches) * 100;
  const drawsPct = (currentStats.draws / totalMatches) * 100;

  // Cálculos para la barra de goles
  const totalGoals = currentStats.bocaGoals + currentStats.riverGoals;
  const bocaGoalsPct = (currentStats.bocaGoals / totalGoals) * 100;
  const riverGoalsPct = (currentStats.riverGoals / totalGoals) * 100;

  // Donut SVG circumference calculation (r = 45 -> c = 282.74)
  const c = 2 * Math.PI * 45;
  const bocaStroke = (bocaPct / 100) * c;
  const riverStroke = (riverPct / 100) * c;
  const drawStroke = (drawsPct / 100) * c;

  const bocaOffset = 0;
  const riverOffset = -bocaStroke;
  const drawOffset = -(bocaStroke + riverStroke);

  return (
    <section className="mb-14">
      {/* Título de Sección idéntico a grenal.org */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fdbb30]"></span>
          Números
        </h2>

        {/* Mini tabs de filtro de competencia */}
        <div className="flex items-center gap-1 bg-[#161b22] p-1 rounded-lg border border-[#30363d] self-start sm:self-auto text-xs font-semibold">
          <button
            onClick={() => setSelectedComp('all')}
            className={`px-3 py-1.5 rounded-md transition ${
              selectedComp === 'all'
                ? 'bg-[#21262d] text-white shadow'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Oficial Completo
          </button>
          <button
            onClick={() => setSelectedComp('liga')}
            className={`px-3 py-1.5 rounded-md transition ${
              selectedComp === 'liga'
                ? 'bg-[#21262d] text-white shadow'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Ligas
          </button>
          <button
            onClick={() => setSelectedComp('copas')}
            className={`px-3 py-1.5 rounded-md transition ${
              selectedComp === 'copas'
                ? 'bg-[#21262d] text-white shadow'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Copas Nac.
          </button>
          <button
            onClick={() => setSelectedComp('internacional')}
            className={`px-3 py-1.5 rounded-md transition ${
              selectedComp === 'internacional'
                ? 'bg-[#21262d] text-white shadow'
                : 'text-[#8b949e] hover:text-white'
            }`}
          >
            Internacionales
          </button>
        </div>
      </div>

      {/* Grid Principal de Highlights idéntico a grenal.org */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6">
        
        {/* Columna Izquierda: 3 Tiles de Resultados */}
        <div className="flex flex-col gap-3">
          
          {/* Tile Victorias Boca */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#0b2f6d]/60 bg-gradient-to-r from-[#0b2f6d]/30 to-[#071a3d]/20 backdrop-blur flex items-center justify-between hover:border-[#fdbb30]/50 transition group">
            <div className="flex items-center gap-3">
              <img src="/crest-boca.svg" alt="Boca Juniors" className="w-8 h-10 object-contain drop-shadow" />
              <div>
                <span className="block text-xs uppercase tracking-wider font-bold text-[#fdbb30]">
                  Boca Juniors
                </span>
                <span className="text-sm text-[#8b949e] font-medium">Victorias de Boca</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#fdbb30] transition">
                {currentStats.bocaWins}
              </span>
              <span className="block text-[11px] text-[#8b949e] font-numbers">
                {bocaPct.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Tile Victorias River */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#c91024]/50 bg-gradient-to-r from-[#c91024]/20 to-[#630812]/15 backdrop-blur flex items-center justify-between hover:border-[#c91024] transition group">
            <div className="flex items-center gap-3">
              <img src="/crest-river.svg" alt="River Plate" className="w-8 h-10 object-contain drop-shadow" />
              <div>
                <span className="block text-xs uppercase tracking-wider font-bold text-[#ff4d5a]">
                  River Plate
                </span>
                <span className="text-sm text-[#8b949e] font-medium">Victorias de River</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ff4d5a] transition">
                {currentStats.riverWins}
              </span>
              <span className="block text-[11px] text-[#8b949e] font-numbers">
                {riverPct.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Tile Empates */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#30363d] bg-[#161b22]/70 backdrop-blur flex items-center justify-between hover:border-[#484f58] transition group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-10 rounded flex items-center justify-center bg-[#21262d] text-[#8b949e] font-bold text-sm">
                =
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-bold text-[#8b949e]">
                  Tablas
                </span>
                <span className="text-sm text-[#8b949e] font-medium">Partidos Empatados</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {currentStats.draws}
              </span>
              <span className="block text-[11px] text-[#8b949e] font-numbers">
                {drawsPct.toFixed(1)}%
              </span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Gráfico Doughnut + Total Partidos */}
        <div className="p-6 rounded-xl border border-[#30363d] bg-[#161b22]/50 backdrop-blur flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* SVG Donut Chart interactivo */}
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              {/* Círculo fondo */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="#21262d"
                strokeWidth="9"
              />
              {/* Boca slice (Azul y Oro) */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="#0b2f6d"
                strokeWidth="9"
                strokeDasharray={`${bocaStroke} ${c - bocaStroke}`}
                strokeDashoffset={bocaOffset}
                className="transition-all duration-700 ease-out"
              />
              {/* River slice (Rojo) */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="#c91024"
                strokeWidth="9"
                strokeDasharray={`${riverStroke} ${c - riverStroke}`}
                strokeDashoffset={riverOffset}
                className="transition-all duration-700 ease-out"
              />
              {/* Empates slice (Gris oscuro) */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="#484f58"
                strokeWidth="9"
                strokeDasharray={`${drawStroke} ${c - drawStroke}`}
                strokeDashoffset={drawOffset}
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Centro del Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-numbers text-3xl sm:text-4xl font-black text-white">
                {currentStats.matches}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b949e]">
                Partidos
              </span>
            </div>
          </div>

          {/* Leyenda debajo del donut */}
          <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-[#21262d] w-full text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#0b2f6d] border border-[#fdbb30]"></span>
              <span className="text-[#8b949e]">Boca ({bocaPct.toFixed(0)}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#c91024] border border-white"></span>
              <span className="text-[#8b949e]">River ({riverPct.toFixed(0)}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#484f58]"></span>
              <span className="text-[#8b949e]">Empates ({drawsPct.toFixed(0)}%)</span>
            </div>
          </div>

        </div>

      </div>

      {/* Barra de Comparación de Goles idéntica a grenal.org */}
      <div className="p-5 rounded-xl border border-[#30363d] bg-[#161b22]/50">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2.5">
          <div className="flex items-center gap-2 text-[#fdbb30]">
            <img src="/crest-boca.svg" alt="Boca" className="w-4 h-5 object-contain" />
            <span>{currentStats.bocaGoals} goles de Boca Juniors</span>
            <span className="text-[11px] text-[#8b949e]">({bocaGoalsPct.toFixed(1)}%)</span>
          </div>
          <div className="flex items-center gap-2 text-[#ff4d5a]">
            <span className="text-[11px] text-[#8b949e]">({riverGoalsPct.toFixed(1)}%)</span>
            <span>{currentStats.riverGoals} goles de River Plate</span>
            <img src="/crest-river.svg" alt="River" className="w-4 h-5 object-contain" />
          </div>
        </div>

        {/* Proportional visual bar */}
        <div className="w-full h-3.5 bg-[#21262d] rounded-full overflow-hidden flex p-0.5">
          <div
            style={{ width: `${bocaGoalsPct}%` }}
            className="h-full bg-gradient-to-r from-[#0b2f6d] to-[#1d4ed8] rounded-l-full transition-all duration-700"
            title={`Boca: ${currentStats.bocaGoals} goles (${bocaGoalsPct.toFixed(1)}%)`}
          />
          <div
            style={{ width: `${riverGoalsPct}%` }}
            className="h-full bg-gradient-to-r from-[#e11d48] to-[#c91024] rounded-r-full transition-all duration-700"
            title={`River: ${currentStats.riverGoals} goles (${riverGoalsPct.toFixed(1)}%)`}
          />
        </div>
      </div>
    </section>
  );
};
