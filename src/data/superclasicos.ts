import { Match } from '../types';
import { ALL_OFFICIAL_MATCHES } from './allOfficialMatches';

export const SUPERCLASICOS: Match[] = ALL_OFFICIAL_MATCHES;

export const TOTAL_STATS = {
  totalMatches: 266,
  bocaWins: 94,
  riverWins: 88,
  draws: 84,
  bocaGoals: 343,
  riverGoals: 323,
  byCompetition: [
    { name: 'Ligas Nacionales (AFA)', matches: 218, bocaWins: 80, riverWins: 73, draws: 65, bocaGoals: 296, riverGoals: 277 },
    { name: 'Copas Nacionales', matches: 16, bocaWins: 3, riverWins: 5, draws: 8, bocaGoals: 14, riverGoals: 18 },
    { name: 'Copas Internacionales (Conmebol)', matches: 32, bocaWins: 11, riverWins: 10, draws: 11, bocaGoals: 33, riverGoals: 28 }
  ],
  byDecade: [
    { decade: '2020-2026', label: 'Partidas de 2020 a 2026', matches: 15, bocaWins: 5, riverWins: 5, draws: 5, bocaGoals: 15, riverGoals: 15 },
    { decade: '2010-2019', label: 'Partidas de 2010 a 2019', matches: 26, bocaWins: 8, riverWins: 9, draws: 9, bocaGoals: 24, riverGoals: 26 },
    { decade: '2000-2009', label: 'Partidas de 2000 a 2009', matches: 24, bocaWins: 8, riverWins: 7, draws: 9, bocaGoals: 27, riverGoals: 26 },
    { decade: '1990-1999', label: 'Partidas de 1990 a 1999', matches: 26, bocaWins: 12, riverWins: 5, draws: 9, bocaGoals: 36, riverGoals: 29 },
    { decade: '1980-1989', label: 'Partidas de 1980 a 1989', matches: 32, bocaWins: 8, riverWins: 11, draws: 13, bocaGoals: 36, riverGoals: 39 },
    { decade: '1970-1979', label: 'Partidas de 1970 a 1979', matches: 41, bocaWins: 14, riverWins: 14, draws: 13, bocaGoals: 57, riverGoals: 49 },
    { decade: '1960-1969', label: 'Partidas de 1960 a 1969', matches: 28, bocaWins: 11, riverWins: 6, draws: 11, bocaGoals: 34, riverGoals: 28 },
    { decade: '1950-1959', label: 'Partidas de 1950 a 1959', matches: 20, bocaWins: 7, riverWins: 10, draws: 3, bocaGoals: 33, riverGoals: 36 },
    { decade: '1940-1949', label: 'Partidas de 1940 a 1949', matches: 22, bocaWins: 9, riverWins: 8, draws: 5, bocaGoals: 29, riverGoals: 29 },
    { decade: '1930-1939', label: 'Partidas de 1930 a 1939', matches: 21, bocaWins: 9, riverWins: 8, draws: 4, bocaGoals: 37, riverGoals: 32 },
    { decade: '1913-1929', label: 'Partidas de 1913 a 1929', matches: 11, bocaWins: 3, riverWins: 5, draws: 3, bocaGoals: 15, riverGoals: 14 }
  ]
};
