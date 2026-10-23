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
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Historia de Bover | Superclásico Boca vs River',
      text: 'Explorá todas las estadísticas, los 266 partidos oficiales y alineaciones históricas de Boca Juniors y River Plate.',
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
      // Ignore error
    }
  };

  return (
    <div className="relative z-10 border-b border-white/[0.07] bg-gradient-to-b from-zinc-900/40 to-transparent py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="space-y-3 max-w-3xl">
            {/* Línea de acento dual Boca / River sutil y geométrica (sin eyebrow text) */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="h-1 w-7 rounded-full bg-[#facc15]" />
              <span className="h-1 w-7 rounded-full bg-[#e11d48]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-50 tracking-[-0.03em] leading-[1.1] text-balance">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-[65ch]">
              {subtitle}
            </p>
          </div>

          {/* Share Button */}
          <div className="relative self-start md:self-end">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-white/[0.09] hover:border-white/[0.18] rounded-xl text-xs sm:text-sm font-medium ui-pressable"
              title="Compartir página"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Enlace copiado</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-zinc-400" />
                  <span>Compartir archivo</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
