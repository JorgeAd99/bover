import React from 'react';
import { Info, Heart, Database, Shield, BookOpen } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#30363d]">
        <span className="text-xs font-bold uppercase tracking-wider text-[#8b949e] block mb-1">
          Acerca de la iniciativa
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
          ¿Qué es Historia de Bover?
        </h2>
        <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed">
          <strong>Historia de Bover</strong> es una enciclopedia estadística interactiva dedicada al Superclásico del fútbol argentino entre el <strong>Club Atlético Boca Juniors</strong> y el <strong>Club Atlético River Plate</strong>.
        </p>
      </div>

      {/* Secciones de contenido */}
      <div className="space-y-6 text-sm text-[#8b949e] leading-relaxed">
        
        {/* El término Bover */}
        <div className="p-6 rounded-2xl bg-[#161b22]/60 border border-[#30363d] space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-white">
            <BookOpen className="w-5 h-5 text-[#fdbb30]" />
            <h3>El Origen del Término «Bover»</h3>
          </div>
          <p>
            «Bover» es un acrónimo popular surgido en la cultura futbolera y en los medios argentinos (combinando <strong>BO</strong>ca y ri<strong>VER</strong>), utilizado comúnmente para referirse a la dualidad y polarización que ejercen los dos clubes más populares y laureados del país. Juntos agrupan a más del 70% de los aficionados argentinos y protagonizan una de las 5 rivalidades deportivas más intensas del planeta según medios internacionales como BBC, FourFourTwo y World Soccer.
          </p>
        </div>

        {/* Hermanados por el barrio de La Boca */}
        <div className="p-6 rounded-2xl bg-[#161b22]/60 border border-[#30363d] space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-white">
            <Shield className="w-5 h-5 text-[#c91024]" />
            <h3>Nacidos en el Mismo Barrio</h3>
          </div>
          <p>
            Curiosamente, ambos gigantes nacieron a escasas cuadras de distancia en el pintoresco barrio portuario de <strong>La Boca</strong> en Buenos Aires: River Plate el 25 de mayo de 1901 y Boca Juniors el 3 de abril de 1905. Aunque River luego se mudó a Palermo y finalmente a Núñez en 1938, el ADN barrial y portuario unió a ambas instituciones para siempre.
          </p>
        </div>

        {/* Fuentes y Metodología */}
        <div className="p-6 rounded-2xl bg-[#161b22]/60 border border-[#30363d] space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-white">
            <Database className="w-5 h-5 text-emerald-400" />
            <h3>Fuentes Estadísticas y Rigor Histórico</h3>
          </div>
          <p>
            Los registros oficiales comprenden 266 encuentros disputados en campeonatos de Primera División (amateurs y profesionales), Copas Nacionales avaladas por AFA y competencias oficiales de la CONMEBOL (Copa Libertadores, Supercopa, Copa Sudamericana).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#8b949e]">
            <li>Asociación del Fútbol Argentino (AFA) - Registros históricos oficiales</li>
            <li>Rec.Sport.Soccer Statistics Foundation (RSSSF) - Argentina - Superclásico</li>
            <li>Historia de Boca (historiadeboca.com.ar)</li>
            <li>Estadísticas de River Plate (estadisticasriver.com)</li>
          </ul>
        </div>

        {/* Inspiración en Grenal.org */}
        <div className="p-6 rounded-2xl bg-[#161b22]/40 border border-[#30363d] space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-white">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>Inspiración de Diseño</span>
          </div>
          <p>
            La arquitectura de información, distribución visual y experiencia de usuario está inspirada en la brillante plataforma brasileña <strong>grenal.org</strong>, referente de periodismo de datos deportivos enfocado en el clásico de Porto Alegre (Grêmio vs Internacional).
          </p>
        </div>

      </div>

    </div>
  );
};
