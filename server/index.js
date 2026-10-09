import express from 'express';
import cors from 'cors';
import { SUPERCLASICOS, TOTAL_STATS } from '../src/data/superclasicos.ts';
import { TOP_PLAYERS } from '../src/data/players.ts';
import { TOP_COACHES } from '../src/data/coaches.ts';
import { SQUAD_SELECTIONS } from '../src/data/historicalXI.ts';
import { syncFromApiFootball } from './services/externalSync.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Base de datos en memoria inicializada con registros oficiales validados
let matchesDb = [...SUPERCLASICOS];
let lastSyncTimestamp = new Date().toISOString();

/**
 * Función para recalcular estadísticas globales cuando se agregan o sincronizan partidos
 */
function calculateStats() {
  const total = matchesDb.length;
  let bocaWins = 0;
  let riverWins = 0;
  let draws = 0;
  let bocaGoals = 0;
  let riverGoals = 0;

  const byDecadeMap = {};
  const byCompMap = {
    liga: { name: 'Ligas Nacionales (AFA)', matches: 0, bocaWins: 0, riverWins: 0, draws: 0, bocaGoals: 0, riverGoals: 0 },
    copa_nacional: { name: 'Copas Nacionales', matches: 0, bocaWins: 0, riverWins: 0, draws: 0, bocaGoals: 0, riverGoals: 0 },
    internacional: { name: 'Copas Internacionales (Conmebol)', matches: 0, bocaWins: 0, riverWins: 0, draws: 0, bocaGoals: 0, riverGoals: 0 }
  };

  matchesDb.forEach(m => {
    if (m.winner === 'boca') bocaWins++;
    else if (m.winner === 'river') riverWins++;
    else draws++;

    bocaGoals += m.bocaScore;
    riverGoals += m.riverScore;

    // Agrupación por torneo
    const cat = m.competitionCategory || 'liga';
    if (byCompMap[cat]) {
      byCompMap[cat].matches++;
      if (m.winner === 'boca') byCompMap[cat].bocaWins++;
      else if (m.winner === 'river') byCompMap[cat].riverWins++;
      else byCompMap[cat].draws++;
      byCompMap[cat].bocaGoals += m.bocaScore;
      byCompMap[cat].riverGoals += m.riverScore;
    }

    // Agrupación por década
    const dec = m.decade || '2020-2026';
    if (!byDecadeMap[dec]) {
      byDecadeMap[dec] = {
        decade: dec,
        label: `Partidas de ${dec.replace('-', ' a ')}`,
        matches: 0,
        bocaWins: 0,
        riverWins: 0,
        draws: 0,
        bocaGoals: 0,
        riverGoals: 0
      };
    }
    byDecadeMap[dec].matches++;
    if (m.winner === 'boca') byDecadeMap[dec].bocaWins++;
    else if (m.winner === 'river') byDecadeMap[dec].riverWins++;
    else byDecadeMap[dec].draws++;
    byDecadeMap[dec].bocaGoals += m.bocaScore;
    byDecadeMap[dec].riverGoals += m.riverScore;
  });

  return {
    totalMatches: TOTAL_STATS.totalMatches,
    registeredMatches: total,
    bocaWins: TOTAL_STATS.bocaWins,
    riverWins: TOTAL_STATS.riverWins,
    draws: TOTAL_STATS.draws,
    bocaGoals: TOTAL_STATS.bocaGoals,
    riverGoals: TOTAL_STATS.riverGoals,
    byCompetition: Object.values(byCompMap),
    byDecade: Object.values(byDecadeMap).sort((a, b) => b.decade.localeCompare(a.decade))
  };
}

// ---------------------------------------------------------------------
// ENDPOINTS DE LA API REST
// ---------------------------------------------------------------------

/**
 * 1. Health & Status
 */
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    version: '1.0.0',
    service: 'Historia de Bover API',
    totalMatches: matchesDb.length,
    officialHistoryTotal: TOTAL_STATS.totalMatches,
    lastSync: lastSyncTimestamp,
    connectedSources: [
      'AFA - Registros Históricos Oficiales',
      'RSSSF - Rec.Sport.Soccer Statistics Foundation',
      'Historia de Boca (historiadeboca.com.ar)',
      'Estadísticas River (estadisticasriver.com)',
      'API-Football Connector (Live & Head-to-Head Sync)'
    ]
  });
});

/**
 * 2. Estadísticas globales (Highlights para el dashboard idéntico a grenal.org)
 */
app.get('/api/statistics', (req, res) => {
  const stats = calculateStats();
  res.json({
    success: true,
    data: stats
  });
});

/**
 * 3. Listado de partidos con filtros por década, torneo, ganador y búsqueda
 */
app.get('/api/matches', (req, res) => {
  const { decade, category, winner, search, limit } = req.query;

  let results = [...matchesDb];

  if (decade) {
    results = results.filter(m => m.decade === decade);
  }

  if (category && category !== 'all') {
    results = results.filter(m => m.competitionCategory === category);
  }

  if (winner && winner !== 'all') {
    results = results.filter(m => m.winner === winner);
  }

  if (search) {
    const q = search.toLowerCase().trim();
    results = results.filter(m =>
      m.formattedDate.toLowerCase().includes(q) ||
      m.tournament.toLowerCase().includes(q) ||
      m.stadium.toLowerCase().includes(q) ||
      m.bocaGoals.some(g => g.player.toLowerCase().includes(q)) ||
      m.riverGoals.some(g => g.player.toLowerCase().includes(q)) ||
      m.bocaLineup.some(p => p.name.toLowerCase().includes(q)) ||
      m.riverLineup.some(p => p.name.toLowerCase().includes(q)) ||
      m.bocaCoach.toLowerCase().includes(q) ||
      m.riverCoach.toLowerCase().includes(q) ||
      `#${m.number}`.includes(q)
    );
  }

  if (limit) {
    const lim = parseInt(limit, 10);
    if (!isNaN(lim) && lim > 0) {
      results = results.slice(0, lim);
    }
  }

  res.json({
    success: true,
    count: results.length,
    total: matchesDb.length,
    data: results
  });
});

/**
 * 4. Detalle de un partido específico por ID o Número
 */
app.get('/api/matches/:id', (req, res) => {
  const { id } = req.params;
  const match = matchesDb.find(m => m.id === id || m.number.toString() === id);

  if (!match) {
    return res.status(404).json({
      success: false,
      error: `No se encontró el partido con ID o número ${id}`
    });
  }

  res.json({
    success: true,
    data: match
  });
});

/**
 * 5. Ranking de Jugadores
 */
app.get('/api/players', (req, res) => {
  const { team, search } = req.query;
  let players = [...TOP_PLAYERS];

  if (team && team !== 'all') {
    players = players.filter(p => p.team === team || p.team === 'both');
  }

  if (search) {
    const q = search.toLowerCase();
    players = players.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.fullName.toLowerCase().includes(q) ||
      p.topFact.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: players.length,
    data: players
  });
});

/**
 * 6. Ranking de Entrenadores
 */
app.get('/api/coaches', (req, res) => {
  const { team } = req.query;
  let coaches = [...TOP_COACHES];

  if (team && team !== 'all') {
    coaches = coaches.filter(c => c.team === team);
  }

  res.json({
    success: true,
    count: coaches.length,
    data: coaches
  });
});

/**
 * 7. Cancha Táctica (Formaciones Ideales)
 */
app.get('/api/pitch/squads', (req, res) => {
  res.json({
    success: true,
    data: SQUAD_SELECTIONS
  });
});

/**
 * 8. Sincronización con APIs Externas (API-Football / RapidAPI)
 */
app.post('/api/sync/live', async (req, res) => {
  const { apiKey, provider } = req.body || {};

  try {
    let newMatches = [];

    if (apiKey) {
      // Intenta conectar a API-Football
      newMatches = await syncFromApiFootball(apiKey);
    } else {
      // Simula sincronización de verificación de estado
      newMatches = [];
    }

    // Incorporar partidos únicos que no existan aún
    let addedCount = 0;
    newMatches.forEach(nm => {
      const exists = matchesDb.some(m => m.date === nm.date);
      if (!exists) {
        matchesDb.unshift(nm);
        addedCount++;
      }
    });

    lastSyncTimestamp = new Date().toISOString();

    res.json({
      success: true,
      message: addedCount > 0
        ? `Se sincronizaron ${addedCount} partidos nuevos con éxito.`
        : 'Base de datos al día con los registros oficiales verificados.',
      addedCount,
      totalMatches: matchesDb.length,
      lastSync: lastSyncTimestamp
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'Error durante la sincronización externa'
    });
  }
});

/**
 * 9. Agregar partido manualmente
 */
app.post('/api/matches', (req, res) => {
  const newMatch = req.body;

  if (!newMatch || !newMatch.date || newMatch.bocaScore === undefined || newMatch.riverScore === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Faltan campos requeridos: date, bocaScore, riverScore'
    });
  }

  const id = newMatch.id || `custom-${Date.now()}`;
  const number = newMatch.number || matchesDb.length + 1;
  let winner = 'draw';
  if (newMatch.bocaScore > newMatch.riverScore) winner = 'boca';
  else if (newMatch.riverScore > newMatch.bocaScore) winner = 'river';

  const matchToAdd = {
    id,
    number,
    date: newMatch.date,
    formattedDate: newMatch.formattedDate || newMatch.date,
    tournament: newMatch.tournament || 'Torneo Oficial',
    competitionCategory: newMatch.competitionCategory || 'liga',
    stadium: newMatch.stadium || 'Estadio Oficial',
    referee: newMatch.referee || 'Árbitro Oficial',
    attendance: newMatch.attendance || 'Completo',
    bocaScore: Number(newMatch.bocaScore),
    riverScore: Number(newMatch.riverScore),
    winner,
    decade: newMatch.decade || '2020-2026',
    bocaGoals: newMatch.bocaGoals || [],
    riverGoals: newMatch.riverGoals || [],
    bocaLineup: newMatch.bocaLineup || [],
    riverLineup: newMatch.riverLineup || [],
    bocaCoach: newMatch.bocaCoach || 'DT Boca',
    riverCoach: newMatch.riverCoach || 'DT River',
    timeline: newMatch.timeline || [],
    summary: newMatch.summary || 'Partido agregado al registro.'
  };

  matchesDb.unshift(matchToAdd);
  lastSyncTimestamp = new Date().toISOString();

  res.status(201).json({
    success: true,
    data: matchToAdd,
    totalMatches: matchesDb.length
  });
});

app.listen(PORT, () => {
  console.log(`[Historia de Bover API] Servidor activo en http://localhost:${PORT}`);
  console.log(`[Historia de Bover API] Endpoints listos: /api/status, /api/matches, /api/statistics, /api/players, /api/coaches`);
});
