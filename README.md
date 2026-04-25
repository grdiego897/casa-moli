# Casa Moli · Barbate, Cádiz

Web de presentación y reserva para **Casa Moli**, alojamiento vacacional en Barbate (Costa de la Luz, Cádiz).

## Stack

- **React 18** + **TypeScript** — UI y lógica
- **Vite** — bundler y servidor de desarrollo
- **Tailwind CSS** — estilos
- **Motion (Framer Motion)** — animaciones
- **Lucide React** — iconografía

## Funcionalidades

- Hero a pantalla completa con nav flotante sticky
- Multiidioma: 🇪🇸 Español · 🇬🇧 English · 🇫🇷 Français · 🇩🇪 Deutsch
- Widget de reserva con expansión animada (llamada / WhatsApp / Airbnb)
- Galería de la casa con tarjetas animadas
- Widgets de contexto (mesa para cuatro, playa a 5 min)
- Sección de ubicación con mapa embebido
- Footer con info de contacto
- Menú hamburguesa responsive con banderas de idioma
- SEO básico en `index.html`

## Arrancar en local

**Requisito:** Node.js 18+

```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`.

## Estructura

```
src/
├── App.tsx      # Componente raíz — toda la UI
├── i18n.ts      # Traducciones y contexto de idioma
├── index.css    # Reset y variables globales
└── main.tsx     # Entry point

public/
└── img/         # Imágenes de la casa y assets
```

## Reservas

- **Directo (sin comisiones):** contacto por teléfono o WhatsApp → +34 696 742 513
- **Airbnb:** [Ver anuncio](https://www.airbnb.com/rooms/990479684820183934)
