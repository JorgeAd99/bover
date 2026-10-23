import React from 'react';
import { Heart, Database, Shield, BookOpen } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl">
      
      {/* Secciones de contenido con medida editorial 65-75ch */}
      <div className="grid grid-cols-1 gap-5 text-sm text-zinc-300 leading-relaxed">
        
        {/* El término Bover */}
        <article className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-zinc-50">
            <BookOpen className="w-5 h-5 text-[#facc15]" />
            <h2>El Origen del Término «Bover»</h2>
          </div>
          <p className="text-zinc-400 max-w-[70ch]">
            «Bover» es el acrónimo popular acuñado en la cultura futbolera argentina —combinando <strong className="text-zinc-200">BO</strong>ca y Ri<strong className="text-zinc-200">VER</strong>— para referirse a la simbiótica dualidad que ejercen las dos instituciones deportivas más convocantes y laureadas de la República Argentina. Juntos nuclean a más del 70% de la afición nacional y protagonizan uno de los espectáculos deportivos más intensos del mundo.
          </p>
        </article>

        {/* Hermanados por el barrio de La Boca */}
        <article className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-zinc-50">
            <Shield className="w-5 h-5 text-[#e11d48]" />
            <h2>Nacidos en la Misma Ribera</h2>
          </div>
          <p className="text-zinc-400 max-w-[70ch]">
            Ambos clubes fueron fundados a escasas cuadras de distancia en el histórico barrio portuario de <strong className="text-zinc-200">La Boca</strong>, en la Ciudad de Buenos Aires: River Plate el 25 de mayo de 1901 y Boca Juniors el 3 de abril de 1905. Su primer enfrentamiento oficial tuvo lugar el 24 de agosto de 1913 en cancha de Racing Club.
          </p>
        </article>

        {/* Fuentes y Metodología */}
        <article className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-white/[0.07] space-y-3">
          <div className="flex items-center gap-2.5 text-base font-bold text-zinc-50">
            <Database className="w-5 h-5 text-emerald-400" />
            <h2>Rigor Estadístico y Fuentes Oficiales</h2>
          </div>
          <p className="text-zinc-400 max-w-[70ch]">
            La base de datos contempla la totalidad de los <strong className="text-zinc-200 font-numbers">266 encuentros oficiales</strong> disputados desde 1913 hasta 2026 en Ligas de Primera División (era amateur y profesional), Copas Nacionales organizadas por AFA y torneos internacionales de CONMEBOL.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-400 pt-1">
            <li>Asociación del Fútbol Argentino (AFA) — Actas y boletines históricos oficiales</li>
            <li>Rec.Sport.Soccer Statistics Foundation (RSSSF) — Archivo Superclásico Argentino</li>
            <li>Revisionismo Histórico del Fútbol Argentino y archivos hemerográficos de Boca Juniors y River Plate</li>
          </ul>
        </article>

        {/* Inspiración en Grenal.org */}
        <article className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.06] space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-zinc-200">
            <Heart className="w-4 h-4 text-[#e11d48]" />
            <h3>Inspiración Editorial</h3>
          </div>
          <p className="text-zinc-400 max-w-[70ch]">
            La arquitectura de información está inspirada en el proyecto brasileño <strong className="text-zinc-200">grenal.org</strong>, combinando visualización de datos moderna, diseño de interfaz de alta precisión y preservación histórica del deporte sudamericano.
          </p>
        </article>

      </div>

    </div>
  );
};
