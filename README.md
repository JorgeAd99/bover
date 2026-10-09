# 🏆 Historia de Bover

> Plataforma web estadística e interactiva del **Superclásico del fútbol argentino** entre **Boca Juniors** y **River Plate**, diseñada con la distribución, estética y arquitectura de información inspirada en [grenal.org](https://grenal.org/).

---

## ⚽ Características Principales

- **Distribución idéntica a grenal.org**:
  - **Cabecera principal**: Logo Bover con paleta oficial de Boca (Azul y Oro) y River (Rojo y Blanco), buscador global interactivo (`⌘K` / `Ctrl+K`), y menú de navegación.
  - **Banner con botón Compartir**: Notificación de copia al portapapeles y resumen del clásico.
  - **Sección «Números»**:
    - Marcadores de victorias de Boca (94), victorias de River (88) y empates (84).
    - Gráfico Donut SVG interactivo con los 266 partidos oficiales y porcentajes.
    - Filtros por competencia (Oficial Completo, Ligas Nacionales, Copas Nacionales, Copas Internacionales).
    - Barra comparativa de goles (342 de Boca vs. 321 de River).
  - **Sección «Últimos Superclásicos»**: Tarjetas de resultados con escudos vectoriales, marcadores destacados y goleadores.
  - **Sección «Selección Bover» (Cancha táctica)**:
    - Campo de fútbol interactivo con marcaciones reglamentarias y césped a rayas.
    - Tres selecciones intercambiables: **Selección Bover (Ideal combinada)**, **Selección Xeneize (Boca)** y **Selección Millonaria (River)**.
    - 11 posiciones con dorsales y fichas desplegables con estadísticas individuales.
  - **Sección «Índice Bover»**:
    - Ranking de jugadores (Ángel Labruna, Reinaldo Merlo, Oscar Más, Paulo Valentim, Martín Palermo, Silvio Marzolini, etc.).
    - Ranking de directores técnicos (Marcelo Gallardo, Carlos Bianchi, Mario Fortunato, Ángel Labruna, José María Minella, Toto Lorenzo, Ramón Díaz).
  - **Página de Partidos por Década**:
    - Filtro por décadas desde 1913 hasta 2026.
    - Filtros por torneo y resultado.
  - **Ficha Detallada de Partido (`MatchDetailModal`)**:
    - Marcador, estadio, árbitro y asistencia.
    - Alineaciones oficiales con dorsales, titulares, suplentes y técnicos.
    - Línea de tiempo minuto a minuto («El Juego») con íconos de goles, tarjetas amarillas/rojas, sustituciones y VAR.
    - Crónica histórica del encuentro.
  - **Vistas Especiales**: Jugadores, Técnicos, Historial Avanzado y Sobre el Proyecto.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite** para desarrollo ultra rápido y compilación optimizada
- **Tailwind CSS v4**
- **Lucide Icons** para iconografía deportiva
- **Fuentes tipográficas**: Google Fonts (*Montserrat*, *Noto Sans*, *JetBrains Mono*) igual que `grenal.org`

---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# 1. Instalar dependencias (si no se han instalado)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar compilación de producción
npm run preview
```

El servidor local se encuentra disponible en `http://127.0.0.1:5173/`.
