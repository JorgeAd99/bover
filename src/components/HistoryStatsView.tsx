import React from 'react';
import { TOTAL_STATS } from '../data/superclasicos';
import { Trophy, Flame, ShieldAlert, MapPin, Sparkles } from 'lucide-react';

export const HistoryStatsView: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Banner de Historial */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d]">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Historial y Desglose Estadístico
        </h2>
        <p className="text-sm text-[#8b949e] max-w-2xl">
          El análisis pormenorizado del duelo más pasional del planeta: competencias, estadios emblemáticos, máximas goleadas y marcas imbatibles.
        </p>
      </div>

      {/* Desglose por Competencia */}
      <div>
        <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] mb-4 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#fdbb30]" />
          Desglose por Competencias Oficiales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOTAL_STATS.byCompetition.map((comp) => {
            const total = comp.matches;
            const bocaPct = ((comp.bocaWins / total) * 100).toFixed(1);
            const riverPct = ((comp.riverWins / total) * 100).toFixed(1);

            return (
              <div
                key={comp.name}
                className="p-5 rounded-2xl border border-[#30363d] bg-[#161b22]/70 space-y-4"
              >
                <div>
                  <h4 className="font-black text-base text-white">
                    {comp.name}
                  </h4>
                  <span className="text-xs text-[#8b949e] font-numbers">
                    {comp.matches} partidos oficiales
                  </span>
                </div>

                {/* Marcadores */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#0d1117] border border-[#21262d] text-center font-numbers">
                  <div>
                    <span className="font-extrabold text-base text-[#fdbb30] block">
                      {comp.bocaWins}
                    </span>
                    <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                      Boca ({bocaPct}%)
                    </span>
                  </div>
                  <div>
                    <span className="font-extrabold text-base text-white block">
                      {comp.draws}
                    </span>
                    <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                      Empates
                    </span>
                  </div>
                  <div>
                    <span className="font-extrabold text-base text-[#ff4d5a] block">
                      {comp.riverWins}
                    </span>
                    <span className="text-[10px] text-[#8b949e] uppercase font-bold">
                      River ({riverPct}%)
                    </span>
                  </div>
                </div>

                {/* Goles */}
                <div className="text-xs text-[#8b949e] flex justify-between pt-2 border-t border-[#21262d]">
                  <span>Goles Boca: <strong className="text-white">{comp.bocaGoals}</strong></span>
                  <span>Goles River: <strong className="text-white">{comp.riverGoals}</strong></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historial en los Estadios Principales */}
      <div>
        <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-400" />
          En los Templos del Fútbol
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* La Bombonera */}
          <div className="p-5 rounded-2xl border border-[#0b2f6d]/60 bg-gradient-to-br from-[#0b2f6d]/20 to-[#161b22] space-y-3">
            <div className="flex items-center gap-3">
              <img src="/crest-boca.svg" alt="Boca" className="w-8 h-10 object-contain" />
              <div>
                <h4 className="font-black text-base text-white">
                  Estadio Alberto J. Armando (La Bombonera)
                </h4>
                <p className="text-xs text-[#8b949e]">Inaugurado en 1940 en Brandsen 805</p>
              </div>
            </div>
            <p className="text-xs text-[#8b949e] leading-relaxed">
              Boca mantiene una marcada supremacía como local en su templo con más de 53 victorias oficiales sobre River, convirtiendo a La Bombonera en un verdadero bastión histórico.
            </p>
          </div>

          {/* El Monumental */}
          <div className="p-5 rounded-2xl border border-[#c91024]/50 bg-gradient-to-br from-[#c91024]/15 to-[#161b22] space-y-3">
            <div className="flex items-center gap-3">
              <img src="/crest-river.svg" alt="River" className="w-8 h-10 object-contain" />
              <div>
                <h4 className="font-black text-base text-white">
                  Estadio Mâs Monumental
                </h4>
                <p className="text-xs text-[#8b949e]">Inaugurado en 1938 en Figueroa Alcorta y Udaondo</p>
              </div>
            </div>
            <p className="text-xs text-[#8b949e] leading-relaxed">
              El estadio con mayor capacidad de Sudamérica (+84.000 espectadores). En Núñez, los duelos son de extrema paridad, con recordadas victorias de ambos conjuntos a lo largo de las décadas.
            </p>
          </div>

        </div>
      </div>

      {/* Récords y Grandes Hitos */}
      <div>
        <h3 className="text-sm uppercase tracking-wider font-bold text-[#8b949e] mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          Récords Inolvidables del Superclásico
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">Máximas Goleadas</span>
            <p className="text-[#8b949e] leading-relaxed">
              <strong>Boca 5 - 1 River</strong> (1959 en La Bombonera)<br/>
              <strong>River 5 - 1 Boca</strong> (1941 con La Máquina)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">Póker en un Solo Partido</span>
            <p className="text-[#8b949e] leading-relaxed">
              <strong>Carlos María García Cambón</strong> anotó 4 goles en su debut oficial en el recordado Boca 5 - 2 River de 1974.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">Mayor Racha Invicta</span>
            <p className="text-[#8b949e] leading-relaxed">
              Boca Juniors hilvanó <strong>13 partidos consecutivos invicto</strong> entre 1991 y 1994 (8 victorias y 5 empates).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">Vestieron Ambas Camisetas</span>
            <p className="text-[#8b949e] leading-relaxed">
              Oscar Ruggeri, Ricardo Gareca, Claudio Caniggia, Hugo Gatti, Jonatan Maidana, Lucas Pratto, Julio Toresani, Gabriel Batistuta, entre más de 100 futbolistas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">El Gol más Rápido</span>
            <p className="text-[#8b949e] leading-relaxed">
              <strong>Manuel Lanzini</strong> a los 43 segundos para River en La Bombonera (Torneo Final 2013).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-1.5">
            <span className="font-bold text-[#fdbb30] block text-sm">La Final en Madrid 2018</span>
            <p className="text-[#8b949e] leading-relaxed">
              El único clásico disputado fuera del continente por el título de la Copa Libertadores, con victoria de River por 3-1 en tiempo suplementario.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
