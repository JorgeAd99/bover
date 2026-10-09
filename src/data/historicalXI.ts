import { PitchNode } from '../types';

export interface SquadSelection {
  id: string;
  title: string;
  formation: string;
  players: PitchNode[];
}

export const SQUAD_SELECTIONS: Record<string, SquadSelection> = {
  bover: {
    id: 'bover',
    title: 'Selección Bover (Histórica Combinada)',
    formation: '4-3-1-2',
    players: [
      // Arquero
      {
        id: 'fillol',
        name: 'Fillol',
        number: 1,
        posCode: 'ARQ',
        role: 'Arquero',
        team: 'river',
        x: 50,
        y: 88,
        superclasicosCount: 28,
        goalsCount: 0,
        keyFact: 'Ubaldo Matildo Fillol: considerado uno de los mejores arqueros de la historia mundial, imbatible en decenas de clásicos.'
      },
      // Defensores
      {
        id: 'ibarra',
        name: 'Ibarra',
        number: 4,
        posCode: 'LD',
        role: 'Lateral Derecho',
        team: 'boca',
        x: 18,
        y: 68,
        superclasicosCount: 22,
        goalsCount: 2,
        keyFact: 'Hugo Ibarra: autor de dos golazos de zurda históricos ante River (2001 y 2003).'
      },
      {
        id: 'perfumo',
        name: 'Perfumo',
        number: 2,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'river',
        x: 40,
        y: 70,
        superclasicosCount: 16,
        goalsCount: 0,
        keyFact: 'Roberto Perfumo ("El Mariscal"): jerarquía defensiva total e imponente presencia en los años 70.'
      },
      {
        id: 'mouzo',
        name: 'Mouzo',
        number: 6,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'boca',
        x: 60,
        y: 70,
        superclasicosCount: 35,
        goalsCount: 3,
        keyFact: 'Roberto Mouzo: segundo jugador con más presencias en Boca (35 partidos clásicos), símbolo de entrega.'
      },
      {
        id: 'marzolini',
        name: 'Marzolini',
        number: 3,
        posCode: 'LI',
        role: 'Lateral Izquierdo',
        team: 'boca',
        x: 82,
        y: 68,
        superclasicosCount: 37,
        goalsCount: 1,
        keyFact: 'Silvio Marzolini: el número 3 por excelencia del fútbol argentino, 37 superclásicos disputados.'
      },
      // Mediocampistas
      {
        id: 'merlo',
        name: 'Merlo',
        number: 5,
        posCode: 'MCD',
        role: 'Mediocampista Central',
        team: 'river',
        x: 50,
        y: 50,
        superclasicosCount: 42,
        goalsCount: 0,
        keyFact: 'Reinaldo Merlo ("Mostaza"): récord absoluto en la historia de los clásicos con 42 apariciones oficiales.'
      },
      {
        id: 'rattin',
        name: 'Rattín',
        number: 8,
        posCode: 'MC',
        role: 'Volante Derecho',
        team: 'boca',
        x: 25,
        y: 44,
        superclasicosCount: 30,
        goalsCount: 2,
        keyFact: 'Antonio Ubaldo Rattín: el caudillo de La Bombonera, pura estirpe boquense durante dos décadas.'
      },
      {
        id: 'alonso',
        name: 'Alonso',
        number: 10,
        posCode: 'MC',
        role: 'Volante Ofensivo',
        team: 'river',
        x: 75,
        y: 44,
        superclasicosCount: 26,
        goalsCount: 6,
        keyFact: 'Norberto Alonso ("El Beto"): protagonista del clásico de la pelota naranja en 1986 y goles antológicos.'
      },
      // Enganche
      {
        id: 'riquelme',
        name: 'Riquelme',
        number: 10,
        posCode: 'MCO',
        role: 'Enganche Creativo',
        team: 'boca',
        x: 50,
        y: 30,
        superclasicosCount: 20,
        goalsCount: 4,
        keyFact: 'Juan Román Riquelme: el caño a Yepes en el 2000, el Topo Gigio y magistrales tiros libres que definieron clásicos.'
      },
      // Delanteros
      {
        id: 'palermo',
        name: 'Palermo',
        number: 9,
        posCode: 'DC',
        role: 'Centrodelantero',
        team: 'boca',
        x: 35,
        y: 14,
        superclasicosCount: 20,
        goalsCount: 9,
        keyFact: 'Martín Palermo ("El Titán"): 9 goles a River, el cabezazo bajo la lluvia en el 97 y el gol en muletas en 2000.'
      },
      {
        id: 'labruna',
        name: 'Labruna',
        number: 11,
        posCode: 'DEL',
        role: 'Delantero',
        team: 'river',
        x: 65,
        y: 14,
        superclasicosCount: 35,
        goalsCount: 16,
        keyFact: 'Ángel Labruna: máximo artillero histórico de los Superclásicos con 16 goles oficiales para River.'
      }
    ]
  },
  boca: {
    id: 'boca',
    title: 'Selección Xeneize (Boca Juniors)',
    formation: '4-3-1-2',
    players: [
      {
        id: 'roma',
        name: 'Roma',
        number: 1,
        posCode: 'ARQ',
        role: 'Arquero',
        team: 'boca',
        x: 50,
        y: 88,
        superclasicosCount: 23,
        goalsCount: 0,
        keyFact: 'Antonio Roma ("Tarzán"): atajó el mítico penal a Delem en 1962 que definió el título en La Bombonera.'
      },
      {
        id: 'ibarra-b',
        name: 'Ibarra',
        number: 4,
        posCode: 'LD',
        role: 'Lateral Derecho',
        team: 'boca',
        x: 18,
        y: 68,
        superclasicosCount: 22,
        goalsCount: 2,
        keyFact: 'Hugo Benjamín Ibarra: ganador de 4 Libertadores e imparable por la banda derecha.'
      },
      {
        id: 'schiavi',
        name: 'Schiavi',
        number: 2,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'boca',
        x: 40,
        y: 70,
        superclasicosCount: 16,
        goalsCount: 1,
        keyFact: 'Rolando Schiavi ("El Flaco"): muralla en las semifinales de Libertadores 2004.'
      },
      {
        id: 'mouzo-b',
        name: 'Mouzo',
        number: 6,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'boca',
        x: 60,
        y: 70,
        superclasicosCount: 35,
        goalsCount: 3,
        keyFact: 'Roberto Mouzo: el zaguero con más partidos jugados con la camiseta azul y oro.'
      },
      {
        id: 'marzolini-b',
        name: 'Marzolini',
        number: 3,
        posCode: 'LI',
        role: 'Lateral Izquierdo',
        team: 'boca',
        x: 82,
        y: 68,
        superclasicosCount: 37,
        goalsCount: 1,
        keyFact: 'Silvio Marzolini: récord histórico de superclásicos jugados para Boca (37).'
      },
      {
        id: 'serna',
        name: 'Serna',
        number: 5,
        posCode: 'MCD',
        role: 'Volante Central',
        team: 'boca',
        x: 50,
        y: 50,
        superclasicosCount: 12,
        goalsCount: 0,
        keyFact: 'Mauricio Serna ("Chicho"): el dueño de la mitad de cancha en la era dorada de Carlos Bianchi.'
      },
      {
        id: 'battaglia',
        name: 'Battaglia',
        number: 8,
        posCode: 'MC',
        role: 'Mediocampista',
        team: 'boca',
        x: 25,
        y: 44,
        superclasicosCount: 21,
        goalsCount: 1,
        keyFact: 'Sebastián Battaglia: el jugador más ganador en la historia de Boca Juniors (17 títulos).'
      },
      {
        id: 'sune',
        name: 'Suñé',
        number: 7,
        posCode: 'MC',
        role: 'Mediocampista',
        team: 'boca',
        x: 75,
        y: 44,
        superclasicosCount: 25,
        goalsCount: 1,
        keyFact: 'Rubén Suñé ("El Chapa"): autor del inolvidable "gol fantasma" en la final del Nacional 1976.'
      },
      {
        id: 'riquelme-b',
        name: 'Riquelme',
        number: 10,
        posCode: 'MCO',
        role: 'Enganche',
        team: 'boca',
        x: 50,
        y: 30,
        superclasicosCount: 20,
        goalsCount: 4,
        keyFact: 'Juan Román Riquelme: el ídolo máximo de Boca, rey de la pisada y el pase filtrado.'
      },
      {
        id: 'valentim',
        name: 'Valentim',
        number: 11,
        posCode: 'DEL',
        role: 'Delantero',
        team: 'boca',
        x: 35,
        y: 14,
        superclasicosCount: 7,
        goalsCount: 10,
        keyFact: 'Paulo Valentim: impresionante efectividad de 1.42 goles por partido ante River Plate.'
      },
      {
        id: 'palermo-b',
        name: 'Palermo',
        number: 9,
        posCode: 'DC',
        role: 'Centrodelantero',
        team: 'boca',
        x: 65,
        y: 14,
        superclasicosCount: 20,
        goalsCount: 9,
        keyFact: 'Martín Palermo: máximo goleador histórico del club y 9 gritos en superclásicos.'
      }
    ]
  },
  river: {
    id: 'river',
    title: 'Selección Millonaria (River Plate)',
    formation: '4-3-1-2',
    players: [
      {
        id: 'carrizo',
        name: 'Carrizo',
        number: 1,
        posCode: 'ARQ',
        role: 'Arquero',
        team: 'river',
        x: 50,
        y: 88,
        superclasicosCount: 28,
        goalsCount: 0,
        keyFact: 'Amadeo Carrizo: pionero mundial en salir jugando del área grande y leyenda de Núñez.'
      },
      {
        id: 'montiel',
        name: 'Montiel',
        number: 4,
        posCode: 'LD',
        role: 'Lateral Derecho',
        team: 'river',
        x: 18,
        y: 68,
        superclasicosCount: 10,
        goalsCount: 1,
        keyFact: 'Gonzalo Montiel ("Cachete"): titular en la final de Madrid 2018 y personalidad indiscutible.'
      },
      {
        id: 'maidana',
        name: 'Maidana',
        number: 2,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'river',
        x: 40,
        y: 70,
        superclasicosCount: 20,
        goalsCount: 1,
        keyFact: 'Jonatan Maidana: bicampeón de América y autor de un gol de cabeza a Boca en el Apertura 2010.'
      },
      {
        id: 'passarella',
        name: 'Passarella',
        number: 6,
        posCode: 'DFC',
        role: 'Defensor Central',
        team: 'river',
        x: 60,
        y: 70,
        superclasicosCount: 24,
        goalsCount: 3,
        keyFact: 'Daniel Alberto Passarella ("El Gran Capitán"): defensor con liderazgo imperial y letal pegada.'
      },
      {
        id: 'sorin',
        name: 'Sorín',
        number: 3,
        posCode: 'LI',
        role: 'Lateral Izquierdo',
        team: 'river',
        x: 82,
        y: 68,
        superclasicosCount: 14,
        goalsCount: 1,
        keyFact: 'Juan Pablo Sorín: corazón y proyección ofensiva constante por la banda izquierda riverplatense.'
      },
      {
        id: 'merlo-r',
        name: 'Merlo',
        number: 5,
        posCode: 'MCD',
        role: 'Volante Central',
        team: 'river',
        x: 50,
        y: 50,
        superclasicosCount: 42,
        goalsCount: 0,
        keyFact: 'Reinaldo Merlo ("Mostaza"): 42 superclásicos disputados, hombre récord del fútbol argentino.'
      },
      {
        id: 'ponzio',
        name: 'Ponzio',
        number: 23,
        posCode: 'MC',
        role: 'Mediocampista',
        team: 'river',
        x: 25,
        y: 44,
        superclasicosCount: 18,
        goalsCount: 2,
        keyFact: 'Leonardo Ponzio ("El León"): capitán y símbolo de las batallas coperas en la era Gallardo.'
      },
      {
        id: 'alonso-r',
        name: 'Alonso',
        number: 10,
        posCode: 'MC',
        role: 'Volante Ofensivo',
        team: 'river',
        x: 75,
        y: 44,
        superclasicosCount: 26,
        goalsCount: 6,
        keyFact: 'Norberto Alonso ("El Beto"): genio futbolístico y autor del mítico gol con la pelota naranja.'
      },
      {
        id: 'francescoli',
        name: 'Francescoli',
        number: 9,
        posCode: 'MCO',
        role: 'Enganche / Mediapunta',
        team: 'river',
        x: 50,
        y: 30,
        superclasicosCount: 16,
        goalsCount: 5,
        keyFact: 'Enzo Francescoli ("El Príncipe"): elegancia pura, goles inolvidables y líder campeón de América.'
      },
      {
        id: 'mas',
        name: 'Más',
        number: 11,
        posCode: 'DEL',
        role: 'Extremo Izquierdo',
        team: 'river',
        x: 35,
        y: 14,
        superclasicosCount: 30,
        goalsCount: 12,
        keyFact: 'Oscar Más ("Pinino"): 12 goles en el superclásico con su letal zurda.'
      },
      {
        id: 'labruna-r',
        name: 'Labruna',
        number: 10,
        posCode: 'DC',
        role: 'Centrodelantero',
        team: 'river',
        x: 65,
        y: 14,
        superclasicosCount: 35,
        goalsCount: 16,
        keyFact: 'Ángel Amadeo Labruna: el máximo goleador histórico del Superclásico con 16 tantos.'
      }
    ]
  }
};
