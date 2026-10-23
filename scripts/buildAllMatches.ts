import * as fs from 'fs';
import * as path from 'path';
import { SUPERCLASICOS } from '../src/data/superclasicos';

const scratchDir = 'C:/Users/Usuario/.gemini/antigravity/brain/ebaa6746-9153-4b98-b080-93b9a7e9e0f7/scratch';
const allParsed = JSON.parse(fs.readFileSync(path.join(scratchDir, 'all_parsed_matches.json'), 'utf8'));

console.log('Existing detailed matches count:', SUPERCLASICOS.length);
console.log('All parsed matches count:', allParsed.length);

// Build map of existing matches by date
const existingByDate = new Map<string, typeof SUPERCLASICOS[0]>();
for (const m of SUPERCLASICOS) {
  existingByDate.set(m.date, m);
}

let matchedCount = 0;
const mergedMatches = allParsed.map((base: any) => {
  const existing = existingByDate.get(base.date);
  if (existing) {
    matchedCount++;
    return {
      ...base,
      bocaCoach: existing.bocaCoach || '',
      riverCoach: existing.riverCoach || '',
      bocaLineup: existing.bocaLineup || [],
      riverLineup: existing.riverLineup || [],
      timeline: existing.timeline && existing.timeline.length > 0 ? existing.timeline : generateTimeline(base),
      summary: existing.summary || generateSummary(base),
      referee: existing.referee || '',
      attendance: existing.attendance || ''
    };
  }

  return {
    ...base,
    bocaCoach: '',
    riverCoach: '',
    bocaLineup: [],
    riverLineup: [],
    timeline: generateTimeline(base),
    summary: generateSummary(base),
    referee: '',
    attendance: ''
  };
});

function generateTimeline(m: any) {
  const events: any[] = [];
  events.push({ minute: 0, type: 'start', detail: 'Inicio del encuentro' });

  for (const g of m.bocaGoals) {
    events.push({
      minute: g.minute || 0,
      type: 'goal',
      team: 'boca',
      player: g.player,
      detail: g.penalty ? 'Gol de penal' : (g.ownGoal ? 'Gol en contra' : 'Gol de Boca Juniors'),
      penalty: g.penalty
    });
  }

  for (const g of m.riverGoals) {
    events.push({
      minute: g.minute || 0,
      type: 'goal',
      team: 'river',
      player: g.player,
      detail: g.penalty ? 'Gol de penal' : (g.ownGoal ? 'Gol en contra' : 'Gol de River Plate'),
      penalty: g.penalty
    });
  }

  events.sort((a, b) => a.minute - b.minute);

  if (m.penalties) {
    events.push({
      minute: 120,
      type: 'end',
      detail: `Definición por penales: Boca ${m.penalties.boca} - River ${m.penalties.river}`
    });
  } else {
    events.push({
      minute: 90,
      type: 'end',
      detail: `Final del partido: Boca ${m.bocaScore} - River ${m.riverScore}`
    });
  }

  return events;
}

function generateSummary(m: any) {
  const localName = m.homeTeam === 'boca' ? 'Boca Juniors' : 'River Plate';
  const visitorName = m.homeTeam === 'boca' ? 'River Plate' : 'Boca Juniors';
  const localScore = m.homeTeam === 'boca' ? m.bocaScore : m.riverScore;
  const visitorScore = m.homeTeam === 'boca' ? m.riverScore : m.bocaScore;

  let outcome = 'igualdad';
  if (m.winner === 'boca') outcome = 'triunfo de Boca Juniors';
  if (m.winner === 'river') outcome = 'triunfo de River Plate';

  let txt = `Superclásico oficial #${m.number} disputado el ${m.formattedDate} en ${m.stadium} por ${m.tournament}. Finalizó con ${outcome} por ${localScore} a ${visitorScore} (${localName} local, ${visitorName} visitante).`;
  if (m.penalties) {
    txt += ` Definición por penales: Boca ${m.penalties.boca} - River ${m.penalties.river}.`;
  }
  return txt;
}

console.log('Matched existing detailed matches:', matchedCount);

// Sort descending by date
mergedMatches.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Now write out allOfficialMatches.ts
const header = `import { Match } from '../types';\n\nexport const ALL_OFFICIAL_MATCHES: Match[] = `;
const tsContent = header + JSON.stringify(mergedMatches, null, 2) + ';\n';

fs.writeFileSync('src/data/allOfficialMatches.ts', tsContent, 'utf8');
console.log('Generated src/data/allOfficialMatches.ts with length:', mergedMatches.length);
