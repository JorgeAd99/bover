import React, { useState } from 'react';
import { TOTAL_STATS } from '../data/superclasicos';

export const NumbersSection: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string>('all');

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

  const totalMatches = currentStats.matches;
  const bocaPct = (currentStats.bocaWins / totalMatches) * 100;
  const riverPct = (currentStats.riverWins / totalMatches) * 100;
  const drawsPct = (currentStats.draws / totalMatches) * 100;

  const totalGoals = currentStats.bocaGoals + currentStats.riverGoals;
  const bocaGoalsPct = (currentStats.bocaGoals / totalGoals) * 100;
  const riverGoalsPct = (currentStats.riverGoals / totalGoals) * 100;

  // Donut SVG circumference (r = 44 -> c = 276.46)
  const r = 44;
  const c = 2 * Math.PI * r;
  const bocaStroke = (bocaPct / 100) * c;
  const riverStroke = (riverPct / 100) * c;
  const drawStroke = (drawsPct / 100) * c;

  const bocaOffset = 0;
  const riverOffset = -bocaStroke;
  const drawOffset = -(bocaStroke + riverStroke);

  const filterTabs = [
    { id: 'all', label: 'Oficial Completo' },
    { id: 'liga', label: 'Ligas Nacionales' },
    { id: 'copas', label: 'Copas Nac.' },
    { id: 'internacional', label: 'CONMEBOL' },
  ];

  return (
    <section aria-labelledby="numbers-heading">
      {/* Encabezado de Sección + Segmented Control */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 id="numbers-heading" className="text-xl sm:text-2xl font-bold text-zinc-50 tracking-[-0.02em]">
            Balance General del Historial
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Distribución oficial de victorias, empates y goles convertidos (1913–2026)
          </p>
        </div>

        {/* Segmented Control de Competencia */}
        <div className="flex flex-wrap items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-white/[0.07] self-start sm:self-auto text-xs font-medium">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedComp(tab.id)}
              className={`px-3 py-1.5 rounded-lg ui-pressable ${
                selectedComp === tab.id
                  ? 'bg-zinc-800 text-zinc-50 font-semibold border border-white/[0.08]'
                  : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        
        {/* Columna Izquierda (7 cols): 3 Tarjetas Comparativas */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          
          {/* Tarjeta Boca Juniors */}
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(10,37,88,0.28)_0%,rgba(18,18,21,0.9)_65%)] flex items-center justify-between group hover:border-[#facc15]/35 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a2558]/50 border border-[#facc15]/25 flex items-center justify-center p-2 shrink-0">
                <img src="/crest-boca.svg" alt="Boca Juniors" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-zinc-50">
                    Boca Juniors
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#facc15]/15 text-[#facc15] border border-[#facc15]/25">
                    +{currentStats.bocaWins - currentStats.riverWins > 0 ? currentStats.bocaWins - currentStats.riverWins : 0} historial
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-zinc-400 block mt-0.5">
                  Partidos ganados oficialmente
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-black text-[#facc15] tracking-tight block leading-none">
                {currentStats.bocaWins}
              </span>
              <span className="inline-block mt-1 text-xs text-zinc-400 font-numbers font-medium">
                {bocaPct.toFixed(1)}% del total
              </span>
            </div>
          </div>

          {/* Tarjeta River Plate */}
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(225,29,72,0.2)_0%,rgba(18,18,21,0.9)_65%)] flex items-center justify-between group hover:border-[#e11d48]/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e11d48]/15 border border-[#e11d48]/30 flex items-center justify-center p-2 shrink-0">
                <img src="/crest-river.svg" alt="River Plate" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-base font-bold text-zinc-50 block">
                  River Plate
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 block mt-0.5">
                  Partidos ganados oficialmente
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-black text-[#fb7185] tracking-tight block leading-none">
                {currentStats.riverWins}
              </span>
              <span className="inline-block mt-1 text-xs text-zinc-400 font-numbers font-medium">
                {riverPct.toFixed(1)}% del total
              </span>
            </div>
          </div>

          {/* Tarjeta Empates */}
          <div className="p-5 rounded-2xl border border-white/[0.07] bg-[#121215] flex items-center justify-between hover:border-white/[0.15] transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/[0.07] flex items-center justify-center text-zinc-300 font-numbers font-bold text-lg shrink-0">
                =
              </div>
              <div>
                <span className="text-base font-bold text-zinc-200 block">
                  Empates
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 block mt-0.5">
                  Igualdad en el marcador
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-numbers text-3xl sm:text-4xl font-black text-zinc-100 tracking-tight block leading-none">
                {currentStats.draws}
              </span>
              <span className="inline-block mt-1 text-xs text-zinc-400 font-numbers font-medium">
                {drawsPct.toFixed(1)}% del total
              </span>
            </div>
          </div>

        </div>

        {/* Columna Derecha (5 cols): Visualización Proporcional Anillo */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-white/[0.07] bg-[#121215] flex flex-col items-center justify-between">
          
          <div className="w-full flex items-center justify-between text-xs text-zinc-400 font-medium mb-2">
            <span>Proporción de resultados</span>
            <span className="font-numbers text-zinc-300 font-semibold">100% verificado</span>
          </div>

          <div className="relative w-44 h-44 my-2 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="transparent"
                stroke="#27272a"
                strokeWidth="8"
              />
              {/* Boca slice (Oro) */}
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="transparent"
                stroke="#facc15"
                strokeWidth="8"
                strokeDasharray={`${bocaStroke} ${c - bocaStroke}`}
                strokeDashoffset={bocaOffset}
                className="transition-[stroke-dasharray,stroke-dashoffset] duration-500 ease-out"
              />
              {/* River slice (Carmesí) */}
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="transparent"
                stroke="#e11d48"
                strokeWidth="8"
                strokeDasharray={`${riverStroke} ${c - riverStroke}`}
                strokeDashoffset={riverOffset}
                className="transition-[stroke-dasharray,stroke-dashoffset] duration-500 ease-out"
              />
              {/* Empates slice (Zinc) */}
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="transparent"
                stroke="#52525b"
                strokeWidth="8"
                strokeDasharray={`${drawStroke} ${c - drawStroke}`}
                strokeDashoffset={drawOffset}
                className="transition-[stroke-dasharray,stroke-dashoffset] duration-500 ease-out"
              />
            </svg>

            {/* Centro del Donut */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-numbers text-4xl font-black text-zinc-50 tracking-tight leading-none">
                {currentStats.matches}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mt-1">
                Partidos
              </span>
            </div>
          </div>

          {/* Leyenda de precisión */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.07] w-full text-center text-xs">
            <div className="p-2 rounded-lg bg-zinc-900/70">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#facc15]" />
                <span className="font-semibold text-zinc-200">Boca</span>
              </div>
              <span className="font-numbers text-zinc-400 text-[11px]">{bocaPct.toFixed(1)}%</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/70">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
                <span className="font-semibold text-zinc-200">River</span>
              </div>
              <span className="font-numbers text-zinc-400 text-[11px]">{riverPct.toFixed(1)}%</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/70">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span className="font-semibold text-zinc-200">Empate</span>
              </div>
              <span className="font-numbers text-zinc-400 text-[11px]">{drawsPct.toFixed(1)}%</span>
            </div>
          </div>

        </div>

      </div>

      {/* Barra Comparativa de Goles */}
      <div className="p-5 rounded-2xl border border-white/[0.07] bg-[#121215]">
        <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
          <div className="flex items-center gap-2.5">
            <img src="/crest-boca.svg" alt="Boca Juniors" className="w-4 h-5 object-contain" />
            <span className="font-bold text-zinc-100 font-numbers">{currentStats.bocaGoals} goles</span>
            <span className="text-xs text-zinc-400 font-numbers">({bocaGoalsPct.toFixed(1)}%)</span>
          </div>

          <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 hidden sm:inline">
             {totalGoals} goles totales convertidos
          </span>

          <div className="flex items-center gap-2.5">
            <span className="text-xs text-zinc-400 font-numbers">({riverGoalsPct.toFixed(1)}%)</span>
            <span className="font-bold text-zinc-100 font-numbers">{currentStats.riverGoals} goles</span>
            <img src="/crest-river.svg" alt="River Plate" className="w-4 h-5 object-contain" />
          </div>
        </div>

        {/* Barra segmentada con separación limpia */}
        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden flex gap-1 p-0.5 border border-white/[0.05]">
          <div
            style={{ width: `${bocaGoalsPct}%` }}
            className="h-full bg-[#facc15] rounded-l-full transition-[width] duration-500 ease-out"
            title={`Boca Juniors: ${currentStats.bocaGoals} goles (${bocaGoalsPct.toFixed(1)}%)`}
          />
          <div
            style={{ width: `${riverGoalsPct}%` }}
            className="h-full bg-[#e11d48] rounded-r-full transition-[width] duration-500 ease-out"
            title={`River Plate: ${currentStats.riverGoals} goles (${riverGoalsPct.toFixed(1)}%)`}
          />
        </div>
      </div>
    </section>
  );
};
