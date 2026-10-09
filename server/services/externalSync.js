/**
 * Conector de sincronización con APIs externas de fútbol (API-Football, TheSportsDB)
 * para partidos del Superclásico Boca Juniors vs River Plate.
 */

// IDs oficiales en API-Sports / API-Football:
// Boca Juniors: 451
// River Plate: 435
const BOCA_TEAM_ID = 451;
const RIVER_TEAM_ID = 435;

/**
 * Consulta la API de API-Football / RapidAPI si se provee clave
 */
export async function syncFromApiFootball(apiKey) {
  if (!apiKey) {
    throw new Error('Se requiere una clave de API (API-Football o RapidAPI).');
  }

  const url = `https://v3.football.api-sports.io/fixtures/headtohead?h2h=${BOCA_TEAM_ID}-${RIVER_TEAM_ID}&status=FT`;
  
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey,
      'x-apisports-key': apiKey,
    }
  });

  if (!response.ok) {
    throw new Error(`Error en API-Football: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  if (data.errors && Object.keys(data.errors).length > 0) {
    throw new Error(`API-Football error: ${JSON.stringify(data.errors)}`);
  }

  return normalizeApiFootballFixtures(data.response || []);
}

/**
 * Normaliza las respuestas de API-Football al esquema de Historia de Bover
 */
function normalizeApiFootballFixtures(fixtures) {
  return fixtures.map((item, index) => {
    const fixture = item.fixture;
    const league = item.league;
    const teams = item.teams;
    const goals = item.goals;
    const score = item.score;

    const isBocaHome = teams.home.id === BOCA_TEAM_ID;
    const bocaScore = isBocaHome ? (goals.home ?? 0) : (goals.away ?? 0);
    const riverScore = isBocaHome ? (goals.away ?? 0) : (goals.home ?? 0);

    let winner = 'draw';
    if (bocaScore > riverScore) winner = 'boca';
    else if (riverScore > bocaScore) winner = 'river';

    const matchDate = new Date(fixture.date);
    const year = matchDate.getFullYear();
    const decade = getDecadeString(year);

    // Parsear eventos si existen
    const bocaGoals = [];
    const riverGoals = [];
    const timeline = [
      { minute: 0, type: 'start', detail: 'Inicio del encuentro' }
    ];

    if (item.events && Array.isArray(item.events)) {
      item.events.forEach(evt => {
        const isBoca = evt.team.id === BOCA_TEAM_ID;
        const minute = evt.time.elapsed || 0;
        const player = evt.player.name || '';

        if (evt.type === 'Goal') {
          if (isBoca) {
            bocaGoals.push({ minute, player, penalty: evt.detail?.includes('Penalty') });
          } else {
            riverGoals.push({ minute, player, penalty: evt.detail?.includes('Penalty') });
          }
          timeline.push({
            minute,
            type: 'goal',
            team: isBoca ? 'boca' : 'river',
            player,
            detail: `Gol (${evt.detail || 'Jugada'})`
          });
        } else if (evt.type === 'Card') {
          const isRed = evt.detail?.includes('Red');
          timeline.push({
            minute,
            type: isRed ? 'red' : 'yellow',
            team: isBoca ? 'boca' : 'river',
            player,
            detail: evt.detail || (isRed ? 'Tarjeta Roja' : 'Tarjeta Amarilla')
          });
        } else if (evt.type === 'subst') {
          timeline.push({
            minute,
            type: 'sub',
            team: isBoca ? 'boca' : 'river',
            player: `${evt.assist?.name || 'Entra'} por ${evt.player?.name || 'Sale'}`,
            detail: 'Sustitución'
          });
        }
      });
    }

    timeline.push({ minute: 90, type: 'end', detail: 'Final del partido' });

    // Categoría de torneo
    let category = 'liga';
    const leagueNameLower = (league.name || '').toLowerCase();
    if (leagueNameLower.includes('copa') && (leagueNameLower.includes('argentina') || leagueNameLower.includes('liga'))) {
      category = 'copa_nacional';
    } else if (leagueNameLower.includes('libertadores') || leagueNameLower.includes('sudamericana')) {
      category = 'internacional';
    }

    return {
      id: `api-${fixture.id}`,
      number: 260 + index,
      date: fixture.date.split('T')[0],
      formattedDate: matchDate.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }),
      tournament: `${league.name} ${league.season}`,
      competitionCategory: category,
      stadium: `${fixture.venue.name || 'Estadio Principal'}, ${fixture.venue.city || 'Buenos Aires'}`,
      referee: fixture.referee || 'Árbitro oficial AFA',
      attendance: 'Estadio completo',
      bocaScore,
      riverScore,
      winner,
      decade,
      bocaGoals,
      riverGoals,
      bocaCoach: 'Director Técnico Oficial',
      riverCoach: 'Director Técnico Oficial',
      bocaLineup: [],
      riverLineup: [],
      timeline,
      summary: `Partido oficial disputado en ${fixture.venue.name || 'Buenos Aires'}.`
    };
  });
}

function getDecadeString(year) {
  if (year >= 2020) return '2020-2026';
  if (year >= 2010) return '2010-2019';
  if (year >= 2000) return '2000-2009';
  if (year >= 1990) return '1990-1999';
  if (year >= 1980) return '1980-1989';
  if (year >= 1970) return '1970-1979';
  if (year >= 1960) return '1960-1969';
  if (year >= 1950) return '1950-1959';
  if (year >= 1940) return '1940-1949';
  if (year >= 1930) return '1930-1939';
  return '1913-1929';
}
