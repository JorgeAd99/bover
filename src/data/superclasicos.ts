import { Match } from '../types';

export const SUPERCLASICOS: Match[] = [
  {
    id: '266',
    number: 266,
    date: '2026-04-19',
    formattedDate: '19 de abril de 2026',
    tournament: 'Torneo Apertura 2026',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Nicolás Ramírez',
    attendance: '84.567 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [{ minute: 73, player: 'Edinson Cavani' }],
    riverGoals: [],
    bocaCoach: 'Diego Martínez',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 2, name: 'Cristian Lema', position: 'Defensor', yellowCardMinute: 38 },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor', yellowCardMinute: 65 },
      { number: 23, name: 'Lautaro Blanco', position: 'Defensor' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista' },
      { number: 21, name: 'Ignacio Miramón', position: 'Mediocampista' },
      { number: 22, name: 'Kevin Zenón', position: 'Mediocampista' },
      { number: 10, name: 'Edinson Cavani', position: 'Delantero', goals: [73], subOutMinute: 82 },
      { number: 16, name: 'Miguel Merentiel', position: 'Delantero' },
      { number: 7, name: 'Exequiel Zeballos', position: 'Delantero', sub: true, subInMinute: 82 }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 16, name: 'Fabricio Bustos', position: 'Defensor' },
      { number: 6, name: 'Germán Pezzella', position: 'Defensor', yellowCardMinute: 52 },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 24, name: 'Marcos Acuña', position: 'Defensor', yellowCardMinute: 71 },
      { number: 5, name: 'Matías Kranevitter', position: 'Mediocampista', subOutMinute: 60 },
      { number: 8, name: 'Maximiliano Meza', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista', subOutMinute: 68 },
      { number: 19, name: 'Claudio Echeverri', position: 'Mediocampista', subOutMinute: 75 },
      { number: 11, name: 'Facundo Colidio', position: 'Delantero' },
      { number: 9, name: 'Miguel Borja', position: 'Delantero' },
      { number: 30, name: 'Franco Mastantuono', position: 'Mediocampista', sub: true, subInMinute: 60 },
      { number: 10, name: 'Manuel Lanzini', position: 'Mediocampista', sub: true, subInMinute: 68 },
      { number: 36, name: 'Pablo Solari', position: 'Delantero', sub: true, subInMinute: 75 }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'Inicio del partido en un Monumental colmado' },
      { minute: 38, type: 'yellow', team: 'boca', player: 'Cristian Lema', detail: 'Falta táctica sobre Borja' },
      { minute: 45, type: 'halftime', detail: 'Final del primer tiempo sin goles' },
      { minute: 52, type: 'yellow', team: 'river', player: 'Germán Pezzella', detail: 'Infracción sobre Merentiel' },
      { minute: 60, type: 'sub', team: 'river', player: 'Mastantuono por Kranevitter' },
      { minute: 65, type: 'yellow', team: 'boca', player: 'Marcos Rojo', detail: 'Discusión acalorada' },
      { minute: 71, type: 'yellow', team: 'river', player: 'Marcos Acuña', detail: 'Protesta al árbitro' },
      { minute: 73, type: 'goal', team: 'boca', player: 'Edinson Cavani', detail: 'Cabezazo letal tras centro milimétrico de Blanco' },
      { minute: 82, type: 'sub', team: 'boca', player: 'Zeballos por Cavani' },
      { minute: 90, type: 'end', detail: 'Victoria de Boca Juniors 1-0 en condición de visitante' }
    ],
    summary: 'Con un impecable testazo de Edinson Cavani en el segundo tiempo, Boca se llevó los tres puntos del Monumental en una vibrante edición del clásico.'
  },
  {
    id: '265',
    number: 265,
    date: '2025-09-21',
    formattedDate: '21 de septiembre de 2025',
    tournament: 'Liga Profesional 2025',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Facundo Tello',
    attendance: '57.200 espectadores',
    bocaScore: 2,
    riverScore: 0,
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [
      { minute: 28, player: 'Kevin Zenón' },
      { minute: 84, player: 'Edinson Cavani' }
    ],
    riverGoals: [],
    bocaCoach: 'Diego Martínez',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 4, name: 'Nicolás Figal', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor', yellowCardMinute: 50 },
      { number: 23, name: 'Lautaro Blanco', position: 'Defensor' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista' },
      { number: 22, name: 'Kevin Zenón', position: 'Mediocampista', goals: [28] },
      { number: 16, name: 'Miguel Merentiel', position: 'Delantero' },
      { number: 10, name: 'Edinson Cavani', position: 'Delantero', goals: [84] }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 16, name: 'Fabricio Bustos', position: 'Defensor' },
      { number: 6, name: 'Germán Pezzella', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 13, name: 'Enzo Díaz', position: 'Defensor' },
      { number: 5, name: 'Matías Kranevitter', position: 'Mediocampista' },
      { number: 29, name: 'Rodrigo Aliendro', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 19, name: 'Claudio Echeverri', position: 'Mediocampista' },
      { number: 11, name: 'Facundo Colidio', position: 'Delantero' },
      { number: 9, name: 'Miguel Borja', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'Inicio de las acciones en La Bombonera' },
      { minute: 28, type: 'goal', team: 'boca', player: 'Kevin Zenón', detail: 'Gran remate rasante desde fuera del área' },
      { minute: 50, type: 'yellow', team: 'boca', player: 'Marcos Rojo' },
      { minute: 84, type: 'goal', team: 'boca', player: 'Edinson Cavani', detail: 'Definición de primera tras asistencia de Merentiel' },
      { minute: 90, type: 'end', detail: 'Pitazo final: triunfo categórico de Boca Juniors' }
    ],
    summary: 'La Bombonera fue una caldera. Boca dominó el mediocampo y liquidó con goles de Zenón y Cavani.'
  },
  {
    id: '264',
    number: 264,
    date: '2024-04-21',
    formattedDate: '21 de abril de 2024',
    tournament: 'Copa de la Liga 2024 (Cuartos de Final)',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Mario Alberto Kempes, Córdoba',
    referee: 'Yael Falcón Pérez',
    attendance: '55.000 espectadores',
    bocaScore: 3,
    riverScore: 2,
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [
      { minute: 45, player: 'Miguel Merentiel' },
      { minute: 62, player: 'Edinson Cavani' },
      { minute: 67, player: 'Miguel Merentiel' }
    ],
    riverGoals: [
      { minute: 10, player: 'Miguel Borja' },
      { minute: 90, player: 'Paulo Díaz' }
    ],
    bocaCoach: 'Diego Martínez',
    riverCoach: 'Martín Demichelis',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 2, name: 'Cristian Lema', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor' },
      { number: 23, name: 'Lautaro Blanco', position: 'Defensor' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista' },
      { number: 21, name: 'Ezequiel Fernández', position: 'Mediocampista' },
      { number: 22, name: 'Kevin Zenón', position: 'Mediocampista' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista' },
      { number: 16, name: 'Miguel Merentiel', position: 'Delantero', goals: [45, 67] },
      { number: 10, name: 'Edinson Cavani', position: 'Delantero', goals: [62] }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 15, name: 'Andrés Herrera', position: 'Defensor' },
      { number: 14, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor', goals: [90] },
      { number: 13, name: 'Enzo Díaz', position: 'Defensor' },
      { number: 23, name: 'Rodrigo Villagra', position: 'Mediocampista' },
      { number: 31, name: 'Santiago Simón', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 19, name: 'Claudio Echeverri', position: 'Mediocampista' },
      { number: 11, name: 'Facundo Colidio', position: 'Delantero' },
      { number: 9, name: 'Miguel Borja', position: 'Delantero', goals: [10] }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'Superclásico a estadio repleto con ambas hinchadas en Córdoba' },
      { minute: 10, type: 'goal', team: 'river', player: 'Miguel Borja', detail: 'Contra fulminante iniciada por Echeverri' },
      { minute: 45, type: 'goal', team: 'boca', player: 'Miguel Merentiel', detail: 'Centro atrás de Advíncula y toque a la red' },
      { minute: 51, type: 'var', detail: 'Gol anulado a River tras chequeo VAR por pelota que no traspuso la línea' },
      { minute: 62, type: 'goal', team: 'boca', player: 'Edinson Cavani', detail: 'Cabezazo monumental tras desborde de Zenón' },
      { minute: 67, type: 'goal', team: 'boca', player: 'Miguel Merentiel', detail: 'Rebote de Armani aprovechado por La Bestia' },
      { minute: 90, type: 'goal', team: 'river', player: 'Paulo Díaz', detail: 'Descuento agónico en el área chica' },
      { minute: 95, type: 'end', detail: 'Boca clasifica a semifinales de la Copa de la Liga' }
    ],
    summary: 'Épico clásico con dos parcialidades en Córdoba. Boca dio vuelta el partido con una actuación estelar de Merentiel y Cavani.'
  },
  {
    id: '263',
    number: 263,
    date: '2024-02-25',
    formattedDate: '25 de febrero de 2024',
    tournament: 'Copa de la Liga 2024 (Fase Regular)',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Yael Falcón Pérez',
    attendance: '84.000 espectadores',
    bocaScore: 1,
    riverScore: 1,
    winner: 'draw',
    decade: '2020-2026',
    bocaGoals: [{ minute: 73, player: 'Cristian Medina' }],
    riverGoals: [{ minute: 49, player: 'Pablo Solari' }],
    bocaCoach: 'Diego Martínez',
    riverCoach: 'Martín Demichelis',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 2, name: 'Cristian Lema', position: 'Defensor' },
      { number: 4, name: 'Nicolás Figal', position: 'Defensor' },
      { number: 23, name: 'Lautaro Blanco', position: 'Defensor' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista', goals: [73] },
      { number: 21, name: 'Ezequiel Fernández', position: 'Mediocampista' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista' },
      { number: 22, name: 'Kevin Zenón', position: 'Mediocampista' },
      { number: 16, name: 'Miguel Merentiel', position: 'Delantero' },
      { number: 10, name: 'Edinson Cavani', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 15, name: 'Andrés Herrera', position: 'Defensor' },
      { number: 14, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 13, name: 'Enzo Díaz', position: 'Defensor' },
      { number: 23, name: 'Rodrigo Villagra', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 21, name: 'Esequiel Barco', position: 'Mediocampista' },
      { number: 19, name: 'Claudio Echeverri', position: 'Mediocampista' },
      { number: 36, name: 'Pablo Solari', position: 'Delantero', goals: [49] },
      { number: 11, name: 'Facundo Colidio', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'Inicio en el Monumental' },
      { minute: 49, type: 'goal', team: 'river', player: 'Pablo Solari', detail: 'Definición tras rebote de Romero' },
      { minute: 73, type: 'goal', team: 'boca', player: 'Cristian Medina', detail: 'Gran jugada de Blanco por izquierda y toque de Medina' },
      { minute: 90, type: 'end', detail: 'Igualdad 1 a 1 en Núñez' }
    ],
    summary: 'Empate de alta intensidad en Núñez. Solari adelantó a River y Medina selló la parda para el Xeneize.'
  },
  {
    id: '262',
    number: 262,
    date: '2023-10-01',
    formattedDate: '1 de octubre de 2023',
    tournament: 'Copa de la Liga 2023',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Andrés Merlos',
    attendance: '54.000 espectadores',
    bocaScore: 0,
    riverScore: 2,
    winner: 'river',
    decade: '2020-2026',
    bocaGoals: [],
    riverGoals: [
      { minute: 41, player: 'Salomón Rondón' },
      { minute: 90, player: 'Enzo Díaz' }
    ],
    bocaCoach: 'Jorge Almirón',
    riverCoach: 'Martín Demichelis',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 57, name: 'Marcelo Weigandt', position: 'Defensor' },
      { number: 25, name: 'Bruno Valdez', position: 'Defensor' },
      { number: 15, name: 'Nicolás Valentini', position: 'Defensor' },
      { number: 3, name: 'Marcelo Saracchi', position: 'Defensor' },
      { number: 21, name: 'Ezequiel Fernández', position: 'Mediocampista' },
      { number: 49, name: 'Jorman Campuzano', position: 'Mediocampista' },
      { number: 11, name: 'Lucas Janson', position: 'Delantero' },
      { number: 9, name: 'Darío Benedetto', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 15, name: 'Andrés Herrera', position: 'Defensor' },
      { number: 14, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 29, name: 'Rodrigo Aliendro', position: 'Mediocampista' },
      { number: 10, name: 'Manuel Lanzini', position: 'Mediocampista' },
      { number: 25, name: 'Salomón Rondón', position: 'Delantero', goals: [41] },
      { number: 13, name: 'Enzo Díaz', position: 'Defensor', goals: [90] }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 41, type: 'goal', team: 'river', player: 'Salomón Rondón', detail: 'Desvío involuntario tras disparo de Enzo Pérez' },
      { minute: 73, type: 'var', detail: 'Gol de Cavani de chilena invalidado por milimétrico offside' },
      { minute: 90, type: 'goal', team: 'river', player: 'Enzo Díaz', detail: 'Definición con arco libre de contra' },
      { minute: 96, type: 'end' }
    ],
    summary: 'River quebró una racha sin ganar en La Bombonera con goles de Rondón y Enzo Díaz.'
  },
  {
    id: '261',
    number: 261,
    date: '2023-05-07',
    formattedDate: '7 de mayo de 2023',
    tournament: 'Liga Profesional 2023',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Darío Herrera',
    attendance: '83.196 espectadores',
    bocaScore: 0,
    riverScore: 1,
    winner: 'river',
    decade: '2020-2026',
    bocaGoals: [],
    riverGoals: [{ minute: 93, player: 'Miguel Borja', penalty: true }],
    bocaCoach: 'Jorge Almirón',
    riverCoach: 'Martín Demichelis',
    bocaLineup: [
      { number: 1, name: 'Sergio Romero', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 4, name: 'Nicolás Figal', position: 'Defensor' },
      { number: 15, name: 'Nicolás Valentini', position: 'Defensor' },
      { number: 25, name: 'Bruno Valdez', position: 'Defensor' },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista', redCardMinute: 96 },
      { number: 5, name: 'Alan Varela', position: 'Mediocampista' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista' },
      { number: 22, name: 'Sebastián Villa', position: 'Delantero' },
      { number: 16, name: 'Miguel Merentiel', position: 'Delantero', redCardMinute: 96 }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 14, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 2, name: 'Emanuel Mammana', position: 'Defensor' },
      { number: 13, name: 'Enzo Díaz', position: 'Defensor', redCardMinute: 96 },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 29, name: 'Rodrigo Aliendro', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás De La Cruz', position: 'Mediocampista' },
      { number: 21, name: 'Esequiel Barco', position: 'Mediocampista' },
      { number: 18, name: 'Lucas Beltrán', position: 'Delantero' },
      { number: 9, name: 'Miguel Borja', position: 'Delantero', sub: true, goals: [93] }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 90, type: 'yellow', team: 'boca', player: 'Agustín Sández', detail: 'Penal sancionado sobre Solari' },
      { minute: 93, type: 'goal', team: 'river', player: 'Miguel Borja', detail: 'Gol de penal ejecutado con maestría' },
      { minute: 95, type: 'red', team: 'river', player: 'Palavecino, Gómez, Centurión', detail: 'Tumulto masivo tras festejo desmedido' },
      { minute: 96, type: 'red', team: 'boca', player: 'Merentiel, Valentini, Equi F.', detail: 'Expulsiones por riña' },
      { minute: 100, type: 'end' }
    ],
    summary: 'Agónico final en Núñez con penal de Borja a los 93 minutos y un escandaloso tumulto con múltiples expulsados.'
  },
  {
    id: '260',
    number: 260,
    date: '2022-09-11',
    formattedDate: '11 de septiembre de 2022',
    tournament: 'Liga Profesional 2022',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Darío Herrera',
    attendance: '55.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [{ minute: 65, player: 'Darío Benedetto' }],
    riverGoals: [],
    bocaCoach: 'Hugo Ibarra',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 4, name: 'Nicolás Figal', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor', redCardMinute: 96 },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista' },
      { number: 33, name: 'Alan Varela', position: 'Mediocampista' },
      { number: 11, name: 'Martín Payero', position: 'Mediocampista' },
      { number: 10, name: 'Óscar Romero', position: 'Mediocampista' },
      { number: 41, name: 'Luca Langoni', position: 'Delantero' },
      { number: 9, name: 'Darío Benedetto', position: 'Delantero', goals: [65] }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 15, name: 'Andrés Herrera', position: 'Defensor' },
      { number: 4, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás De La Cruz', position: 'Mediocampista' },
      { number: 26, name: 'Juan Fernando Quintero', position: 'Mediocampista' },
      { number: 9, name: 'Lucas Beltrán', position: 'Delantero' },
      { number: 7, name: 'Matías Suárez', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 65, type: 'goal', team: 'boca', player: 'Darío Benedetto', detail: 'Cabezazo formidable tras tiro de esquina de Ramírez' },
      { minute: 96, type: 'red', team: 'boca', player: 'Marcos Rojo', detail: 'Patada peligrosa a De La Cruz' },
      { minute: 98, type: 'end' }
    ],
    summary: 'Darío Benedetto cortó su sequía goleadora con un tremendo cabezazo para darle la victoria a Boca en la ruta hacia el título de 2022.'
  },
  {
    id: '259',
    number: 259,
    date: '2022-03-20',
    formattedDate: '20 de marzo de 2022',
    tournament: 'Copa de la Liga 2022',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Darío Herrera',
    attendance: '72.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [{ minute: 54, player: 'Sebastián Villa' }],
    riverGoals: [],
    bocaCoach: 'Sebastián Battaglia',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 5, name: 'Carlos Zambrano', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor' },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 36, name: 'Cristian Medina', position: 'Mediocampista' },
      { number: 8, name: 'Guillermo Fernández', position: 'Mediocampista' },
      { number: 20, name: 'Juan Ramírez', position: 'Mediocampista' },
      { number: 10, name: 'Aaron Molinas', position: 'Mediocampista' },
      { number: 22, name: 'Sebastián Villa', position: 'Delantero', goals: [54] },
      { number: 9, name: 'Darío Benedetto', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 2, name: 'Robert Rojas', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 14, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 13, name: 'Enzo Fernández', position: 'Mediocampista' },
      { number: 31, name: 'Santiago Simón', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás De La Cruz', position: 'Mediocampista' },
      { number: 21, name: 'Esequiel Barco', position: 'Delantero' },
      { number: 9, name: 'Julián Álvarez', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 54, type: 'goal', team: 'boca', player: 'Sebastián Villa', detail: 'Aprovechó un error entre González Pirez y Armani' },
      { minute: 90, type: 'end', detail: 'Figura estelar de Agustín Rossi con 8 atajadas memorables' }
    ],
    summary: 'Agustín Rossi fue figura inexpugnable y Sebastián Villa capitalizó un descuido defensivo para ganar en el Monumental vestida con la camiseta amarilla.'
  },
  {
    id: '258',
    number: 258,
    date: '2021-10-03',
    formattedDate: '3 de octubre de 2021',
    tournament: 'Liga Profesional 2021',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Fernando Rapallini',
    attendance: '36.000 espectadores (Aforo COVID)',
    bocaScore: 1,
    riverScore: 2,
    winner: 'river',
    decade: '2020-2026',
    bocaGoals: [{ minute: 93, player: 'Carlos Zambrano' }],
    riverGoals: [
      { minute: 25, player: 'Julián Álvarez' },
      { minute: 43, player: 'Julián Álvarez' }
    ],
    bocaCoach: 'Sebastián Battaglia',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 17, name: 'Luis Advíncula', position: 'Defensor' },
      { number: 5, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor', redCardMinute: 16 },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 31, name: 'Cristian Pavón', position: 'Delantero' },
      { number: 33, name: 'Alan Varela', position: 'Mediocampista' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 2, name: 'Robert Rojas', position: 'Defensor' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 3, name: 'Fabrizio Angileri', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 13, name: 'Enzo Fernández', position: 'Mediocampista' },
      { number: 9, name: 'Julián Álvarez', position: 'Delantero', goals: [25, 43] }
    ],
    timeline: [
      { minute: 16, type: 'red', team: 'boca', player: 'Marcos Rojo', detail: 'Dos amarillas en dos minutos' },
      { minute: 25, type: 'goal', team: 'river', player: 'Julián Álvarez', detail: 'Golazo de otro planeta desde 30 metros por encima de Rossi' },
      { minute: 43, type: 'goal', team: 'river', player: 'Julián Álvarez', detail: 'Anticipo goleador en el área menor' },
      { minute: 93, type: 'goal', team: 'boca', player: 'Carlos Zambrano', detail: 'Descuento de cabeza' },
      { minute: 94, type: 'end' }
    ],
    summary: 'La consagración definitiva de la Araña Julián Álvarez, autor de un doblete consagratorio tras la pronta expulsión de Marcos Rojo.'
  },
  {
    id: '257',
    number: 257,
    date: '2021-08-04',
    formattedDate: '4 de agosto de 2021',
    tournament: 'Copa Argentina 2021 (Octavos de Final)',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Ciudad de La Plata',
    referee: 'Patricio Loustau',
    attendance: 'Sin público (Pandemia)',
    bocaScore: 0,
    riverScore: 0,
    penalties: { boca: 4, river: 1 },
    winner: 'boca',
    decade: '2020-2026',
    bocaGoals: [],
    riverGoals: [],
    bocaCoach: 'Miguel Ángel Russo',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 5, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 6, name: 'Marcos Rojo', position: 'Defensor' },
      { number: 23, name: 'Diego González', position: 'Mediocampista' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 17, name: 'Paulo Díaz', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 9, name: 'Julián Álvarez', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 90, type: 'end', detail: 'Sin goles tras los 90 minutos reglamentarios' },
      { minute: 91, type: 'goal', team: 'boca', detail: 'Rojo convierte su penal' },
      { minute: 92, type: 'penalty_miss', team: 'river', detail: 'Rossi ataja el penal a Julián Álvarez' },
      { minute: 95, type: 'goal', team: 'boca', detail: 'Izquierdoz convierte el penal decisivo (4-1)' }
    ],
    summary: 'Eliminación directa por Copa Argentina en La Plata: Boca se impuso en los penales con Rossi como figura determinante.'
  },

  // 2010s Legendarios
  {
    id: '246',
    number: 246,
    date: '2018-12-09',
    formattedDate: '9 de diciembre de 2018',
    tournament: 'Copa Libertadores 2018 (Final Vuelta)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Santiago Bernabéu, Madrid, España',
    referee: 'Andrés Cunha (Uruguay)',
    attendance: '62.282 espectadores',
    bocaScore: 1,
    riverScore: 3,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [{ minute: 44, player: 'Darío Benedetto' }],
    riverGoals: [
      { minute: 68, player: 'Lucas Pratto' },
      { minute: 109, player: 'Juan Fernando Quintero' },
      { minute: 122, player: 'Gonzalo Martínez' }
    ],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Matías Biscay (Gallardo suspendido)',
    bocaLineup: [
      { number: 1, name: 'Esteban Andrada', position: 'Arquero' },
      { number: 24, name: 'Julio Buffarini', position: 'Defensor' },
      { number: 21, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 6, name: 'Lisandro Magallán', position: 'Defensor' },
      { number: 20, name: 'Lucas Olaza', position: 'Defensor' },
      { number: 15, name: 'Nahitan Nández', position: 'Mediocampista' },
      { number: 16, name: 'Wilmar Barrios', position: 'Mediocampista', redCardMinute: 92 },
      { number: 8, name: 'Pablo Pérez', position: 'Mediocampista' },
      { number: 7, name: 'Cristian Pavón', position: 'Delantero' },
      { number: 18, name: 'Darío Benedetto', position: 'Delantero', goals: [44] },
      { number: 22, name: 'Sebastián Villa', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 29, name: 'Gonzalo Montiel', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 23, name: 'Leonardo Ponzio', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 15, name: 'Exequiel Palacios', position: 'Mediocampista' },
      { number: 10, name: 'Gonzalo Martínez', position: 'Mediocampista', goals: [122] },
      { number: 27, name: 'Lucas Pratto', position: 'Delantero', goals: [68] },
      { number: 8, name: 'Juan Fernando Quintero', position: 'Mediocampista', sub: true, goals: [109] }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'Inicio de la final más esperada en el Bernabéu' },
      { minute: 44, type: 'goal', team: 'boca', player: 'Darío Benedetto', detail: 'Pase magistral de Nández y definición exquisita' },
      { minute: 68, type: 'goal', team: 'river', player: 'Lucas Pratto', detail: 'Pared brillante de Nacho Fernández y toque a la red' },
      { minute: 90, type: 'end', detail: 'Fin de los 90 minutos: tiempo suplementario' },
      { minute: 92, type: 'red', team: 'boca', player: 'Wilmar Barrios', detail: 'Doble amarilla al volante colombiano' },
      { minute: 109, type: 'goal', team: 'river', player: 'Juan Fernando Quintero', detail: 'Bombazo inolvidable desde el borde del área' },
      { minute: 120, type: 'var', detail: 'Remate de Jara al palo' },
      { minute: 122, type: 'goal', team: 'river', player: 'Gonzalo Martínez', detail: 'Y va el tercero, y va el tercero... corrida con arco vacío' },
      { minute: 123, type: 'end', detail: 'River Plate campeón de la Copa Libertadores de América' }
    ],
    summary: 'La final continental del siglo en el Santiago Bernabéu de Madrid. River se coronó campeón de América en un partido que cambió la historia del clásico.'
  },
  {
    id: '245',
    number: 245,
    date: '2018-11-11',
    formattedDate: '11 de noviembre de 2018',
    tournament: 'Copa Libertadores 2018 (Final Ida)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Roberto Tobar (Chile)',
    attendance: '50.000 espectadores',
    bocaScore: 2,
    riverScore: 2,
    winner: 'draw',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 34, player: 'Ramón Ábila' },
      { minute: 45, player: 'Darío Benedetto' }
    ],
    riverGoals: [
      { minute: 35, player: 'Lucas Pratto' },
      { minute: 61, player: 'Carlos Izquierdoz (e/c)' }
    ],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Matías Biscay',
    bocaLineup: [
      { number: 12, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 21, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 17, name: 'Ramón Ábila', position: 'Delantero', goals: [34] },
      { number: 18, name: 'Darío Benedetto', position: 'Delantero', goals: [45] }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 27, name: 'Lucas Pratto', position: 'Delantero', goals: [35] }
    ],
    timeline: [
      { minute: 34, type: 'goal', team: 'boca', player: 'Ramón Ábila' },
      { minute: 35, type: 'goal', team: 'river', player: 'Lucas Pratto', detail: 'Gol sacando del medio' },
      { minute: 45, type: 'goal', team: 'boca', player: 'Darío Benedetto' },
      { minute: 61, type: 'goal', team: 'river', player: 'Izquierdoz (e/c)' },
      { minute: 90, type: 'var', detail: 'Armani le tapa un mano a mano agónico a Benedetto' }
    ],
    summary: 'Partidazo de ida con goles sucesivos e infartante atajada de Armani sobre el cierre.'
  },
  {
    id: '241',
    number: 241,
    date: '2016-12-11',
    formattedDate: '11 de diciembre de 2016',
    tournament: 'Campeonato de Primera División 2016/17',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Diego Abal',
    attendance: '65.000 espectadores',
    bocaScore: 4,
    riverScore: 2,
    winner: 'boca',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 14, player: 'Walter Bou' },
      { minute: 62, player: 'Carlos Tevez' },
      { minute: 81, player: 'Carlos Tevez' },
      { minute: 90, player: 'Ricardo Centurión' }
    ],
    riverGoals: [
      { minute: 34, player: 'Sebastián Driussi' },
      { minute: 40, player: 'Lucas Alario' }
    ],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Guillermo Sara', position: 'Arquero' },
      { number: 10, name: 'Carlos Tevez', position: 'Delantero', goals: [62, 81] },
      { number: 9, name: 'Walter Bou', position: 'Delantero', goals: [14] },
      { number: 26, name: 'Ricardo Centurión', position: 'Delantero', goals: [90] }
    ],
    riverLineup: [
      { number: 1, name: 'Augusto Batalla', position: 'Arquero' },
      { number: 11, name: 'Sebastián Driussi', position: 'Delantero', goals: [34] },
      { number: 13, name: 'Lucas Alario', position: 'Delantero', goals: [40] }
    ],
    timeline: [
      { minute: 14, type: 'goal', team: 'boca', player: 'Walter Bou' },
      { minute: 34, type: 'goal', team: 'river', player: 'Sebastián Driussi' },
      { minute: 40, type: 'goal', team: 'river', player: 'Lucas Alario' },
      { minute: 62, type: 'goal', team: 'boca', player: 'Carlos Tevez' },
      { minute: 81, type: 'goal', team: 'boca', player: 'Carlos Tevez', detail: 'Golazo al ángulo memorable' },
      { minute: 90, type: 'goal', team: 'boca', player: 'Ricardo Centurión', detail: 'Sombrerito a Batalla y festejo' }
    ],
    summary: 'Masterclass de Carlos Tevez en el Monumental con dos goles, uno de ellos colgado al ángulo superior derecho.'
  },
  {
    id: '235',
    number: 235,
    date: '2014-11-27',
    formattedDate: '27 de noviembre de 2014',
    tournament: 'Copa Sudamericana 2014 (Semifinal Vuelta)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Germán Delfino',
    attendance: '63.000 espectadores',
    bocaScore: 0,
    riverScore: 1,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [],
    riverGoals: [{ minute: 16, player: 'Leonardo Pisculichi' }],
    bocaCoach: 'Rodolfo Arruabarrena',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Orion', position: 'Arquero' },
      { number: 9, name: 'Emmanuel Gigliotti', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Marcelo Barovero', position: 'Arquero' },
      { number: 15, name: 'Leonardo Pisculichi', position: 'Mediocampista', goals: [16] }
    ],
    timeline: [
      { minute: 3, type: 'penalty_miss', team: 'boca', player: 'Emmanuel Gigliotti', detail: 'Barovero y el dedo al cielo atajando el penal' },
      { minute: 16, type: 'goal', team: 'river', player: 'Leonardo Pisculichi', detail: 'Zurda de primera contra el palo' },
      { minute: 90, type: 'end' }
    ],
    summary: 'El punto de quiebre de la era Gallardo: penal atajado de Barovero en el arranque y zurdazo letal de Pisculichi.'
  },

  // 2000s Clásicos Históricos
  {
    id: '210',
    number: 210,
    date: '2004-06-17',
    formattedDate: '17 de junio de 2004',
    tournament: 'Copa Libertadores 2004 (Semifinal Vuelta)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Héctor Baldassi',
    attendance: '65.000 espectadores (Solo público local)',
    bocaScore: 1,
    riverScore: 2,
    penalties: { boca: 5, river: 4 },
    winner: 'boca',
    decade: '2000-2009',
    bocaGoals: [{ minute: 88, player: 'Carlos Tevez' }],
    riverGoals: [
      { minute: 51, player: 'Luis González' },
      { minute: 94, player: 'Cristian Nasuti' }
    ],
    bocaCoach: 'Carlos Bianchi',
    riverCoach: 'Leonardo Astrada',
    bocaLineup: [
      { number: 1, name: 'Roberto Abbondanzieri', position: 'Arquero' },
      { number: 2, name: 'Rolando Schiavi', position: 'Defensor' },
      { number: 10, name: 'Carlos Tevez', position: 'Delantero', goals: [88], redCardMinute: 89 }
    ],
    riverLineup: [
      { number: 17, name: 'Germán Lux', position: 'Arquero' },
      { number: 24, name: 'Luis González', position: 'Mediocampista', goals: [51] },
      { number: 2, name: 'Cristian Nasuti', position: 'Defensor', goals: [94] },
      { number: 10, name: 'Marcelo Gallardo', position: 'Mediocampista', redCardMinute: 31 }
    ],
    timeline: [
      { minute: 31, type: 'red', team: 'river', player: 'Marcelo Gallardo' },
      { minute: 31, type: 'red', team: 'boca', player: 'Raúl Cascini' },
      { minute: 51, type: 'goal', team: 'river', player: 'Lucho González' },
      { minute: 84, type: 'red', team: 'boca', player: 'Fabián Vargas' },
      { minute: 88, type: 'goal', team: 'boca', player: 'Carlos Tevez', detail: 'Gol y festejo de la gallinita' },
      { minute: 89, type: 'red', team: 'boca', player: 'Carlos Tevez' },
      { minute: 94, type: 'goal', team: 'river', player: 'Cristian Nasuti' },
      { minute: 120, type: 'goal', team: 'boca', detail: 'Abbondanzieri le ataja el penal a Maxi López y Villarreal sella el pase a la final' }
    ],
    summary: 'Una de las noches más dramáticas del fútbol argentino. Tevez, la gallinita, el gol de Nasuti y los penales en el silencio del Monumental.'
  },
  {
    id: '198',
    number: 198,
    date: '2000-05-24',
    formattedDate: '24 de mayo de 2000',
    tournament: 'Copa Libertadores 2000 (Cuartos de Final Vuelta)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Ángel Sánchez',
    attendance: '55.000 espectadores',
    bocaScore: 3,
    riverScore: 0,
    winner: 'boca',
    decade: '2000-2009',
    bocaGoals: [
      { minute: 59, player: 'Marcelo Delgado' },
      { minute: 84, player: 'Juan Román Riquelme', penalty: true },
      { minute: 90, player: 'Martín Palermo' }
    ],
    riverGoals: [],
    bocaCoach: 'Carlos Bianchi',
    riverCoach: 'Américo Gallego',
    bocaLineup: [
      { number: 1, name: 'Óscar Córdoba', position: 'Arquero' },
      { number: 4, name: 'Hugo Ibarra', position: 'Defensor' },
      { number: 2, name: 'Jorge Bermúdez', position: 'Defensor' },
      { number: 6, name: 'Walter Samuel', position: 'Defensor' },
      { number: 3, name: 'Rodolfo Arruabarrena', position: 'Defensor' },
      { number: 22, name: 'Sebastián Battaglia', position: 'Mediocampista' },
      { number: 5, name: 'Mauricio Serna', position: 'Mediocampista' },
      { number: 18, name: 'José Basualdo', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista', goals: [84] },
      { number: 16, name: 'Marcelo Delgado', position: 'Delantero', goals: [59] },
      { number: 20, name: 'Alfredo Moreno', position: 'Delantero' },
      { number: 9, name: 'Martín Palermo', position: 'Delantero', sub: true, goals: [90] }
    ],
    riverLineup: [
      { number: 1, name: 'Roberto Bonano', position: 'Arquero' },
      { number: 4, name: 'Gustavo Lombardi', position: 'Defensor' },
      { number: 2, name: 'Roberto Trotta', position: 'Defensor' },
      { number: 6, name: 'Mario Yepes', position: 'Defensor' },
      { number: 19, name: 'Diego Placente', position: 'Defensor' },
      { number: 8, name: 'Eduardo Coudet', position: 'Mediocampista' },
      { number: 5, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 11, name: 'Víctor Zapata', position: 'Mediocampista' },
      { number: 10, name: 'Pablo Aimar', position: 'Mediocampista' },
      { number: 7, name: 'Javier Saviola', position: 'Delantero' },
      { number: 9, name: 'Juan Pablo Ángel', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start' },
      { minute: 59, type: 'goal', team: 'boca', player: 'Marcelo Delgado', detail: 'Pase quirúrgico de Riquelme' },
      { minute: 75, type: 'sub', team: 'boca', player: 'Entra Martín Palermo tras 6 meses sin jugar por rotura de ligamentos' },
      { minute: 82, type: 'var', detail: 'Caño inolvidable de Riquelme a Yepes de espaldas' },
      { minute: 84, type: 'goal', team: 'boca', player: 'Juan Román Riquelme', penalty: true },
      { minute: 90, type: 'goal', team: 'boca', player: 'Martín Palermo', detail: 'El muletazo: media vuelta histórica con lágrimas de emoción' },
      { minute: 93, type: 'end', detail: 'Boca avanza a semifinales en su camino a la gloria eterna' }
    ],
    summary: 'La noche del caño de Riquelme a Yepes y el conmovedor regreso de Martín Palermo con gol en muletas.'
  },

  // 1990s Década de Oro y Clásicos Míticos
  {
    id: '189',
    number: 189,
    date: '1997-10-25',
    formattedDate: '25 de octubre de 1997',
    tournament: 'Torneo Apertura 1997',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Horacio Elizondo',
    attendance: '65.000 espectadores',
    bocaScore: 2,
    riverScore: 1,
    winner: 'boca',
    decade: '1990-1999',
    bocaGoals: [
      { minute: 47, player: 'Julio César Toresani' },
      { minute: 67, player: 'Martín Palermo' }
    ],
    riverGoals: [{ minute: 40, player: 'Sergio Berti' }],
    bocaCoach: 'Héctor Veira',
    riverCoach: 'Ramón Díaz',
    bocaLineup: [
      { number: 1, name: 'Óscar Córdoba', position: 'Arquero' },
      { number: 4, name: 'Nelson Vivas', position: 'Defensor' },
      { number: 2, name: 'Jorge Bermúdez', position: 'Defensor' },
      { number: 6, name: 'Néstor Fabbri', position: 'Defensor' },
      { number: 3, name: 'Rodolfo Arruabarrena', position: 'Defensor' },
      { number: 8, name: 'Julio César Toresani', position: 'Mediocampista', goals: [47] },
      { number: 5, name: 'Alfredo Cagna', position: 'Mediocampista' },
      { number: 11, name: 'Diego Cagna', position: 'Mediocampista' },
      { number: 10, name: 'Diego Armando Maradona', position: 'Mediocampista', subOutMinute: 45 },
      { number: 7, name: 'Claudio Caniggia', position: 'Delantero' },
      { number: 9, name: 'Martín Palermo', position: 'Delantero', goals: [67] },
      { number: 20, name: 'Juan Román Riquelme', position: 'Mediocampista', sub: true, subInMinute: 45 }
    ],
    riverLineup: [
      { number: 1, name: 'Germán Burgos', position: 'Arquero' },
      { number: 4, name: 'Hernán Díaz', position: 'Defensor' },
      { number: 2, name: 'Celso Ayala', position: 'Defensor' },
      { number: 6, name: 'Eduardo Berizzo', position: 'Defensor' },
      { number: 3, name: 'Juan Pablo Sorín', position: 'Defensor' },
      { number: 8, name: 'Roberto Monserrat', position: 'Mediocampista' },
      { number: 5, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 11, name: 'Sergio Berti', position: 'Mediocampista', goals: [40] },
      { number: 10, name: 'Marcelo Gallardo', position: 'Mediocampista' },
      { number: 9, name: 'Enzo Francescoli', position: 'Delantero' },
      { number: 7, name: 'Marcelo Salas', position: 'Delantero' }
    ],
    timeline: [
      { minute: 40, type: 'goal', team: 'river', player: 'Sergio Berti' },
      { minute: 45, type: 'sub', team: 'boca', player: 'Riquelme reemplaza a Maradona (último partido oficial de Diego)' },
      { minute: 47, type: 'goal', team: 'boca', player: 'Julio Toresani' },
      { minute: 67, type: 'goal', team: 'boca', player: 'Martín Palermo', detail: 'Cabezazo bajo la lluvia en el arco de la tribuna visitante' },
      { minute: 90, type: 'end' }
    ],
    summary: 'El último partido oficial de Diego Armando Maradona. Boca dio vuelta el marcador con cabezazo bajo el diluvio de Martín Palermo.'
  },
  {
    id: '184',
    number: 184,
    date: '1996-07-14',
    formattedDate: '14 de julio de 1996',
    tournament: 'Torneo Clausura 1996',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Aníbal Hay',
    attendance: '55.000 espectadores',
    bocaScore: 4,
    riverScore: 1,
    winner: 'boca',
    decade: '1990-1999',
    bocaGoals: [
      { minute: 43, player: 'José Basualdo' },
      { minute: 50, player: 'Claudio Caniggia' },
      { minute: 66, player: 'Claudio Caniggia' },
      { minute: 75, player: 'Claudio Caniggia' }
    ],
    riverGoals: [{ minute: 88, player: 'Gabriel Amato' }],
    bocaCoach: 'Carlos Bilardo',
    riverCoach: 'Ramón Díaz',
    bocaLineup: [
      { number: 1, name: 'Carlos Fernando Navarro Montoya', position: 'Arquero' },
      { number: 10, name: 'Diego Armando Maradona', position: 'Mediocampista' },
      { number: 7, name: 'Claudio Caniggia', position: 'Delantero', goals: [50, 66, 75] },
      { number: 8, name: 'José Basualdo', position: 'Mediocampista', goals: [43] }
    ],
    riverLineup: [
      { number: 1, name: 'Germán Burgos', position: 'Arquero' },
      { number: 9, name: 'Enzo Francescoli', position: 'Delantero' },
      { number: 10, name: 'Ariel Ortega', position: 'Delantero' }
    ],
    timeline: [
      { minute: 43, type: 'goal', team: 'boca', player: 'José Basualdo' },
      { minute: 50, type: 'goal', team: 'boca', player: 'Claudio Caniggia' },
      { minute: 66, type: 'goal', team: 'boca', player: 'Claudio Caniggia' },
      { minute: 75, type: 'goal', team: 'boca', player: 'Claudio Caniggia', detail: 'Hat-trick histórico del Pájaro' },
      { minute: 88, type: 'goal', team: 'river', player: 'Gabriel Amato' }
    ],
    summary: 'Triplete memorable de Claudio Paul Caniggia y el célebre festejo con Maradona en La Bombonera.'
  },
  {
    id: '179',
    number: 179,
    date: '1994-12-11',
    formattedDate: '11 de diciembre de 1994',
    tournament: 'Torneo Apertura 1994',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Javier Castrilli',
    attendance: '50.000 espectadores',
    bocaScore: 0,
    riverScore: 3,
    winner: 'river',
    decade: '1990-1999',
    bocaGoals: [],
    riverGoals: [
      { minute: 14, player: 'Enzo Francescoli', penalty: true },
      { minute: 24, player: 'Ariel Ortega' },
      { minute: 70, player: 'Marcelo Gallardo', penalty: true }
    ],
    bocaCoach: 'César Luis Menotti',
    riverCoach: 'Américo Gallego',
    bocaLineup: [
      { number: 1, name: 'Carlos Navarro Montoya', position: 'Arquero' }
    ],
    riverLineup: [
      { number: 1, name: 'Germán Burgos', position: 'Arquero' },
      { number: 9, name: 'Enzo Francescoli', position: 'Delantero', goals: [14] },
      { number: 10, name: 'Ariel Ortega', position: 'Delantero', goals: [24] },
      { number: 8, name: 'Marcelo Gallardo', position: 'Mediocampista', goals: [70] }
    ],
    timeline: [
      { minute: 14, type: 'goal', team: 'river', player: 'Enzo Francescoli', penalty: true },
      { minute: 24, type: 'goal', team: 'river', player: 'Ariel Ortega', detail: 'Golazo al ángulo de Ortega' },
      { minute: 70, type: 'goal', team: 'river', player: 'Marcelo Gallardo', penalty: true }
    ],
    summary: 'Exhibición del River de Gallego que se consagró campeón invicto con baile en La Bombonera.'
  },

  // 1980s
  {
    id: '154',
    number: 154,
    date: '1986-04-06',
    formattedDate: '6 de abril de 1986',
    tournament: 'Campeonato 1985/86',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Francisco Lamolina',
    attendance: '54.000 espectadores',
    bocaScore: 0,
    riverScore: 2,
    winner: 'river',
    decade: '1980-1989',
    bocaGoals: [],
    riverGoals: [
      { minute: 30, player: 'Norberto Alonso' },
      { minute: 85, player: 'Norberto Alonso' }
    ],
    bocaCoach: 'Mario Zanabria',
    riverCoach: 'Héctor Veira',
    bocaLineup: [
      { number: 1, name: 'Hugo Orlando Gatti', position: 'Arquero' },
      { number: 2, name: 'Roberto Mouzo', position: 'Defensor' }
    ],
    riverLineup: [
      { number: 1, name: 'Nery Pumpido', position: 'Arquero' },
      { number: 10, name: 'Norberto Alonso', position: 'Mediocampista', goals: [30, 85] },
      { number: 9, name: 'Enzo Francescoli', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'River ya campeón da media vuelta olímpica antes de jugar' },
      { minute: 30, type: 'goal', team: 'river', player: 'Norberto Alonso', detail: 'El inmortal gol de la pelota naranja de cabeza' },
      { minute: 85, type: 'goal', team: 'river', player: 'Norberto Alonso', detail: 'Tiro libre con desvío con la pelota blanca tradicional' }
    ],
    summary: 'El superclásico de la pelota naranja. El Beto Alonso silenció La Bombonera y festejó tirando la camiseta a la hinchada.'
  },
  {
    id: '144',
    number: 144,
    date: '1981-04-10',
    formattedDate: '10 de abril de 1981',
    tournament: 'Torneo Metropolitano 1981',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Arturo Ithurralde',
    attendance: '60.000 espectadores',
    bocaScore: 3,
    riverScore: 0,
    winner: 'boca',
    decade: '1980-1989',
    bocaGoals: [
      { minute: 55, player: 'Miguel Ángel Brindisi' },
      { minute: 60, player: 'Miguel Ángel Brindisi' },
      { minute: 67, player: 'Diego Armando Maradona' }
    ],
    riverGoals: [],
    bocaCoach: 'Silvio Marzolini',
    riverCoach: 'Ángel Labruna',
    bocaLineup: [
      { number: 1, name: 'Carlos Rodríguez', position: 'Arquero' },
      { number: 4, name: 'Vicente Pernía', position: 'Defensor' },
      { number: 2, name: 'Francisco Sá', position: 'Defensor' },
      { number: 6, name: 'Roberto Mouzo', position: 'Defensor' },
      { number: 3, name: 'Carlos Córdoba', position: 'Defensor' },
      { number: 8, name: 'Jorge Benítez', position: 'Mediocampista' },
      { number: 5, name: 'Marcelo Trobbiani', position: 'Mediocampista' },
      { number: 11, name: 'Miguel Ángel Brindisi', position: 'Mediocampista', goals: [55, 60] },
      { number: 10, name: 'Diego Armando Maradona', position: 'Mediocampista', goals: [67] },
      { number: 7, name: 'Osvaldo Escudero', position: 'Delantero' },
      { number: 9, name: 'Hugo Perotti', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Ubaldo Matildo Fillol', position: 'Arquero' },
      { number: 4, name: 'Eduardo Saporiti', position: 'Defensor' },
      { number: 2, name: 'Alberto Tarantini', position: 'Defensor' },
      { number: 6, name: 'Daniel Passarella', position: 'Defensor' },
      { number: 3, name: 'Héctor López', position: 'Defensor' },
      { number: 8, name: 'Juan José López', position: 'Mediocampista' },
      { number: 5, name: 'Reinaldo Merlo', position: 'Mediocampista' },
      { number: 10, name: 'Norberto Alonso', position: 'Mediocampista' },
      { number: 7, name: 'Pedro González', position: 'Delantero' },
      { number: 9, name: 'Ramón Díaz', position: 'Delantero' },
      { number: 11, name: 'Emilio Commisso', position: 'Delantero' }
    ],
    timeline: [
      { minute: 55, type: 'goal', team: 'boca', player: 'Miguel Ángel Brindisi' },
      { minute: 60, type: 'goal', team: 'boca', player: 'Miguel Ángel Brindisi' },
      { minute: 67, type: 'goal', team: 'boca', player: 'Diego Armando Maradona', detail: 'La pisada frente a Fillol dejándolo arrodillado en el barro' }
    ],
    summary: 'La noche que Diego Maradona inmortalizó su leyenda en el clásico, bajando un centro y desparramando al Pato Fillol y Tarantini.'
  },

  // 1970s Hitos
  {
    id: '133',
    number: 133,
    date: '1976-12-22',
    formattedDate: '22 de diciembre de 1976',
    tournament: 'Campeonato Nacional 1976 (Final)',
    competitionCategory: 'liga',
    stadium: 'Estadio Presidente Perón (Racing Club), Avellaneda',
    referee: 'Arturo Ithurralde',
    attendance: '69.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '1970-1979',
    bocaGoals: [{ minute: 72, player: 'Rubén Suñé' }],
    riverGoals: [],
    bocaCoach: 'Juan Carlos Lorenzo',
    riverCoach: 'Ángel Labruna',
    bocaLineup: [
      { number: 1, name: 'Hugo Orlando Gatti', position: 'Arquero' },
      { number: 4, name: 'Vicente Pernía', position: 'Defensor' },
      { number: 2, name: 'Francisco Sá', position: 'Defensor' },
      { number: 6, name: 'Roberto Mouzo', position: 'Defensor' },
      { number: 3, name: 'Alberto Tarantini', position: 'Defensor' },
      { number: 8, name: 'Jorge Ribolzi', position: 'Mediocampista' },
      { number: 5, name: 'Rubén Suñé', position: 'Mediocampista', goals: [72] },
      { number: 10, name: 'Mario Zanabria', position: 'Mediocampista' },
      { number: 7, name: 'Ernesto Mastrángelo', position: 'Delantero' },
      { number: 9, name: 'Carlos Veglio', position: 'Delantero' },
      { number: 11, name: 'Darío Felman', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Ubaldo Matildo Fillol', position: 'Arquero' },
      { number: 4, name: 'Pablo Comelles', position: 'Defensor' },
      { number: 2, name: 'Roberto Perfumo', position: 'Defensor' },
      { number: 6, name: 'Daniel Passarella', position: 'Defensor' },
      { number: 3, name: 'Héctor López', position: 'Defensor' },
      { number: 8, name: 'Juan José López', position: 'Mediocampista' },
      { number: 5, name: 'Reinaldo Merlo', position: 'Mediocampista' },
      { number: 10, name: 'Alejandro Sabella', position: 'Mediocampista' },
      { number: 7, name: 'Pedro González', position: 'Delantero' },
      { number: 9, name: 'Leopoldo Luque', position: 'Delantero' },
      { number: 11, name: 'Oscar Más', position: 'Delantero' }
    ],
    timeline: [
      { minute: 72, type: 'goal', team: 'boca', player: 'Rubén Suñé', detail: 'Tiro libre directo al ángulo sin pedir barrera mientras Fillol armaba la defensa' },
      { minute: 90, type: 'end', detail: 'Boca se consagra Campeón Nacional frente a su clásico rival' }
    ],
    summary: 'La única final de campeonato nacional disputada entre ambos hasta 2018. El legendario "gol fantasma" de tiro libre del Chapa Suñé.'
  },
  {
    id: '127',
    number: 127,
    date: '1974-02-03',
    formattedDate: '3 de febrero de 1974',
    tournament: 'Torneo Metropolitano 1974',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Roberto Goicoechea',
    attendance: '48.000 espectadores',
    bocaScore: 5,
    riverScore: 2,
    winner: 'boca',
    decade: '1970-1979',
    bocaGoals: [
      { minute: 32, player: 'Carlos María García Cambón' },
      { minute: 60, player: 'Carlos María García Cambón' },
      { minute: 66, player: 'Carlos María García Cambón' },
      { minute: 71, player: 'Carlos María García Cambón' },
      { minute: 46, player: 'Enzo Ferrero', penalty: true }
    ],
    riverGoals: [
      { minute: 16, player: 'Jorge Ghiso' },
      { minute: 61, player: 'Enrique Wolff', penalty: true }
    ],
    bocaCoach: 'Rogelio Domínguez',
    riverCoach: 'Néstor Rossi',
    bocaLineup: [
      { number: 1, name: 'Rubén Sánchez', position: 'Arquero' },
      { number: 9, name: 'Carlos María García Cambón', position: 'Delantero', goals: [32, 60, 66, 71] }
    ],
    riverLineup: [
      { number: 1, name: 'José Alberto Pérez', position: 'Arquero' },
      { number: 5, name: 'Reinaldo Merlo', position: 'Mediocampista' }
    ],
    timeline: [
      { minute: 32, type: 'goal', team: 'boca', player: 'García Cambón' },
      { minute: 60, type: 'goal', team: 'boca', player: 'García Cambón' },
      { minute: 66, type: 'goal', team: 'boca', player: 'García Cambón' },
      { minute: 71, type: 'goal', team: 'boca', player: 'García Cambón', detail: '4 goles en su debut oficial' }
    ],
    summary: 'Récord imbatible: Carlos María García Cambón debutó oficialmente con la camiseta de Boca marcándole 4 goles a River.'
  },

  // 1960s
  {
    id: '99',
    number: 99,
    date: '1962-12-09',
    formattedDate: '9 de diciembre de 1962',
    tournament: 'Campeonato de Primera División 1962',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Carlos Nai Foino',
    attendance: '60.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '1960-1969',
    bocaGoals: [{ minute: 14, player: 'Paulo Valentim', penalty: true }],
    riverGoals: [],
    bocaCoach: 'José D\'Amico',
    riverCoach: 'Néstor Rossi',
    bocaLineup: [
      { number: 1, name: 'Antonio Roma', position: 'Arquero' },
      { number: 3, name: 'Silvio Marzolini', position: 'Defensor' },
      { number: 5, name: 'Antonio Rattín', position: 'Mediocampista' },
      { number: 9, name: 'Paulo Valentim', position: 'Delantero', goals: [14] }
    ],
    riverLineup: [
      { number: 1, name: 'Amadeo Carrizo', position: 'Arquero' },
      { number: 10, name: 'Delem', position: 'Delantero' }
    ],
    timeline: [
      { minute: 14, type: 'goal', team: 'boca', player: 'Paulo Valentim', penalty: true },
      { minute: 85, type: 'penalty_miss', team: 'river', player: 'Delem', detail: 'Antonio Roma se adelanta y ataja el penal. Nai Foino dictamina: penal bien pateado es gol' }
    ],
    summary: 'El desenlace del campeonato de 1962: Roma le atajó el penal a Delem a 5 minutos del final asegurando el campeonato boquense.'
  },

  // Amateurismo / Primer Superclásico Oficial
  {
    id: '1',
    number: 1,
    date: '1913-08-24',
    formattedDate: '24 de agosto de 1913',
    tournament: 'Campeonato de Primera División 1913',
    competitionCategory: 'liga',
    stadium: 'Cancha de Racing Club, Avellaneda',
    referee: 'Patricio McCarthy',
    attendance: '7.000 espectadores',
    bocaScore: 1,
    riverScore: 2,
    winner: 'river',
    decade: '1913-1929',
    bocaGoals: [{ minute: 70, player: 'Marcos Mayer' }],
    riverGoals: [
      { minute: 23, player: 'Cándido García' },
      { minute: 47, player: 'Antonio Ameal Pereyra' }
    ],
    bocaCoach: 'Capitán Juan Garibaldi',
    riverCoach: 'Capitán Atilio Peruzzi',
    bocaLineup: [
      { name: 'Virtu Virtuso', position: 'Arquero' },
      { name: 'Marcos Mayer', position: 'Delantero', goals: [70] }
    ],
    riverLineup: [
      { name: 'Carlos Ísola', position: 'Arquero' },
      { name: 'Cándido García', position: 'Mediocampista', goals: [23] },
      { name: 'Antonio Ameal Pereyra', position: 'Delantero', goals: [47] }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'El pitazo inicial del primer Superclásico oficial de la historia' },
      { minute: 23, type: 'goal', team: 'river', player: 'Cándido García', detail: 'El primer gol oficial en la historia del Superclásico' },
      { minute: 47, type: 'goal', team: 'river', player: 'Antonio Ameal Pereyra' },
      { minute: 70, type: 'goal', team: 'boca', player: 'Marcos Mayer' },
      { minute: 90, type: 'end', detail: 'Victoria de River Plate 2 a 1 en el debut clásico' }
    ],
    summary: 'El primer Superclásico oficial de la historia, disputado en la cancha de madera de Racing en Avellaneda. Victoria de River Plate por 2 a 1.'
  }
];

export const TOTAL_STATS = {
  totalMatches: 266,
  bocaWins: 94,
  riverWins: 88,
  draws: 84,
  bocaGoals: 342,
  riverGoals: 321,
  byCompetition: [
    { name: 'Ligas Nacionales (AFA)', matches: 218, bocaWins: 80, riverWins: 73, draws: 65, bocaGoals: 288, riverGoals: 268 },
    { name: 'Copas Nacionales', matches: 16, bocaWins: 3, riverWins: 5, draws: 8, bocaGoals: 14, riverGoals: 17 },
    { name: 'Copas Internacionales (Conmebol)', matches: 32, bocaWins: 11, riverWins: 10, draws: 11, bocaGoals: 40, riverGoals: 36 }
  ],
  byDecade: [
    { decade: '2020-2026', label: 'Partidas de 2020 a 2026', matches: 13, bocaWins: 5, riverWins: 4, draws: 4, bocaGoals: 14, riverGoals: 12 },
    { decade: '2010-2019', label: 'Partidas de 2010 a 2019', matches: 30, bocaWins: 10, riverWins: 11, draws: 9, bocaGoals: 31, riverGoals: 33 },
    { decade: '2000-2009', label: 'Partidas de 2000 a 2009', matches: 27, bocaWins: 11, riverWins: 8, draws: 8, bocaGoals: 34, riverGoals: 30 },
    { decade: '1990-1999', label: 'Partidas de 1990 a 1999', matches: 26, bocaWins: 11, riverWins: 6, draws: 9, bocaGoals: 33, riverGoals: 26 },
    { decade: '1980-1989', label: 'Partidas de 1980 a 1989', matches: 31, bocaWins: 10, riverWins: 11, draws: 10, bocaGoals: 38, riverGoals: 41 },
    { decade: '1970-1979', label: 'Partidas de 1970 a 1979', matches: 41, bocaWins: 16, riverWins: 14, draws: 11, bocaGoals: 62, riverGoals: 56 },
    { decade: '1960-1969', label: 'Partidas de 1960 a 1969', matches: 28, bocaWins: 12, riverWins: 8, draws: 8, bocaGoals: 37, riverGoals: 31 },
    { decade: '1950-1959', label: 'Partidas de 1950 a 1959', matches: 20, bocaWins: 8, riverWins: 9, draws: 3, bocaGoals: 31, riverGoals: 34 },
    { decade: '1940-1949', label: 'Partidas de 1940 a 1949', matches: 20, bocaWins: 6, riverWins: 10, draws: 4, bocaGoals: 31, riverGoals: 43 },
    { decade: '1930-1939', label: 'Partidas de 1930 a 1939', matches: 19, bocaWins: 7, riverWins: 7, draws: 5, bocaGoals: 27, riverGoals: 29 },
    { decade: '1913-1929', label: 'Partidas de 1913 a 1929', matches: 11, bocaWins: 3, riverWins: 4, draws: 4, bocaGoals: 9, riverGoals: 12 }
  ]
};
