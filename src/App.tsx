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
import { Match, PlayerStats, CoachStats } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [apiModalOpen, setApiModalOpen] = useState<boolean>(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerStats | null>(null);

  // Escuchar atajo de teclado Ctrl+K o Cmd+K para abrir buscador
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
          subtitle: 'Historial completo de todos los partidos oficiales organizados por décadas, torneos y resultados.',
          category: 'Partidas Oficiales'
        };
      case 'jugadores':
        return {
          title: 'Goleadores y Presencias Históricas',
          subtitle: 'El ranking de todos los futbolistas que forjaron la mística del Superclásico.',
          category: 'Índice de Jugadores'
        };
      case 'tecnicos':
        return {
          title: 'Directores Técnicos del Superclásico',
          subtitle: 'Estrategias, títulos directos, récords y efectividad desde el banco de suplentes.',
          category: 'Índice de Técnicos'
        };
      case 'historial':
        return {
          title: 'Historial y Desglose Estadístico',
          subtitle: 'Análisis detallado por torneos locales, copas nacionales, competencias internacionales y estadios.',
          category: 'Estadísticas Avanzadas'
        };
      case 'sobre':
        return {
          title: 'Sobre Historia de Bover',
          subtitle: 'El origen del término Bover, la historia del Superclásico y las fuentes oficiales utilizadas.',
          category: 'Acerca del Proyecto'
        };
      default:
        return {
          title: 'Bover, Historia y Estadísticas',
          subtitle: 'Partidos, alineaciones, goles y estadísticas del mayor clásico del fútbol mundial, el superclásico Boca vs River.',
          category: 'Página Principal'
        };
    }
  };

  const bannerData = getBannerData();

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-[#e6edf3]">
      
      {/* Header Fijo con Buscador y Navegación idéntico a grenal.org */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenApiStatus={() => setApiModalOpen(true)}
      />

      {/* Sub-Header Banner idéntico a grenal.org con títulos y botón de compartir */}
      <StickyHeaderBanner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        category={bannerData.category}
      />

      {/* Contenido Principal */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {currentTab === 'home' && (
          <>
            {/* Sección 1: Números (Highlights & Donut Chart & Goles Bar) */}
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
          </>
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
