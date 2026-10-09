import { Match, PlayerStats, CoachStats } from '../types';
import { SUPERCLASICOS, TOTAL_STATS } from '../data/superclasicos';
import { TOP_PLAYERS } from '../data/players';
import { TOP_COACHES } from '../data/coaches';
import { SQUAD_SELECTIONS, SquadSelection } from '../data/historicalXI';

const API_BASE = '/api';

export interface ApiStatus {
  status: 'online' | 'offline';
  version: string;
  totalMatches: number;
  officialHistoryTotal: number;
  lastSync: string;
  connectedSources: string[];
}

export interface MatchFilters {
  decade?: string;
  category?: string;
  winner?: string;
  search?: string;
  limit?: number;
}

/**
 * Consulta el estado de la API REST
 */
export async function checkApiHealth(): Promise<ApiStatus> {
  try {
    const res = await fetch(`${API_BASE}/status`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error('API offline');
    const data = await res.json();
    return {
      status: 'online',
      version: data.version || '1.0.0',
      totalMatches: data.totalMatches || 266,
      officialHistoryTotal: data.officialHistoryTotal || 266,
      lastSync: data.lastSync || new Date().toISOString(),
      connectedSources: data.connectedSources || ['AFA Oficial', 'RSSSF']
    };
  } catch {
    return {
      status: 'offline',
      version: '1.0.0',
      totalMatches: TOTAL_STATS.totalMatches,
      officialHistoryTotal: TOTAL_STATS.totalMatches,
      lastSync: new Date().toISOString(),
      connectedSources: ['Base Local Validada (AFA/RSSSF)']
    };
  }
}

/**
 * Obtiene las estadísticas globales (Highlights para el dashboard)
 */
export async function fetchStatistics() {
  try {
    const res = await fetch(`${API_BASE}/statistics`, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Error al consultar estadísticas');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('[API Client] Usando fallback local para estadísticas:', error);
    return TOTAL_STATS;
  }
}

/**
 * Obtiene el listado de partidos con filtros
 */
export async function fetchMatches(filters: MatchFilters = {}): Promise<Match[]> {
  try {
    const params = new URLSearchParams();
    if (filters.decade) params.append('decade', filters.decade);
    if (filters.category && filters.category !== 'all') params.append('category', filters.category);
    if (filters.winner && filters.winner !== 'all') params.append('winner', filters.winner);
    if (filters.search) params.append('search', filters.search);
    if (filters.limit) params.append('limit', filters.limit.toString());

    const url = `${API_BASE}/matches?${params.toString()}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Error al consultar partidos');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('[API Client] Usando fallback local para partidos:', error);
    // Filtrado local en caso de fallback
    let matches = [...SUPERCLASICOS];
    if (filters.decade) matches = matches.filter(m => m.decade === filters.decade);
    if (filters.category && filters.category !== 'all') matches = matches.filter(m => m.competitionCategory === filters.category);
    if (filters.winner && filters.winner !== 'all') matches = matches.filter(m => m.winner === filters.winner);
    if (filters.search) {
      const q = filters.search.toLowerCase();
      matches = matches.filter(m =>
        m.formattedDate.toLowerCase().includes(q) ||
        m.tournament.toLowerCase().includes(q) ||
        m.stadium.toLowerCase().includes(q)
      );
    }
    if (filters.limit) matches = matches.slice(0, filters.limit);
    return matches;
  }
}

/**
 * Obtiene un partido por su ID
 */
export async function fetchMatchById(id: string): Promise<Match | null> {
  try {
    const res = await fetch(`${API_BASE}/matches/${id}`, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Partido no encontrado');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('[API Client] Usando fallback local para partido ID:', id, error);
    return SUPERCLASICOS.find(m => m.id === id || m.number.toString() === id) || null;
  }
}

/**
 * Obtiene el ranking de jugadores
 */
export async function fetchPlayers(team?: string, search?: string): Promise<PlayerStats[]> {
  try {
    const params = new URLSearchParams();
    if (team && team !== 'all') params.append('team', team);
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE}/players?${params.toString()}`, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Error al consultar jugadores');
    const json = await res.json();
    return json.data;
  } catch {
    let players = [...TOP_PLAYERS];
    if (team && team !== 'all') players = players.filter(p => p.team === team || p.team === 'both');
    if (search) {
      const q = search.toLowerCase();
      players = players.filter(p => p.name.toLowerCase().includes(q));
    }
    return players;
  }
}

/**
 * Obtiene el ranking de directores técnicos
 */
export async function fetchCoaches(team?: string): Promise<CoachStats[]> {
  try {
    const params = new URLSearchParams();
    if (team && team !== 'all') params.append('team', team);

    const res = await fetch(`${API_BASE}/coaches?${params.toString()}`, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Error al consultar técnicos');
    const json = await res.json();
    return json.data;
  } catch {
    let coaches = [...TOP_COACHES];
    if (team && team !== 'all') coaches = coaches.filter(c => c.team === team);
    return coaches;
  }
}

/**
 * Sincronización con APIs externas (API-Football)
 */
export async function syncExternalData(apiKey?: string, provider = 'api-football') {
  const res = await fetch(`${API_BASE}/sync/live`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey, provider })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Fallo en la sincronización');
  }
  return res.json();
}
