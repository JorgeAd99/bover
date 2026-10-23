import { Match } from '../types';

export const HISTORICAL_MATCHES_EXTENSION: Match[] = [
  // 2019 - Copa Libertadores Semifinal Vuelta
  {
    id: '250',
    number: 250,
    date: '2019-10-22',
    formattedDate: '22 de octubre de 2019',
    tournament: 'Copa Libertadores 2019 (Semifinal Vuelta)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Wilton Sampaio (Brasil)',
    attendance: '52.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '2010-2019',
    bocaGoals: [{ minute: 80, player: 'Jan Hurtado' }],
    riverGoals: [],
    bocaCoach: 'Gustavo Alfaro',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Esteban Andrada', position: 'Arquero' },
      { number: 4, name: 'Julio Buffarini', position: 'Defensor' },
      { number: 20, name: 'Lisandro López', position: 'Defensor' },
      { number: 24, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 3, name: 'Emmanuel Mas', position: 'Defensor' },
      { number: 23, name: 'Iván Marcone', position: 'Mediocampista' },
      { number: 8, name: 'Alexis Mac Allister', position: 'Mediocampista' },
      { number: 10, name: 'Carlos Tevez', position: 'Delantero' },
      { number: 11, name: 'Eduardo Salvio', position: 'Mediocampista' },
      { number: 17, name: 'Ramón Ábila', position: 'Delantero' },
      { number: 27, name: 'Jan Hurtado', position: 'Delantero', sub: true, goals: [80] }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 29, name: 'Gonzalo Montiel', position: 'Defensor' },
      { number: 28, name: 'Lucas Martínez Quarta', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 15, name: 'Exequiel Palacios', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás De La Cruz', position: 'Mediocampista' },
      { number: 7, name: 'Matías Suárez', position: 'Delantero' },
      { number: 19, name: 'Rafael Santos Borré', position: 'Delantero' }
    ],
    timeline: [
      { minute: 0, type: 'start', detail: 'La Bombonera cubierta de papelitos en un recibimiento histórico' },
      { minute: 21, type: 'var', detail: 'Gol anulado a Salvio por mano previa de Mas' },
      { minute: 80, type: 'goal', team: 'boca', player: 'Jan Hurtado', detail: 'Empujó la pelota tras cabezazo de Lisandro López' },
      { minute: 95, type: 'end', detail: 'River clasifica a la final de Lima 2019 (Global 2-1)' }
    ],
    summary: 'Boca ganó 1-0 en La Bombonera con gol de Hurtado pero no le alcanzó tras el 0-2 de la ida. River selló su pase a la final de América.'
  },

  // 2019 - Copa Libertadores Semifinal Ida
  {
    id: '249',
    number: 249,
    date: '2019-10-01',
    formattedDate: '1 de octubre de 2019',
    tournament: 'Copa Libertadores 2019 (Semifinal Ida)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Raphael Claus (Brasil)',
    attendance: '70.000 espectadores',
    bocaScore: 0,
    riverScore: 2,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [],
    riverGoals: [
      { minute: 7, player: 'Rafael Santos Borré', penalty: true },
      { minute: 70, player: 'Ignacio Fernández' }
    ],
    bocaCoach: 'Gustavo Alfaro',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Esteban Andrada', position: 'Arquero' },
      { number: 42, name: 'Marcelo Weigandt', position: 'Defensor' },
      { number: 20, name: 'Lisandro López', position: 'Defensor' },
      { number: 24, name: 'Carlos Izquierdoz', position: 'Defensor' },
      { number: 3, name: 'Emmanuel Mas', position: 'Defensor' },
      { number: 23, name: 'Iván Marcone', position: 'Mediocampista' },
      { number: 7, name: 'Nicolás Capaldo', position: 'Mediocampista', redCardMinute: 97 },
      { number: 8, name: 'Alexis Mac Allister', position: 'Mediocampista' },
      { number: 17, name: 'Ramón Ábila', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 29, name: 'Gonzalo Montiel', position: 'Defensor' },
      { number: 28, name: 'Lucas Martínez Quarta', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista', goals: [70] },
      { number: 15, name: 'Exequiel Palacios', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás De La Cruz', position: 'Mediocampista' },
      { number: 7, name: 'Matías Suárez', position: 'Delantero' },
      { number: 19, name: 'Rafael Santos Borré', position: 'Delantero', goals: [7] }
    ],
    timeline: [
      { minute: 7, type: 'goal', team: 'river', player: 'Rafael Santos Borré', penalty: true, detail: 'Penal advertido por el VAR de Mas sobre Borré' },
      { minute: 42, type: 'var', detail: 'Increíble gol errado por Capaldo mano a mano sobre el travesaño' },
      { minute: 70, type: 'goal', team: 'river', player: 'Ignacio Fernández', detail: 'Gran jugada colectiva y toque al gol en el área chica' },
      { minute: 97, type: 'red', team: 'boca', player: 'Nicolás Capaldo' }
    ],
    summary: 'Gran actuación del River de Gallardo en Núñez con dominio táctico y goles de Borré de penal y Nacho Fernández.'
  },

  // 2018 - Supercopa Argentina en Mendoza
  {
    id: '244',
    number: 244,
    date: '2018-03-14',
    formattedDate: '14 de marzo de 2018',
    tournament: 'Supercopa Argentina 2017 (Final)',
    competitionCategory: 'copa_nacional',
    stadium: 'Estadio Malvinas Argentinas, Mendoza',
    referee: 'Patricio Loustau',
    attendance: '45.000 espectadores',
    bocaScore: 0,
    riverScore: 2,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [],
    riverGoals: [
      { minute: 18, player: 'Gonzalo Martínez', penalty: true },
      { minute: 70, player: 'Ignacio Scocco' }
    ],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 12, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 29, name: 'Leonardo Jara', position: 'Defensor' },
      { number: 2, name: 'Paolo Goltz', position: 'Defensor' },
      { number: 6, name: 'Lisandro Magallán', position: 'Defensor' },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 15, name: 'Nahitan Nández', position: 'Mediocampista' },
      { number: 16, name: 'Wilmar Barrios', position: 'Mediocampista' },
      { number: 8, name: 'Pablo Pérez', position: 'Mediocampista' },
      { number: 7, name: 'Cristian Pavón', position: 'Delantero' },
      { number: 32, name: 'Carlos Tevez', position: 'Delantero' },
      { number: 10, name: 'Edwin Cardona', position: 'Mediocampista' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Armani', position: 'Arquero' },
      { number: 29, name: 'Gonzalo Montiel', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 3, name: 'Marcelo Saracchi', position: 'Defensor' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 23, name: 'Leonardo Ponzio', position: 'Mediocampista' },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 10, name: 'Gonzalo Martínez', position: 'Mediocampista', goals: [18] },
      { number: 7, name: 'Rodrigo Mora', position: 'Delantero' },
      { number: 27, name: 'Lucas Pratto', position: 'Delantero' },
      { number: 32, name: 'Ignacio Scocco', position: 'Delantero', sub: true, goals: [70] }
    ],
    timeline: [
      { minute: 18, type: 'goal', team: 'river', player: 'Gonzalo Martínez', penalty: true, detail: 'Infracción de Cardona a Nacho Fernández en el área' },
      { minute: 68, type: 'sub', team: 'river', player: 'Scocco ingresa por Pratto' },
      { minute: 70, type: 'goal', team: 'river', player: 'Ignacio Scocco', detail: 'Contragolpe letal comandado por el Pity Martínez' },
      { minute: 75, type: 'var', detail: 'Armani salva milagrosamente cabezazos de Goltz y Fabra' }
    ],
    summary: 'Final directa en Mendoza con ambas hinchadas. River se consagró campeón de la Supercopa Argentina con goles del Pity Martínez y Scocco.'
  },

  // 2017 - Superliga en el Monumental
  {
    id: '243',
    number: 243,
    date: '2017-11-05',
    formattedDate: '5 de noviembre de 2017',
    tournament: 'Superliga 2017/18',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Néstor Pitana',
    attendance: '63.000 espectadores',
    bocaScore: 2,
    riverScore: 1,
    winner: 'boca',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 42, player: 'Edwin Cardona' },
      { minute: 73, player: 'Nahitan Nández' }
    ],
    riverGoals: [{ minute: 69, player: 'Leonardo Ponzio' }],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 12, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 29, name: 'Leonardo Jara', position: 'Defensor' },
      { number: 2, name: 'Paolo Goltz', position: 'Defensor' },
      { number: 6, name: 'Lisandro Magallán', position: 'Defensor' },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 15, name: 'Nahitan Nández', position: 'Mediocampista', goals: [73] },
      { number: 16, name: 'Wilmar Barrios', position: 'Mediocampista' },
      { number: 8, name: 'Pablo Pérez', position: 'Mediocampista' },
      { number: 7, name: 'Cristian Pavón', position: 'Delantero' },
      { number: 9, name: 'Darío Benedetto', position: 'Delantero' },
      { number: 10, name: 'Edwin Cardona', position: 'Mediocampista', goals: [42], redCardMinute: 61 }
    ],
    riverLineup: [
      { number: 14, name: 'Germán Lux', position: 'Arquero' },
      { number: 29, name: 'Gonzalo Montiel', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 22, name: 'Javier Pinola', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista', redCardMinute: 38 },
      { number: 23, name: 'Leonardo Ponzio', position: 'Mediocampista', goals: [69] },
      { number: 24, name: 'Enzo Pérez', position: 'Mediocampista' },
      { number: 16, name: 'Ariel Rojas', position: 'Mediocampista' },
      { number: 10, name: 'Gonzalo Martínez', position: 'Mediocampista' },
      { number: 32, name: 'Ignacio Scocco', position: 'Delantero' }
    ],
    timeline: [
      { minute: 38, type: 'red', team: 'river', player: 'Ignacio Fernández', detail: 'Patada en el pecho a Cardona' },
      { minute: 42, type: 'goal', team: 'boca', player: 'Edwin Cardona', detail: 'Tiro libre magistral al ángulo derecho de Lux' },
      { minute: 61, type: 'red', team: 'boca', player: 'Edwin Cardona', detail: 'Injusta expulsión por supuesto codazo a Enzo Pérez' },
      { minute: 69, type: 'goal', team: 'river', player: 'Leonardo Ponzio', detail: 'Bombazo desde 30 metros contra el palo de Rossi' },
      { minute: 73, type: 'goal', team: 'boca', player: 'Nahitan Nández', detail: 'Volea inolvidable tras centro pasado de Pablo Pérez' }
    ],
    summary: 'Partido inolvidable: golazo de tiro libre de Cardona, empate de Ponzio y definición épica de Nández para el triunfo xeneize en Núñez.'
  },

  // 2017 - Campeonato en La Bombonera
  {
    id: '242',
    number: 242,
    date: '2017-05-14',
    formattedDate: '14 de mayo de 2017',
    tournament: 'Campeonato de Primera División 2016/17',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Patricio Loustau',
    attendance: '50.000 espectadores',
    bocaScore: 1,
    riverScore: 3,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [{ minute: 47, player: 'Fernando Gago' }],
    riverGoals: [
      { minute: 14, player: 'Gonzalo Martínez' },
      { minute: 24, player: 'Lucas Alario' },
      { minute: 91, player: 'Carlos Auzqui' }
    ],
    bocaCoach: 'Guillermo Barros Schelotto',
    riverCoach: 'Marcelo Gallardo',
    bocaLineup: [
      { number: 1, name: 'Agustín Rossi', position: 'Arquero' },
      { number: 4, name: 'Gino Peruzzi', position: 'Defensor' },
      { number: 2, name: 'Santiago Vergini', position: 'Defensor' },
      { number: 25, name: 'Juan Manuel Insaurralde', position: 'Defensor' },
      { number: 18, name: 'Frank Fabra', position: 'Defensor' },
      { number: 8, name: 'Pablo Pérez', position: 'Mediocampista' },
      { number: 5, name: 'Fernando Gago', position: 'Mediocampista', goals: [47] },
      { number: 30, name: 'Rodrigo Bentancur', position: 'Mediocampista' },
      { number: 7, name: 'Cristian Pavón', position: 'Delantero' },
      { number: 9, name: 'Darío Benedetto', position: 'Delantero' },
      { number: 26, name: 'Ricardo Centurión', position: 'Delantero', subOutMinute: 16 }
    ],
    riverLineup: [
      { number: 1, name: 'Augusto Batalla', position: 'Arquero' },
      { number: 4, name: 'Jorge Moreira', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 28, name: 'Lucas Martínez Quarta', position: 'Defensor' },
      { number: 20, name: 'Milton Casco', position: 'Defensor' },
      { number: 26, name: 'Ignacio Fernández', position: 'Mediocampista' },
      { number: 23, name: 'Leonardo Ponzio', position: 'Mediocampista' },
      { number: 16, name: 'Ariel Rojas', position: 'Mediocampista' },
      { number: 10, name: 'Gonzalo Martínez', position: 'Mediocampista', goals: [14] },
      { number: 11, name: 'Sebastián Driussi', position: 'Delantero' },
      { number: 13, name: 'Lucas Alario', position: 'Delantero', goals: [24] }
    ],
    timeline: [
      { minute: 14, type: 'goal', team: 'river', player: 'Gonzalo Martínez', detail: 'Volea de zurda inatajable para Rossi' },
      { minute: 24, type: 'goal', team: 'river', player: 'Lucas Alario', detail: 'Definición precisa contra el palo' },
      { minute: 47, type: 'goal', team: 'boca', player: 'Fernando Gago', detail: 'Tiro libre con falla de Batalla que se metió por arriba' },
      { minute: 91, type: 'goal', team: 'river', player: 'Marcelo Larrondo / Mayada', detail: 'Definición para cerrar el 3-1 definitivo' }
    ],
    summary: 'Baile táctico de River en los primeros 25 minutos con goles del Pity Martínez y Alario en una tarde electrizante en La Bombonera.'
  },

  // 2014 - Torneo Final "No fue córner"
  {
    id: '233',
    number: 233,
    date: '2014-03-30',
    formattedDate: '30 de marzo de 2014',
    tournament: 'Torneo Final 2014',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Néstor Pitana',
    attendance: '50.000 espectadores',
    bocaScore: 1,
    riverScore: 2,
    winner: 'river',
    decade: '2010-2019',
    bocaGoals: [{ minute: 68, player: 'Juan Román Riquelme' }],
    riverGoals: [
      { minute: 58, player: 'Manuel Lanzini' },
      { minute: 86, player: 'Ramiro Funes Mori' }
    ],
    bocaCoach: 'Carlos Bianchi',
    riverCoach: 'Ramón Díaz',
    bocaLineup: [
      { number: 1, name: 'Agustín Orion', position: 'Arquero' },
      { number: 4, name: 'Hernán Grana', position: 'Defensor' },
      { number: 2, name: 'Daniel Díaz', position: 'Defensor' },
      { number: 6, name: 'Juan Forlín', position: 'Defensor' },
      { number: 3, name: 'Emanuel Insua', position: 'Defensor' },
      { number: 8, name: 'Fernando Gago', position: 'Mediocampista' },
      { number: 5, name: 'Federico Bravo', position: 'Mediocampista' },
      { number: 11, name: 'Juan Sánchez Miño', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista', goals: [68] },
      { number: 7, name: 'Juan Manuel Martínez', position: 'Delantero' },
      { number: 9, name: 'Emmanuel Gigliotti', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Marcelo Barovero', position: 'Arquero' },
      { number: 25, name: 'Gabriel Mercado', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 3, name: 'Éder Álvarez Balanta', position: 'Defensor' },
      { number: 6, name: 'Ramiro Funes Mori', position: 'Defensor', goals: [86] },
      { number: 7, name: 'Carlos Carbonero', position: 'Mediocampista' },
      { number: 28, name: 'Cristian Ledesma', position: 'Mediocampista' },
      { number: 16, name: 'Ariel Rojas', position: 'Mediocampista' },
      { number: 10, name: 'Manuel Lanzini', position: 'Mediocampista', goals: [58] },
      { number: 29, name: 'Teófilo Gutiérrez', position: 'Delantero' },
      { number: 9, name: 'Fernando Cavenaghi', position: 'Delantero' }
    ],
    timeline: [
      { minute: 58, type: 'goal', team: 'river', player: 'Manuel Lanzini', detail: 'Definición cruzada tras pase de Teo Gutiérrez' },
      { minute: 68, type: 'goal', team: 'boca', player: 'Juan Román Riquelme', detail: 'Golazo de tiro libre directo al ángulo superior izquierdo de Barovero' },
      { minute: 86, type: 'goal', team: 'river', player: 'Ramiro Funes Mori', detail: 'Cabezazo tras córner mal cobrado (el célebre no fue córner)' },
      { minute: 90, type: 'end', detail: 'River corta una sequía de 10 años sin ganar en La Bombonera' }
    ],
    summary: 'El Ramirazo: golazo de tiro libre de Riquelme y cabezazo agónico de Funes Mori para que el River de Ramón Díaz rompiera 10 años de racha sin festejos en La Boca.'
  },

  // 2012 - Torneo Inicial 2-2 agónico de Erviti
  {
    id: '230',
    number: 230,
    date: '2012-10-28',
    formattedDate: '28 de octubre de 2012',
    tournament: 'Torneo Inicial 2012',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Pablo Lunati',
    attendance: '62.000 espectadores',
    bocaScore: 2,
    riverScore: 2,
    winner: 'draw',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 75, player: 'Santiago Silva', penalty: true },
      { minute: 91, player: 'Walter Erviti' }
    ],
    riverGoals: [
      { minute: 1, player: 'Leonardo Ponzio' },
      { minute: 70, player: 'Rodrigo Mora' }
    ],
    bocaCoach: 'Julio César Falcioni',
    riverCoach: 'Matías Almeyda',
    bocaLineup: [
      { number: 1, name: 'Agustín Orion', position: 'Arquero' },
      { number: 4, name: 'Emiliano Albín', position: 'Defensor' },
      { number: 2, name: 'Rolando Schiavi', position: 'Defensor' },
      { number: 6, name: 'Guillermo Burdisso', position: 'Defensor' },
      { number: 3, name: 'Clemente Rodríguez', position: 'Defensor' },
      { number: 18, name: 'Nicolás Colazo', position: 'Mediocampista' },
      { number: 5, name: 'Leandro Somoza', position: 'Mediocampista' },
      { number: 11, name: 'Walter Erviti', position: 'Mediocampista', goals: [91] },
      { number: 21, name: 'Cristian Chávez', position: 'Mediocampista' },
      { number: 19, name: 'Santiago Silva', position: 'Delantero', goals: [75] },
      { number: 9, name: 'Lucas Viatri', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Marcelo Barovero', position: 'Arquero' },
      { number: 25, name: 'Gabriel Mercado', position: 'Defensor' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 20, name: 'Leandro González Pirez', position: 'Defensor' },
      { number: 6, name: 'Ramiro Funes Mori', position: 'Defensor' },
      { number: 8, name: 'Carlos Sánchez', position: 'Mediocampista' },
      { number: 23, name: 'Leonardo Ponzio', position: 'Mediocampista', goals: [1] },
      { number: 5, name: 'Ezequiel Cirigliano', position: 'Mediocampista' },
      { number: 11, name: 'Martín Aguirre', position: 'Mediocampista' },
      { number: 7, name: 'Rodrigo Mora', position: 'Delantero', goals: [70] },
      { number: 17, name: 'David Trezeguet', position: 'Delantero' }
    ],
    timeline: [
      { minute: 1, type: 'goal', team: 'river', player: 'Leonardo Ponzio', detail: 'Tiro libre lejano que sorprendió a Orion en el arranque' },
      { minute: 70, type: 'goal', team: 'river', player: 'Rodrigo Mora', detail: 'Gambeta a Orion y toque a la red para el 2-0' },
      { minute: 75, type: 'goal', team: 'boca', player: 'Santiago Silva', penalty: true, detail: 'Descuento boquense desde los 12 pasos' },
      { minute: 91, type: 'goal', team: 'boca', player: 'Walter Erviti', detail: 'Arremetida agónica en tiempo de descuento en el área chica' }
    ],
    summary: 'River ganaba 2-0 con comodidad en el Monumental, pero Boca lo empató en tiempo cumplido con la heroica arremetida de Walter Erviti.'
  },

  // 2011 - El último superclásico de Martín Palermo
  {
    id: '227',
    number: 227,
    date: '2011-05-15',
    formattedDate: '15 de mayo de 2011',
    tournament: 'Torneo Clausura 2011',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Patricio Loustau',
    attendance: '50.000 espectadores',
    bocaScore: 2,
    riverScore: 0,
    winner: 'boca',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 28, player: 'Juan Pablo Carrizo (e/c)' },
      { minute: 31, player: 'Martín Palermo' }
    ],
    riverGoals: [],
    bocaCoach: 'Julio César Falcioni',
    riverCoach: 'Juan José López',
    bocaLineup: [
      { number: 12, name: 'Cristian Lucchetti', position: 'Arquero' },
      { number: 17, name: 'Clemente Rodríguez', position: 'Defensor' },
      { number: 6, name: 'Matías Caruzzo', position: 'Defensor' },
      { number: 2, name: 'Juan Manuel Insaurralde', position: 'Defensor' },
      { number: 3, name: 'Fabián Monzón', position: 'Defensor' },
      { number: 8, name: 'Cristian Chávez', position: 'Mediocampista' },
      { number: 5, name: 'Leandro Somoza', position: 'Mediocampista' },
      { number: 11, name: 'Nicolás Colazo', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista' },
      { number: 7, name: 'Pablo Mouche', position: 'Delantero' },
      { number: 9, name: 'Martín Palermo', position: 'Delantero', goals: [31] }
    ],
    riverLineup: [
      { number: 1, name: 'Juan Pablo Carrizo', position: 'Arquero' },
      { number: 2, name: 'Jonatan Maidana', position: 'Defensor' },
      { number: 6, name: 'Alexis Ferrero', position: 'Defensor' },
      { number: 19, name: 'Adalberto Román', position: 'Defensor' },
      { number: 4, name: 'Paulo Ferrari', position: 'Defensor' },
      { number: 7, name: 'Walter Acevedo', position: 'Mediocampista' },
      { number: 25, name: 'Matías Almeyda', position: 'Mediocampista', redCardMinute: 92 },
      { number: 3, name: 'Carlos Arano', position: 'Defensor' },
      { number: 10, name: 'Erik Lamela', position: 'Mediocampista' },
      { number: 9, name: 'Rogelio Funes Mori', position: 'Delantero' },
      { number: 18, name: 'Mariano Pavone', position: 'Delantero' }
    ],
    timeline: [
      { minute: 28, type: 'goal', team: 'boca', player: 'Juan Pablo Carrizo (e/c)', detail: 'Falla insólita del arquero millonario al intentar retener un córner' },
      { minute: 31, type: 'goal', team: 'boca', player: 'Martín Palermo', detail: 'Cabezazo bombeado por arriba de Carrizo en su despedida de los clásicos' },
      { minute: 92, type: 'red', team: 'river', player: 'Matías Almeyda', detail: 'Expulsión y beso a la camiseta de River de cara a la tribuna de Boca' }
    ],
    summary: 'El adiós de Martín Palermo al Superclásico con su noveno gol de cabeza y el polémico beso a la camiseta de Matías Almeyda tras ser expulsado.'
  },

  // 2010 - Doblete del Pitbull Gary Medel
  {
    id: '225',
    number: 225,
    date: '2010-03-25',
    formattedDate: '25 de marzo de 2010',
    tournament: 'Torneo Clausura 2010',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Héctor Baldassi',
    attendance: '48.000 espectadores',
    bocaScore: 2,
    riverScore: 0,
    winner: 'boca',
    decade: '2010-2019',
    bocaGoals: [
      { minute: 14, player: 'Gary Medel' },
      { minute: 48, player: 'Gary Medel' }
    ],
    riverGoals: [],
    bocaCoach: 'Abel Alves',
    riverCoach: 'Leonardo Astrada',
    bocaLineup: [
      { number: 1, name: 'Javier García', position: 'Arquero' },
      { number: 4, name: 'Hugo Ibarra', position: 'Defensor' },
      { number: 2, name: 'Julio Barroso', position: 'Defensor' },
      { number: 6, name: 'Ezequiel Muñoz', position: 'Defensor' },
      { number: 3, name: 'Claudio Morel Rodríguez', position: 'Defensor' },
      { number: 8, name: 'Gary Medel', position: 'Mediocampista', goals: [14, 48], redCardMinute: 75 },
      { number: 22, name: 'Cristian Erbes', position: 'Mediocampista' },
      { number: 5, name: 'Jesús Méndez', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista' },
      { number: 14, name: 'Nicolás Gaitán', position: 'Delantero' },
      { number: 9, name: 'Martín Palermo', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Daniel Vega', position: 'Arquero' },
      { number: 4, name: 'Paulo Ferrari', position: 'Defensor' },
      { number: 2, name: 'Alexis Ferrero', position: 'Defensor' },
      { number: 6, name: 'Facundo Quiroga', position: 'Defensor' },
      { number: 13, name: 'Juan Manuel Díaz', position: 'Defensor' },
      { number: 25, name: 'Matías Almeyda', position: 'Mediocampista' },
      { number: 22, name: 'Oscar Ahumada', position: 'Mediocampista' },
      { number: 37, name: 'Roberto Pereyra', position: 'Mediocampista' },
      { number: 10, name: 'Marcelo Gallardo', position: 'Mediocampista' },
      { number: 9, name: 'Rogelio Funes Mori', position: 'Delantero' },
      { number: 11, name: 'Gustavo Canales', position: 'Delantero' }
    ],
    timeline: [
      { minute: 14, type: 'goal', team: 'boca', player: 'Gary Medel', detail: 'Anticipo en el primer palo tras tiro libre rasante de Riquelme' },
      { minute: 48, type: 'goal', team: 'boca', player: 'Gary Medel', detail: 'Golazo de primera al ángulo tras pase atrás de Gaitán' },
      { minute: 75, type: 'red', team: 'boca', player: 'Gary Medel', detail: 'Doble amarilla y ovación de La Bombonera' }
    ],
    summary: 'La gran tarde del Pitbull Gary Medel: dos goles, figura total, expulsión a 15 minutos del final y ovación de La Bombonera.'
  },

  // 2008 - Cabezazo de Lucas Viatri en el Monumental
  {
    id: '222',
    number: 222,
    date: '2008-10-19',
    formattedDate: '19 de octubre de 2008',
    tournament: 'Torneo Apertura 2008',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Héctor Baldassi',
    attendance: '62.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '2000-2009',
    bocaGoals: [{ minute: 60, player: 'Lucas Viatri' }],
    riverGoals: [],
    bocaCoach: 'Carlos Ischia',
    riverCoach: 'Diego Simeone',
    bocaLineup: [
      { number: 1, name: 'Javier García', position: 'Arquero' },
      { number: 4, name: 'Hugo Ibarra', position: 'Defensor', redCardMinute: 52 },
      { number: 2, name: 'Julio César Cáceres', position: 'Defensor' },
      { number: 29, name: 'Gabriel Paletta', position: 'Defensor' },
      { number: 3, name: 'Claudio Morel Rodríguez', position: 'Defensor' },
      { number: 22, name: 'Fabián Vargas', position: 'Mediocampista' },
      { number: 5, name: 'Sebastián Battaglia', position: 'Mediocampista' },
      { number: 15, name: 'Jesús Dátolo', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista' },
      { number: 27, name: 'Lucas Viatri', position: 'Delantero', goals: [60] },
      { number: 7, name: 'Nicolás Gaitán', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Juan Manuel Ojeda', position: 'Arquero' },
      { number: 4, name: 'Paulo Ferrari', position: 'Defensor' },
      { number: 2, name: 'Eduardo Tuzzio', position: 'Defensor' },
      { number: 6, name: 'Facundo Quiroga', position: 'Defensor' },
      { number: 3, name: 'Cristian Villagra', position: 'Defensor' },
      { number: 8, name: 'Augusto Fernández', position: 'Mediocampista' },
      { number: 22, name: 'Oscar Ahumada', position: 'Mediocampista' },
      { number: 11, name: 'Matías Abelairas', position: 'Mediocampista' },
      { number: 10, name: 'Diego Buonanotte', position: 'Mediocampista' },
      { number: 9, name: 'Radamel Falcao García', position: 'Delantero' },
      { number: 23, name: 'Santiago Salcedo', position: 'Delantero' }
    ],
    timeline: [
      { minute: 52, type: 'red', team: 'boca', player: 'Hugo Ibarra', detail: 'Boca se queda con 10 futbolistas' },
      { minute: 60, type: 'goal', team: 'boca', player: 'Lucas Viatri', detail: 'Imponente cabezazo al segundo palo tras tiro libre medido de Riquelme' },
      { minute: 90, type: 'end', detail: 'Triunfo boquense clave rumbo al título del Apertura 2008' }
    ],
    summary: 'Boca con un jugador menos tras la expulsión de Ibarra se llevó el triunfo en Núñez con un memorable cabezazo de Lucas Viatri.'
  },

  // 2006 - Doblete del Pipita Higuaín
  {
    id: '217',
    number: 217,
    date: '2006-10-08',
    formattedDate: '8 de octubre de 2006',
    tournament: 'Torneo Apertura 2006',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Horacio Elizondo',
    attendance: '65.000 espectadores',
    bocaScore: 1,
    riverScore: 3,
    winner: 'river',
    decade: '2000-2009',
    bocaGoals: [{ minute: 31, player: 'Rodrigo Palacio' }],
    riverGoals: [
      { minute: 29, player: 'Gonzalo Higuaín' },
      { minute: 53, player: 'Gonzalo Higuaín' },
      { minute: 68, player: 'Fernando Belluschi' }
    ],
    bocaCoach: 'Ricardo La Volpe',
    riverCoach: 'Daniel Passarella',
    bocaLineup: [
      { number: 1, name: 'Aldo Bobadilla', position: 'Arquero' },
      { number: 4, name: 'Hugo Ibarra', position: 'Defensor' },
      { number: 2, name: 'Matías Silvestre', position: 'Defensor' },
      { number: 6, name: 'Daniel Díaz', position: 'Defensor' },
      { number: 3, name: 'Claudio Morel Rodríguez', position: 'Defensor' },
      { number: 21, name: 'Pablo Ledesma', position: 'Mediocampista' },
      { number: 5, name: 'Fernando Gago', position: 'Mediocampista' },
      { number: 19, name: 'Neri Cardozo', position: 'Mediocampista' },
      { number: 10, name: 'Guillermo Marino', position: 'Mediocampista' },
      { number: 14, name: 'Rodrigo Palacio', position: 'Delantero', goals: [31] },
      { number: 9, name: 'Martín Palermo', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Juan Pablo Carrizo', position: 'Arquero' },
      { number: 4, name: 'Paulo Ferrari', position: 'Defensor' },
      { number: 2, name: 'Eduardo Tuzzio', position: 'Defensor' },
      { number: 6, name: 'Federico Lussenhoff', position: 'Defensor' },
      { number: 3, name: 'Federico Domínguez', position: 'Defensor' },
      { number: 8, name: 'Fernando Belluschi', position: 'Mediocampista', goals: [68] },
      { number: 14, name: 'Nicolás Domingo', position: 'Mediocampista' },
      { number: 5, name: 'Oscar Ahumada', position: 'Mediocampista' },
      { number: 10, name: 'Marcelo Gallardo', position: 'Mediocampista' },
      { number: 9, name: 'Gonzalo Higuaín', position: 'Delantero', goals: [29, 53] },
      { number: 23, name: 'Ernesto Farías', position: 'Delantero' }
    ],
    timeline: [
      { minute: 29, type: 'goal', team: 'river', player: 'Gonzalo Higuaín', detail: 'Golazo de taco anticipando a Bobadilla' },
      { minute: 31, type: 'goal', team: 'boca', player: 'Rodrigo Palacio', detail: 'Empate rápido aprovechando error defensivo' },
      { minute: 53, type: 'goal', team: 'river', player: 'Gonzalo Higuaín', detail: 'Potente remate tras desborde y enganche formidable' },
      { minute: 68, type: 'goal', team: 'river', player: 'Fernando Belluschi', detail: 'Disparo cruzado para sellar la goleada millonaria' }
    ],
    summary: 'La consagración internacional de un joven Gonzalo Higuaín de 18 años, autor de dos golazos (uno de taco) que despertaron el interés del Real Madrid.'
  },

  // 2002 - La Vaselina de Ricardo Rojas en La Bombonera
  {
    id: '204',
    number: 204,
    date: '2002-03-10',
    formattedDate: '10 de marzo de 2002',
    tournament: 'Torneo Clausura 2002',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Claudio Martín',
    attendance: '50.000 espectadores',
    bocaScore: 0,
    riverScore: 3,
    winner: 'river',
    decade: '2000-2009',
    bocaGoals: [],
    riverGoals: [
      { minute: 26, player: 'Esteban Cambiasso' },
      { minute: 41, player: 'Eduardo Coudet' },
      { minute: 88, player: 'Ricardo Rojas' }
    ],
    bocaCoach: 'Oscar Washington Tabárez',
    riverCoach: 'Ramón Díaz',
    bocaLineup: [
      { number: 1, name: 'Roberto Abbondanzieri', position: 'Arquero' },
      { number: 4, name: 'José María Calvo', position: 'Defensor' },
      { number: 2, name: 'Rolando Schiavi', position: 'Defensor' },
      { number: 6, name: 'Nicolás Burdisso', position: 'Defensor' },
      { number: 3, name: 'Clemente Rodríguez', position: 'Defensor' },
      { number: 22, name: 'Sebastián Battaglia', position: 'Mediocampista' },
      { number: 5, name: 'Mauricio Serna', position: 'Mediocampista' },
      { number: 8, name: 'Cristian Traverso', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista' },
      { number: 7, name: 'Guillermo Barros Schelotto', position: 'Delantero' },
      { number: 11, name: 'Marcelo Delgado', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Ángel David Comizzo', position: 'Arquero' },
      { number: 4, name: 'Ariel Garcé', position: 'Defensor' },
      { number: 2, name: 'Celso Ayala', position: 'Defensor' },
      { number: 6, name: 'Martín Demichelis', position: 'Defensor' },
      { number: 3, name: 'Ricardo Rojas', position: 'Defensor', goals: [88] },
      { number: 8, name: 'Eduardo Coudet', position: 'Mediocampista', goals: [41] },
      { number: 5, name: 'Cristian Ledesma', position: 'Mediocampista' },
      { number: 11, name: 'Esteban Cambiasso', position: 'Mediocampista', goals: [26] },
      { number: 10, name: 'Andrés D\'Alessandro', position: 'Mediocampista' },
      { number: 7, name: 'Ariel Ortega', position: 'Delantero' },
      { number: 9, name: 'Fernando Cavenaghi', position: 'Delantero' }
    ],
    timeline: [
      { minute: 26, type: 'goal', team: 'river', player: 'Esteban Cambiasso', detail: 'Remate potente tras rebote en el área chica' },
      { minute: 41, type: 'goal', team: 'river', player: 'Eduardo Coudet', detail: 'Zurdazo contra el palo de Abbondanzieri' },
      { minute: 88, type: 'goal', team: 'river', player: 'Ricardo Rojas', detail: 'La histórica vaselina por encima de Abbondanzieri bajo la lluvia' }
    ],
    summary: 'Goleada histórica de River en La Bombonera 3-0. Inmortalizada por la vaselina antológica de emboquillada del lateral paraguayo Ricardo Rojas.'
  },

  // 2001 - La noche del Topo Gigio de Riquelme
  {
    id: '201',
    number: 201,
    date: '2001-04-08',
    formattedDate: '8 de abril de 2001',
    tournament: 'Torneo Clausura 2001',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Fabián Madorrán',
    attendance: '55.000 espectadores',
    bocaScore: 3,
    riverScore: 0,
    winner: 'boca',
    decade: '2000-2009',
    bocaGoals: [
      { minute: 66, player: 'Hugo Ibarra' },
      { minute: 72, player: 'Juan Román Riquelme' },
      { minute: 82, player: 'Guillermo Barros Schelotto', penalty: true }
    ],
    riverGoals: [],
    bocaCoach: 'Carlos Bianchi',
    riverCoach: 'Américo Gallego',
    bocaLineup: [
      { number: 1, name: 'Óscar Córdoba', position: 'Arquero' },
      { number: 4, name: 'Hugo Ibarra', position: 'Defensor', goals: [66] },
      { number: 2, name: 'Jorge Bermúdez', position: 'Defensor' },
      { number: 6, name: 'Aníbal Matellán', position: 'Defensor' },
      { number: 3, name: 'Clemente Rodríguez', position: 'Defensor' },
      { number: 22, name: 'Omar Pérez', position: 'Mediocampista' },
      { number: 5, name: 'Mauricio Serna', position: 'Mediocampista' },
      { number: 8, name: 'Cristian Traverso', position: 'Mediocampista' },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista', goals: [72] },
      { number: 7, name: 'Guillermo Barros Schelotto', position: 'Delantero', goals: [82] },
      { number: 11, name: 'Marcelo Delgado', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Franco Costanzo', position: 'Arquero' },
      { number: 4, name: 'Hernán Díaz', position: 'Defensor' },
      { number: 2, name: 'Celso Ayala', position: 'Defensor' },
      { number: 6, name: 'Mario Yepes', position: 'Defensor' },
      { number: 3, name: 'Pedro Sarabia', position: 'Defensor' },
      { number: 8, name: 'Eduardo Coudet', position: 'Mediocampista' },
      { number: 5, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 11, name: 'Víctor Zapata', position: 'Mediocampista' },
      { number: 10, name: 'Pablo Aimar', position: 'Mediocampista' },
      { number: 7, name: 'Ariel Ortega', position: 'Delantero' },
      { number: 9, name: 'Martín Cardetti', position: 'Delantero' }
    ],
    timeline: [
      { minute: 66, type: 'goal', team: 'boca', player: 'Hugo Ibarra', detail: 'Zurdazo teledirigido al ángulo de Costanzo desde 30 metros' },
      { minute: 72, type: 'goal', team: 'boca', player: 'Juan Román Riquelme', detail: 'Cabeceó el rebote de su penal atajado y corrió a hacer el Topo Gigio al palco oficial' },
      { minute: 82, type: 'goal', team: 'boca', player: 'Guillermo Barros Schelotto', penalty: true, detail: 'Sentenció la goleada 3 a 0' }
    ],
    summary: 'Noche icónica: golazo de zurda de Ibarra, penal y el nacimiento del festejo del Topo Gigio de Riquelme con las manos detrás de las orejas.'
  },

  // 1997 - El clásico del 3 a 3 en el Monumental
  {
    id: '186',
    number: 186,
    date: '1997-03-23',
    formattedDate: '23 de marzo de 1997',
    tournament: 'Torneo Clausura 1997',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Javier Castrilli',
    attendance: '60.000 espectadores',
    bocaScore: 3,
    riverScore: 3,
    winner: 'draw',
    decade: '1990-1999',
    bocaGoals: [
      { minute: 5, player: 'Gabriel Cedrés' },
      { minute: 17, player: 'Sergio Martínez' },
      { minute: 29, player: 'Sergio Martínez' }
    ],
    riverGoals: [
      { minute: 42, player: 'Sergio Berti' },
      { minute: 76, player: 'Facundo Villalba' },
      { minute: 87, player: 'Celso Ayala' }
    ],
    bocaCoach: 'Héctor Veira',
    riverCoach: 'Ramón Díaz',
    bocaLineup: [
      { number: 1, name: 'Sandro Guzmán', position: 'Arquero' },
      { number: 4, name: 'Nelson Vivas', position: 'Defensor' },
      { number: 2, name: 'Cristian Traverso', position: 'Defensor', redCardMinute: 88 },
      { number: 6, name: 'Néstor Fabbri', position: 'Defensor' },
      { number: 3, name: 'Rodolfo Arruabarrena', position: 'Defensor' },
      { number: 8, name: 'Julio César Toresani', position: 'Mediocampista' },
      { number: 5, name: 'Raúl Cascini', position: 'Mediocampista' },
      { number: 11, name: 'Gabriel Cedrés', position: 'Mediocampista', goals: [5] },
      { number: 10, name: 'Juan Román Riquelme', position: 'Mediocampista' },
      { number: 7, name: 'Diego Latorre', position: 'Delantero' },
      { number: 9, name: 'Sergio Martínez', position: 'Delantero', goals: [17, 29] }
    ],
    riverLineup: [
      { number: 1, name: 'Roberto Bonano', position: 'Arquero' },
      { number: 4, name: 'Hernán Díaz', position: 'Defensor' },
      { number: 2, name: 'Celso Ayala', position: 'Defensor', goals: [87] },
      { number: 6, name: 'Eduardo Berizzo', position: 'Defensor', redCardMinute: 45 },
      { number: 3, name: 'Juan Pablo Sorín', position: 'Defensor' },
      { number: 8, name: 'Roberto Monserrat', position: 'Mediocampista' },
      { number: 5, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 11, name: 'Sergio Berti', position: 'Mediocampista', goals: [42] },
      { number: 10, name: 'Marcelo Gallardo', position: 'Mediocampista' },
      { number: 9, name: 'Enzo Francescoli', position: 'Delantero' },
      { number: 7, name: 'Julio Cruz', position: 'Delantero' }
    ],
    timeline: [
      { minute: 5, type: 'goal', team: 'boca', player: 'Gabriel Cedrés' },
      { minute: 17, type: 'goal', team: 'boca', player: 'Sergio Martínez' },
      { minute: 29, type: 'goal', team: 'boca', player: 'Sergio Martínez', detail: 'Boca ganaba 3 a 0 en solo 29 minutos' },
      { minute: 42, type: 'goal', team: 'river', player: 'Sergio Berti' },
      { minute: 45, type: 'red', team: 'river', player: 'Eduardo Berizzo' },
      { minute: 76, type: 'goal', team: 'river', player: 'Facundo Villalba' },
      { minute: 87, type: 'goal', team: 'river', player: 'Celso Ayala', detail: 'Cabezazo agónico con River jugando con 10 futbolistas' }
    ],
    summary: 'Uno de los clásicos más emocionantes de la historia: Boca arrancó ganando 3-0 en 29 minutos y River, con un jugador menos, logró empatarlo 3-3 a tres minutos del final.'
  },

  // 1992 - El festejo del Manteca Martínez en el alambrado
  {
    id: '174',
    number: 174,
    date: '1992-10-11',
    formattedDate: '11 de octubre de 1992',
    tournament: 'Torneo Apertura 1992',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Juan Bava',
    attendance: '54.000 espectadores',
    bocaScore: 1,
    riverScore: 0,
    winner: 'boca',
    decade: '1990-1999',
    bocaGoals: [{ minute: 48, player: 'Sergio Martínez' }],
    riverGoals: [],
    bocaCoach: 'Óscar Washington Tabárez',
    riverCoach: 'Daniel Passarella',
    bocaLineup: [
      { number: 1, name: 'Carlos Fernando Navarro Montoya', position: 'Arquero' },
      { number: 4, name: 'Diego Soñora', position: 'Defensor' },
      { number: 2, name: 'Luis Medero', position: 'Defensor' },
      { number: 6, name: 'Alejandro Giuntini', position: 'Defensor' },
      { number: 3, name: 'Carlos Moya', position: 'Defensor' },
      { number: 8, name: 'José Luis Villarreal', position: 'Mediocampista' },
      { number: 5, name: 'Blas Giunta', position: 'Mediocampista' },
      { number: 11, name: 'Carlos Daniel Tapia', position: 'Mediocampista' },
      { number: 10, name: 'Alberto Márcico', position: 'Mediocampista' },
      { number: 7, name: 'Sergio Martínez', position: 'Delantero', goals: [48] },
      { number: 9, name: 'Roberto Cabañas', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Javier Zeoli', position: 'Arquero' },
      { number: 4, name: 'Hernán Díaz', position: 'Defensor' },
      { number: 2, name: 'Fernando Cáceres', position: 'Defensor' },
      { number: 6, name: 'Guillermo Rivarola', position: 'Defensor' },
      { number: 3, name: 'Carlos Enrique', position: 'Defensor' },
      { number: 8, name: 'Julio Toresani', position: 'Mediocampista' },
      { number: 5, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 11, name: 'Gustavo Zapata', position: 'Mediocampista' },
      { number: 10, name: 'Diego Cagna', position: 'Mediocampista' },
      { number: 7, name: 'Ramón Medina Bello', position: 'Delantero' },
      { number: 9, name: 'Walter Silvani', position: 'Delantero' }
    ],
    timeline: [
      { minute: 48, type: 'goal', team: 'boca', player: 'Sergio Martínez', detail: 'Gol del uruguayo y corrida para treparse al alambrado de la popular' },
      { minute: 72, type: 'penalty_miss', team: 'river', player: 'Hernán Díaz', detail: 'El Mono Navarro Montoya le atajó el penal arrojándose a su derecha' },
      { minute: 90, type: 'end', detail: 'Victoria de Boca en el camino al título que cortó 11 años de sequía' }
    ],
    summary: 'El triunfo clave rumbo al Apertura 1992 de la mano del Maestro Tabárez: gol y trepada al alambrado del Manteca Martínez y penal atajado por Navarro Montoya.'
  },

  // 1991 - Remontada 4-3 en Copa Libertadores
  {
    id: '168',
    number: 168,
    date: '1991-02-27',
    formattedDate: '27 de febrero de 1991',
    tournament: 'Copa Libertadores 1991 (Fase de Grupos)',
    competitionCategory: 'internacional',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Juan Carlos Loustau',
    attendance: '50.000 espectadores',
    bocaScore: 4,
    riverScore: 3,
    winner: 'boca',
    decade: '1990-1999',
    bocaGoals: [
      { minute: 28, player: 'Diego Latorre' },
      { minute: 56, player: 'Blas Giuntini' },
      { minute: 71, player: 'Víctor Marchesini' },
      { minute: 87, player: 'Diego Latorre' }
    ],
    riverGoals: [
      { minute: 9, player: 'Juan José Borrelli' },
      { minute: 11, player: 'Gustavo Zapata' },
      { minute: 48, player: 'Juan José Borrelli' }
    ],
    bocaCoach: 'Óscar Washington Tabárez',
    riverCoach: 'Daniel Passarella',
    bocaLineup: [
      { number: 1, name: 'Carlos Fernando Navarro Montoya', position: 'Arquero' },
      { number: 4, name: 'Diego Soñora', position: 'Defensor' },
      { number: 2, name: 'Juan Simón', position: 'Defensor' },
      { number: 6, name: 'Víctor Marchesini', position: 'Defensor', goals: [71] },
      { number: 3, name: 'Enrique Hrabina', position: 'Defensor' },
      { number: 8, name: 'Blas Giuntini', position: 'Mediocampista', goals: [56] },
      { number: 5, name: 'Walter Pico', position: 'Mediocampista' },
      { number: 10, name: 'Carlos Daniel Tapia', position: 'Mediocampista' },
      { number: 11, name: 'Diego Latorre', position: 'Delantero', goals: [28, 87] },
      { number: 7, name: 'Gabriel Batistuta', position: 'Delantero' },
      { number: 9, name: 'Alfredo Graciani', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'José Miguel', position: 'Arquero' },
      { number: 4, name: 'Fabián Basualdo', position: 'Defensor' },
      { number: 2, name: 'Jorge Higuaín', position: 'Defensor' },
      { number: 6, name: 'Carlos Enrique', position: 'Defensor' },
      { number: 3, name: 'Ramiro Castillo', position: 'Mediocampista' },
      { number: 8, name: 'Leonardo Astrada', position: 'Mediocampista' },
      { number: 5, name: 'Gustavo Zapata', position: 'Mediocampista', goals: [11] },
      { number: 10, name: 'Juan José Borrelli', position: 'Mediocampista', goals: [9, 48] },
      { number: 7, name: 'Ramón Medina Bello', position: 'Delantero' },
      { number: 9, name: 'Rubén Da Silva', position: 'Delantero' }
    ],
    timeline: [
      { minute: 9, type: 'goal', team: 'river', player: 'Juan José Borrelli' },
      { minute: 11, type: 'goal', team: 'river', player: 'Gustavo Zapata', detail: 'River ganaba 2 a 0 a los 11 minutos' },
      { minute: 28, type: 'goal', team: 'boca', player: 'Diego Latorre' },
      { minute: 48, type: 'goal', team: 'river', player: 'Juan José Borrelli', detail: '1-3 en favor de River al comenzar el complemento' },
      { minute: 56, type: 'goal', team: 'boca', player: 'Blas Giuntini' },
      { minute: 71, type: 'goal', team: 'boca', player: 'Víctor Marchesini', detail: 'Empate 3 a 3 de cabeza' },
      { minute: 87, type: 'goal', team: 'boca', player: 'Diego Latorre', detail: 'Tijera/volea antológica para sellar la hazaña 4-3' }
    ],
    summary: 'La remontada más vibrante de la Copa Libertadores: River ganaba 3 a 1 en La Bombonera y Boca lo dio vuelta 4 a 3 con una tijera heroica de Gambetita Latorre a tres minutos del final.'
  },

  // 1969 - Boca Campeón dando la vuelta en el Monumental
  {
    id: '118',
    number: 118,
    date: '1969-12-14',
    formattedDate: '14 de diciembre de 1969',
    tournament: 'Torneo Nacional 1969 (Fecha Final)',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Ángel Coerezza',
    attendance: '65.000 espectadores',
    bocaScore: 2,
    riverScore: 2,
    winner: 'draw',
    decade: '1960-1969',
    bocaGoals: [
      { minute: 12, player: 'Norberto Madurga' },
      { minute: 35, player: 'Norberto Madurga' }
    ],
    riverGoals: [
      { minute: 38, player: 'Oscar Más' },
      { minute: 67, player: 'Víctor Marchetti' }
    ],
    bocaCoach: 'Alfredo Di Stéfano',
    riverCoach: 'Ángel Labruna',
    bocaLineup: [
      { number: 1, name: 'Antonio Roma', position: 'Arquero' },
      { number: 4, name: 'Rubén Suñé', position: 'Defensor' },
      { number: 2, name: 'Julio Meléndez', position: 'Defensor' },
      { number: 6, name: 'Roberto Rogel', position: 'Defensor' },
      { number: 3, name: 'Silvio Marzolini', position: 'Defensor' },
      { number: 8, name: 'Norberto Madurga', position: 'Mediocampista', goals: [12, 35] },
      { number: 5, name: 'Orlando Medina', position: 'Mediocampista' },
      { number: 10, name: 'Ángel Clemente Rojas', position: 'Delantero' },
      { number: 7, name: 'Ramón Ponce', position: 'Delantero' },
      { number: 9, name: 'Nicolás Novello', position: 'Delantero' },
      { number: 11, name: 'Ignacio Peña', position: 'Delantero' }
    ],
    riverLineup: [
      { number: 1, name: 'Hugo Carballo', position: 'Arquero' },
      { number: 4, name: 'Roberto Morcillo', position: 'Defensor' },
      { number: 2, name: 'Miguel Ángel López', position: 'Defensor' },
      { number: 6, name: 'Juan Carlos Guzmán', position: 'Defensor' },
      { number: 3, name: 'Jorge Dominichi', position: 'Defensor' },
      { number: 8, name: 'Carlos Rodríguez', position: 'Mediocampista' },
      { number: 5, name: 'Reinaldo Merlo', position: 'Mediocampista' },
      { number: 10, name: 'Daniel Onega', position: 'Mediocampista' },
      { number: 7, name: 'Ricardo Montivero', position: 'Delantero' },
      { number: 9, name: 'Víctor Marchetti', position: 'Delantero', goals: [67] },
      { number: 11, name: 'Oscar Más', position: 'Delantero', goals: [38] }
    ],
    timeline: [
      { minute: 12, type: 'goal', team: 'boca', player: 'Norberto Madurga', detail: 'Definición por encima del arquero Carballo' },
      { minute: 35, type: 'goal', team: 'boca', player: 'Norberto Madurga', detail: 'Pase magistral de Rojitas y segundo tanto de Madurga' },
      { minute: 38, type: 'goal', team: 'river', player: 'Oscar Más', detail: 'Potente zurdazo para descontar' },
      { minute: 67, type: 'goal', team: 'river', player: 'Víctor Marchetti', detail: 'Empate de River' },
      { minute: 90, type: 'end', detail: 'Boca se consagra campeón del Nacional y da la vuelta olímpica con los aspersores encendidos' }
    ],
    summary: 'El Boca de Alfredo Di Stéfano se consagró Campeón Nacional en Núñez con dos goles del Muñeco Madurga y dio una histórica vuelta olímpica aplaudida por ambas hinchadas.'
  },

  // 1959 - Máxima goleada boquense 5-1
  {
    id: '91',
    number: 91,
    date: '1959-07-19',
    formattedDate: '19 de julio de 1959',
    tournament: 'Campeonato de Primera División 1959',
    competitionCategory: 'liga',
    stadium: 'Estadio Alberto J. Armando (La Bombonera), Buenos Aires',
    referee: 'Juan Brozzi',
    attendance: '55.000 espectadores',
    bocaScore: 5,
    riverScore: 1,
    winner: 'boca',
    decade: '1950-1959',
    bocaGoals: [
      { minute: 3, player: 'Osvaldo Nardiello' },
      { minute: 22, player: 'José Yudica' },
      { minute: 34, player: 'Juan José Rodríguez' },
      { minute: 58, player: 'José Yudica' },
      { minute: 75, player: 'Pedro Mansilla' }
    ],
    riverGoals: [{ minute: 61, player: 'Domingo Rodríguez' }],
    bocaCoach: 'José Manuel Moreno',
    riverCoach: 'José María Minella',
    bocaLineup: [
      { name: 'Osvaldo Ayala', position: 'Arquero' },
      { name: 'Juan Carlos Barberis', position: 'Defensor' },
      { name: 'Víctor Valussi', position: 'Defensor' },
      { name: 'Julio Musimessi', position: 'Defensor' },
      { name: 'Osvaldo Nardiello', position: 'Delantero', goals: [3] },
      { name: 'José Yudica', position: 'Delantero', goals: [22, 58] },
      { name: 'Juan José Rodríguez', position: 'Delantero', goals: [34] },
      { name: 'Pedro Mansilla', position: 'Delantero', goals: [75] }
    ],
    riverLineup: [
      { name: 'Amadeo Carrizo', position: 'Arquero' },
      { name: 'Alfredo Pérez', position: 'Defensor' },
      { name: 'Federico Vairo', position: 'Defensor' },
      { name: 'Ermindo Onega', position: 'Mediocampista' },
      { name: 'Ángel Labruna', position: 'Delantero' },
      { name: 'Domingo Rodríguez', position: 'Delantero', goals: [61] }
    ],
    timeline: [
      { minute: 3, type: 'goal', team: 'boca', player: 'Osvaldo Nardiello' },
      { minute: 22, type: 'goal', team: 'boca', player: 'José Yudica' },
      { minute: 34, type: 'goal', team: 'boca', player: 'Juan José Rodríguez' },
      { minute: 58, type: 'goal', team: 'boca', player: 'José Yudica' },
      { minute: 61, type: 'goal', team: 'river', player: 'Domingo Rodríguez' },
      { minute: 75, type: 'goal', team: 'boca', player: 'Pedro Mansilla', detail: 'Quinto tanto para la máxima goleada oficial de Boca ante River' }
    ],
    summary: 'La máxima goleada en la historia oficial de Boca Juniors frente a River Plate: festival de goles 5 a 1 en La Bombonera con doblete de José Yudica.'
  },

  // 1941 - Máxima exhibición de La Máquina 5-1
  {
    id: '48',
    number: 48,
    date: '1941-10-19',
    formattedDate: '19 de octubre de 1941',
    tournament: 'Campeonato de Primera División 1941',
    competitionCategory: 'liga',
    stadium: 'Estadio Monumental, Buenos Aires',
    referee: 'Eduardo Forte',
    attendance: '58.000 espectadores',
    bocaScore: 1,
    riverScore: 5,
    winner: 'river',
    decade: '1940-1949',
    bocaGoals: [{ minute: 89, player: 'Mario Boyé' }],
    riverGoals: [
      { minute: 11, player: 'José Manuel Moreno' },
      { minute: 43, player: 'Ángel Labruna' },
      { minute: 75, player: 'Adolfo Pedernera' },
      { minute: 81, player: 'Roberto D\'Alessandro' },
      { minute: 86, player: 'Roberto D\'Alessandro' }
    ],
    bocaCoach: 'Mario Fortunato',
    riverCoach: 'Renato Cesarini',
    bocaLineup: [
      { name: 'Juan Estrada', position: 'Arquero' },
      { name: 'Segundo Ibáñez', position: 'Defensor' },
      { name: 'Víctor Valussi', position: 'Defensor' },
      { name: 'Ernesto Lazzatti', position: 'Mediocampista' },
      { name: 'Mario Boyé', position: 'Delantero', goals: [89] }
    ],
    riverLineup: [
      { name: 'Sebastián Sirni', position: 'Arquero' },
      { name: 'Ricardo Vaghi', position: 'Defensor' },
      { name: 'Luis Antonio Yácono', position: 'Mediocampista' },
      { name: 'José Manuel Moreno', position: 'Delantero', goals: [11] },
      { name: 'Adolfo Pedernera', position: 'Delantero', goals: [75] },
      { name: 'Ángel Labruna', position: 'Delantero', goals: [43] },
      { name: 'Roberto D\'Alessandro', position: 'Delantero', goals: [81, 86] }
    ],
    timeline: [
      { minute: 11, type: 'goal', team: 'river', player: 'José Manuel Moreno' },
      { minute: 43, type: 'goal', team: 'river', player: 'Ángel Labruna' },
      { minute: 75, type: 'goal', team: 'river', player: 'Adolfo Pedernera' },
      { minute: 81, type: 'goal', team: 'river', player: 'Roberto D\'Alessandro' },
      { minute: 86, type: 'goal', team: 'river', player: 'Roberto D\'Alessandro' },
      { minute: 89, type: 'goal', team: 'boca', player: 'Mario Boyé' }
    ],
    summary: 'La obra maestra de La Máquina de River Plate: fútbol sinfonía y la mayor goleada histórica del Millonario frente a Boca por 5 a 1.'
  },

  // 1931 - Primer Superclásico del Profesionalismo con escándalo
  {
    id: '24',
    number: 24,
    date: '1931-09-20',
    formattedDate: '20 de septiembre de 1931',
    tournament: 'Campeonato de Primera División 1931',
    competitionCategory: 'liga',
    stadium: 'Estadio de Boca Juniors (Madera), Buenos Aires',
    referee: 'Enrique Escola',
    attendance: '45.000 espectadores',
    bocaScore: 1,
    riverScore: 1,
    winner: 'draw',
    decade: '1930-1939',
    bocaGoals: [{ minute: 28, player: 'Francisco Varallo', penalty: true }],
    riverGoals: [{ minute: 16, player: 'Carlos Peucelle' }],
    bocaCoach: 'Mario Fortunato',
    riverCoach: 'Víctor Caamaño',
    bocaLineup: [
      { name: 'Américo Tesoriere / Fossati', position: 'Arquero' },
      { name: 'Ludovico Bidoglio', position: 'Defensor' },
      { name: 'Francisco Varallo', position: 'Delantero', goals: [28] },
      { name: 'Roberto Cherro', position: 'Delantero' }
    ],
    riverLineup: [
      { name: 'Jorge Iribarren', position: 'Arquero' },
      { name: 'Carlos Peucelle', position: 'Delantero', goals: [16] },
      { name: 'Alberto Rival', position: 'Delantero', redCardMinute: 29 },
      { name: 'Camilo Bonelli', position: 'Delantero', redCardMinute: 29 },
      { name: 'Pedro Lago', position: 'Delantero', redCardMinute: 29 }
    ],
    timeline: [
      { minute: 16, type: 'goal', team: 'river', player: 'Carlos Peucelle', detail: 'Primer gol de la era profesional del Superclásico' },
      { minute: 28, type: 'goal', team: 'boca', player: 'Francisco Varallo', penalty: true, detail: 'Varallo pateó el penal, Iribarren dio rebote y Varallo empujó con falta según River' },
      { minute: 29, type: 'red', team: 'river', player: 'Rival, Bonelli y Lago', detail: 'Expulsados por protestas airadas al árbitro Escola' },
      { minute: 30, type: 'end', detail: 'River se retiró del campo de juego en señal de disconformidad' }
    ],
    summary: 'El primer Superclásico de la era profesional en 1931. Terminó en escándalo tras el empate de Varallo de penal y el retiro de River del campo de juego.'
  }
];
