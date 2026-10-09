export type TeamType = 'boca' | 'river' | 'both';

export type CompetitionCategory = 'liga' | 'copa_nacional' | 'internacional';

export interface TimelineEvent {
  minute: number;
  period?: '1T' | '2T' | 'ET' | 'PEN';
  type: 'goal' | 'yellow' | 'red' | 'sub' | 'start' | 'halftime' | 'end' | 'var' | 'penalty_miss';
  team?: 'boca' | 'river';
  player?: string;
  detail?: string;
  penalty?: boolean;
}

export interface PlayerLineup {
  number?: number;
  name: string;
  fullName?: string;
  position: string;
  sub?: boolean;
  subOutMinute?: number;
  subInMinute?: number;
  yellowCardMinute?: number;
  redCardMinute?: number;
  goals?: number[];
}

export interface Match {
  id: string;
  number: number;
  date: string;
  formattedDate: string;
  tournament: string;
  competitionCategory: CompetitionCategory;
  stadium: string;
  referee?: string;
  attendance?: string;
  bocaScore: number;
  riverScore: number;
  penalties?: {
    boca: number;
    river: number;
  };
  winner: 'boca' | 'river' | 'draw';
  decade: string;
  bocaGoals: { minute: number; player: string; penalty?: boolean; ownGoal?: boolean }[];
  riverGoals: { minute: number; player: string; penalty?: boolean; ownGoal?: boolean }[];
  bocaLineup: PlayerLineup[];
  riverLineup: PlayerLineup[];
  bocaCoach: string;
  riverCoach: string;
  timeline: TimelineEvent[];
  summary?: string;
}

export interface PlayerStats {
  id: string;
  name: string;
  fullName: string;
  team: TeamType;
  position: string;
  matches: number;
  goals: number;
  wins: number;
  draws: number;
  losses: number;
  era: string;
  rankingScore: number;
  topFact: string;
  photoUrl?: string;
}

export interface CoachStats {
  id: string;
  name: string;
  fullName: string;
  team: 'boca' | 'river';
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  winPercentage: number;
  titlesAgainstRival?: string[];
  era: string;
  rankingScore: number;
}

export interface PitchNode {
  id: string;
  name: string;
  number?: number;
  posCode: string;
  role: string;
  team: 'boca' | 'river';
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  superclasicosCount: number;
  goalsCount: number;
  keyFact: string;
}
