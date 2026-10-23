import React from 'react';
import { TOTAL_STATS } from '../data/superclasicos';
import { Trophy, MapPin, Sparkles } from 'lucide-react';

export const HistoryStatsView: React.FC = () => {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Desglose por Competencia */}
      <section aria-labelledby="comp-breakdown-heading">
        <div className="mb-5">
          <h2 id="comp-breakdown-heading" className="text-lg sm:text-xl font-bold text-zinc-50 flex items-center gap-2 tracking-[-0.02em]">
            <Trophy className="w-4 h-4 text-[#facc15]" />
            Rendimiento por Competencia Oficial
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Comparativa de partidos ganados, empates y goles según el ámbito del torneo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOTAL_STATS.byCompetition.map((comp) => {
            const total = comp.matches;
            const bocaPct = ((comp.bocaWins / total) * 100).toFixed(1);
            const riverPct = ((comp.riverWins / total) * 100).toFixed(1);

            return (
              <div
                key={comp.name}
                className="p-5 sm:p-6 rounded-2xl border border-white/[0.07] bg-[#121215] flex flex-col justify-between space-y-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-zinc-50">
                      {comp.name}
                    </h3>
                    <span className="text-xs text-zinc-400 font-numbers">
                      {comp.matches} encuentros disputados
                    </span>
                  </div>
                </div>

                {/* Marcadores */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-[#09090b] border border-white/[0.06] text-center font-numbers">
                  <div>
                    <span className="font-black text-lg text-[#facc15] block leading-none">
                      {comp.bocaWins}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold mt-1 block">
                      Boca ({bocaPct}%)
                    </span>
                  </div>
                  <div>
                    <span className="font-black text-lg text-zinc-200 block leading-none">
                      {comp.draws}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold mt-1 block">
                      Empates
                    </span>
                  </div>
                  <div>
                    <span className="font-black text-lg text-[#fb7185] block leading-none">
                      {comp.riverWins}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold mt-1 block">
                      River ({riverPct}%)
                    </span>
                  </div>
                </div>

                {/* Goles */}
                <div className="text-xs text-zinc-400 flex justify-between pt-3 border-t border-white/[0.06] font-numbers">
                  <span>Goles Boca: <strong className="text-zinc-100">{comp.bocaGoals}</strong></span>
                  <span>Goles River: <strong className="text-zinc-100">{comp.riverGoals}</strong></span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Historial en los Estadios Principales */}
      <section aria-labelledby="stadiums-heading">
        <div className="mb-5">
          <h2 id="stadiums-heading" className="text-lg sm:text-xl font-bold text-zinc-50 flex items-center gap-2 tracking-[-0.02em]">
            <MapPin className="w-4 h-4 text-emerald-400" />
            Escenarios Históricos
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Los dos grandes templos donde se forjó la historia del clásico argentino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* La Bombonera */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(10,37,88,0.22)_0%,rgba(18,18,21,0.95)_70%)] space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#0a2558]/50 border border-[#facc15]/25 flex items-center justify-center p-2 shrink-0">
                <img src="/crest-boca.svg" alt="Boca Juniors" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-50">
                  Estadio Alberto J. Armando (La Bombonera)
                </h3>
                <p className="text-xs text-zinc-400">Inaugurado en 1940 · Brandsen 805, La Boca</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Boca Juniors mantiene una histórica ventaja actuando como local en su estadio con más de 53 victorias oficiales sobre su clásico rival, consolidando a La Bombonera como un escenario determinante en el balance general.
            </p>
          </div>

          {/* El Monumental */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(225,29,72,0.16)_0%,rgba(18,18,21,0.95)_70%)] space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#e11d48]/15 border border-[#e11d48]/30 flex items-center justify-center p-2 shrink-0">
                <img src="/crest-river.svg" alt="River Plate" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-50">
                  Estadio Mâs Monumental
                </h3>
                <p className="text-xs text-zinc-400">Inaugurado en 1938 · Av. Figueroa Alcorta 7597, Núñez</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              El recinto con mayor aforo de Sudamérica (+84.500 espectadores). En Núñez se han disputado más de un centenar de duelos oficiales de altísima paridad, incluyendo definiciones continentales y locales memorables.
            </p>
          </div>

        </div>
      </section>

      {/* Récords y Grandes Hitos */}
      <section aria-labelledby="records-heading">
        <div className="mb-5">
          <h2 id="records-heading" className="text-lg sm:text-xl font-bold text-zinc-50 flex items-center gap-2 tracking-[-0.02em]">
            <Sparkles className="w-4 h-4 text-[#facc15]" />
            Marcas y Récords Estadísticos
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Hitos documentados en los 266 enfrentamientos oficiales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">Máximas Goleadas Oficiales</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-[#facc15]">Boca 6–0 River</strong> (1928, Era Amateur) y <strong className="text-[#facc15]">Boca 5–1 River</strong> (1959). Por el lado millonario, <strong className="text-[#fb7185]">River 5–1 Boca</strong> (1941, La Máquina).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">Póker en un Solo Partido</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              <strong className="text-zinc-200">Carlos María García Cambón</strong> convirtió 4 goles en su debut oficial con la camiseta de Boca Juniors en el triunfo 5–2 del Metropolitano 1974.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">Mayor Racha Invicta</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Boca Juniors alcanzó <strong className="text-zinc-200">13 partidos oficiales consecutivos sin derrotas</strong> entre 1991 y 1994 (8 victorias y 5 empates).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">Ambos Clubes (Los «Bover»)</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Más de 100 futbolistas vistieron ambas camisetas: Ruggeri, Gareca, Caniggia, Gatti, Batistuta, Maidana y Pratto, entre otros.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">El Gol Más Rápido</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Anotado por <strong className="text-zinc-200">Manuel Lanzini</strong> a los 43 segundos de juego para River Plate en La Bombonera durante el Torneo Final 2013.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-1.5">
            <h3 className="font-bold text-zinc-100">Definición Continental 2018</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Única final de Copa Libertadores disputada entre ambos, resuelta en el Estadio Santiago Bernabéu con triunfo de River Plate por 3–1 en tiempo suplementario.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
