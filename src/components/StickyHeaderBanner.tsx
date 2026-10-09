import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface StickyHeaderBannerProps {
  title: string;
  subtitle: string;
  category?: string;
}

export const StickyHeaderBanner: React.FC<StickyHeaderBannerProps> = ({
  title,
  subtitle,
  category = 'Superclásico Argentino'
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Historia de Bover | Superclásico Boca vs River',
      text: 'Explorá todas las estadísticas, partidos y alineaciones históricas de Boca Juniors y River Plate.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignorar error
    }
  };

  return (
    <div className="relative border-b border-[#21262d] bg-gradient-to-b from-[#161b22]/80 to-[#0d1117] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fdbb30]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c91024]"></span>
                {category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed font-normal pt-1">
              {subtitle}
            </p>
          </div>

          {/* Share Button con Tooltip idéntico a grenal.org */}
          <div className="relative self-start md:self-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] rounded-lg text-sm font-semibold transition active:scale-95 shadow-sm"
              title="Compartir página"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#8b949e]" />
                  <span>Compartir</span>
                </>
              )}
            </button>
            {copied && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs rounded shadow-lg whitespace-nowrap z-30 animate-fadeIn">
                Enlace copiado al portapapeles
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
