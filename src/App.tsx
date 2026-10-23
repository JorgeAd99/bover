import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StickyHeaderBanner } from './components/StickyHeaderBanner';
import { NumbersSection } from './components/NumbersSection';
import { LastMatchesSection } from './components/LastMatchesSection';
import { PitchField } from './components/PitchField';
import { RankingsSection } from './components/RankingsSection';
import { DecadeFilterView } from './components/DecadeFilterView';
import { PlayersListView } from './components/PlayersListView';
import { CoachesListView } from './components/CoachesListView';
import { HistoryStatsView } from './components/HistoryStatsView';
import { AboutView } from './components/AboutView';
import { MatchDetailModal } from './components/MatchDetailModal';
import { PlayerDetailModal } from './components/PlayerDetailModal';
import { SearchModal } from './components/SearchModal';
import { ApiStatusModal } from './components/ApiStatusModal';
import { Footer } from './components/Footer';
import { SUPERCLASICOS } from './data/superclasicos';
import { Match, PlayerStats } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [apiModalOpen, setApiModalOpen] = useState<boolean>(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerStats | null>(null);

  // Escuchar atajo de teclado Ctrl+K o Cmd+K para abrir buscador (Instantáneo según filosofía Emil Kowalski)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Metadatos dinámicos del banner según pestaña
  const getBannerData = () => {
    switch (currentTab) {
      case 'partidos':
        return {
          title: 'Superclásicos de Boca vs River',
          subtitle: 'Archivo histórico completo de los 266 partidos oficiales organizados por décadas, torneos y resultados.',
        };
      case 'jugadores':
        return {
          title: 'Goleadores y Presencias Históricas',
          subtitle: 'El índice estadístico de los futbolistas que forjaron la mística centenaria del Superclásico.',
        };
      case 'tecnicos':
        return {
          title: 'Directores Técnicos del Superclásico',
          subtitle: 'Estrategias, duelos directos, récords de imbatibilidad y efectividad desde el banco de suplentes.',
        };
      case 'historial':
        return {
          title: 'Historial y Desglose Estadístico',
          subtitle: 'Radiografía comparativa por torneos de liga, copas nacionales, competencias internacionales y estadios.',
        };
      case 'sobre':
        return {
          title: 'Sobre Historia de Bover',
          subtitle: 'El origen cultural del término Bover, la historia barrial del clásico y las fuentes oficiales de datos.',
        };
      default:
        return {
          title: 'Bover, Historia y Estadísticas',
          subtitle: 'Archivo interactivo de partidos, alineaciones, goles y métricas del mayor clásico del fútbol mundial: Boca Juniors vs River Plate.',
        };
    }
  };

  const bannerData = getBannerData();

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-50 relative selection:bg-[#facc15]/20 selection:text-[#facc15]">
      
      {/* Sutil iluminación ambiental superior con acentos Boca (Azul/Oro) y River (Carmesí) sobre lienzo neutro */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(10,37,88,0.22),rgba(225,29,72,0.08),transparent)] z-0" />

      {/* Header Fijo con Buscador y Navegación de Precisión */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenApiStatus={() => setApiModalOpen(true)}
      />

      {/* Sub-Header Editorial con títulos balanceados y botón de compartir */}
      <StickyHeaderBanner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
      />

      {/* Contenido Principal */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {currentTab === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Sección 1: Números (Highlights, Donut Chart & Goles Bar) */}
            <NumbersSection />

            {/* Sección 2: Últimos Superclásicos */}
            <LastMatchesSection
              matches={SUPERCLASICOS}
              onSelectMatch={setSelectedMatch}
              onViewAllMatches={() => {
                setCurrentTab('partidos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Sección 3: Selección Bover (Cancha táctica interactiva) */}
            <PitchField />

            {/* Sección 4: Índice Bover (Rankings de Jugadores y Técnicos) */}
            <RankingsSection
              onSelectPlayer={setSelectedPlayer}
              onSelectCoach={() => {
                setCurrentTab('tecnicos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewAllPlayers={() => {
                setCurrentTab('jugadores');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewAllCoaches={() => {
                setCurrentTab('tecnicos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentTab === 'partidos' && (
          <DecadeFilterView onSelectMatch={setSelectedMatch} />
        )}

        {currentTab === 'jugadores' && (
          <PlayersListView onSelectPlayer={setSelectedPlayer} />
        )}

        {currentTab === 'tecnicos' && (
          <CoachesListView />
        )}

        {currentTab === 'historial' && (
          <HistoryStatsView />
        )}

        {currentTab === 'sobre' && (
          <AboutView />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={setCurrentTab} />

      {/* Modal de Detalle de Partido */}
      <MatchDetailModal
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
      />

      {/* Modal de Ficha de Jugador */}
      <PlayerDetailModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />

      {/* Buscador Instantáneo Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMatch={setSelectedMatch}
        onSelectPlayer={setSelectedPlayer}
        onSelectCoach={() => {
          setCurrentTab('tecnicos');
        }}
      />

      {/* Modal de Conexión a la API y Fuentes de Datos */}
      <ApiStatusModal
        isOpen={apiModalOpen}
        onClose={() => setApiModalOpen(false)}
      />

    </div>
  );
}

export default App;
