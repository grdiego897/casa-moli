import { createContext, useContext } from 'react';

export type Lang = 'es' | 'en' | 'fr' | 'de';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

type Dict = {
  nav: { concept: string; gallery: string; location: string; reserve: string; menuOpen: string; menuClose: string };
  hero: { reserve: string; reserveLong: string; airbnb: string; airbnbLong: string; back: string; phone: string; whatsapp: string };
  concept: {
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    intro: string;
    breezeTitle: string;
    breezeDesc: string;
    lightTitle: string;
    lightDesc: string;
    quote: string;
  };
  gallery: {
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    livingRoom: string;
    patioTable: string;
    bedroom: string;
    bathroom: string;
    secondBedroom: string;
    thePatio: string;
    outdoorShower: string;
    outdoorLife: string;
  };
  widget: {
    mesaEyebrow: string;
    mesaTitle1: string;
    mesaTitle2: string;
    playaEyebrow: string;
    playaTitle1: string;
    playaTitle2: string;
    playaCity: string;
    playaTime: string;
  };
  footer: {
    title: string;
    description: string;
    locationTitle: string;
    locationSubtitle: string;
    rights: string;
  };
};

export const TRANSLATIONS: Record<Lang, Dict> = {
  es: {
    nav: { concept: 'Concepto', gallery: 'La Casa', location: 'Barbate', reserve: 'Reservar', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú' },
    hero: { reserve: 'Reservar', reserveLong: 'Reservar (Sin comisiones)', airbnb: 'Airbnb', airbnbLong: 'Ver en Airbnb', back: 'Volver', phone: 'Llamada', whatsapp: 'WhatsApp' },
    concept: {
      headlinePart1: 'El encanto',
      headlinePart2: 'tradicional,',
      headlinePart3: 'reimaginado.',
      intro: 'Casa Moli no es solo un alojamiento, es una pausa en el tiempo. Situada en el corazón de Barbate, hemos restaurado una vivienda costera sin perder el alma andaluza.',
      breezeTitle: 'Brisa Marina',
      breezeDesc: 'Estructura abierta para que el Atlántico llene la casa.',
      lightTitle: 'Luz Natural',
      lightDesc: 'Patios andaluces bañados por el infinito sol gaditano.',
      quote: '"Un homenaje a la vida lenta junto al mar."',
    },
    gallery: {
      title: 'La Casa',
      subtitleLine1: 'Cada rincón ha sido diseñado para transmitir paz.',
      subtitleLine2: 'Desde el salón hasta el patio.',
      livingRoom: 'Salón Principal',
      patioTable: 'Mesa en el patio',
      bedroom: 'Habitación con cama doble',
      bathroom: 'Baño',
      secondBedroom: 'Segunda Habitación',
      thePatio: 'El Patio',
      outdoorShower: 'Ducha Exterior',
      outdoorLife: 'Vida al Aire Libre',
    },
    widget: {
      mesaEyebrow: 'Ideal para familias',
      mesaTitle1: 'Una casa',
      mesaTitle2: 'para cuatro',
      playaEyebrow: 'Costa de la Luz',
      playaTitle1: 'A 5 min',
      playaTitle2: 'de la playa',
      playaCity: 'Barbate',
      playaTime: '5 min',
    },
    footer: {
      title: 'Barbate.',
      description: 'Descubre un paraíso escondido en la Costa de la Luz. Playas kilométricas, el aroma a pinos del Parque Natural de la Breña y una gastronomía mundialmente conocida que gira en torno al atún rojo salvaje.',
      locationTitle: 'Ubicación Perfecta',
      locationSubtitle: 'En el corazón de Barbate.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: { concept: 'Concept', gallery: 'The House', location: 'Barbate', reserve: 'Book', menuOpen: 'Open menu', menuClose: 'Close menu' },
    hero: { reserve: 'Book', reserveLong: 'Book (No fees)', airbnb: 'Airbnb', airbnbLong: 'View on Airbnb', back: 'Back', phone: 'Call', whatsapp: 'WhatsApp' },
    concept: {
      headlinePart1: 'Traditional',
      headlinePart2: 'charm,',
      headlinePart3: 'reimagined.',
      intro: "Casa Moli is more than a stay — it's a pause in time. In the heart of Barbate, we've restored a coastal home without losing its Andalusian soul.",
      breezeTitle: 'Sea Breeze',
      breezeDesc: 'An open structure that lets the Atlantic flow through the house.',
      lightTitle: 'Natural Light',
      lightDesc: 'Andalusian patios bathed in endless Cadiz sun.',
      quote: '"A tribute to slow living by the sea."',
    },
    gallery: {
      title: 'The House',
      subtitleLine1: 'Every corner is designed to bring peace.',
      subtitleLine2: 'From the living room to the patio.',
      livingRoom: 'Main Living Room',
      patioTable: 'Patio Table',
      bedroom: 'Double Bed Bedroom',
      bathroom: 'Bathroom',
      secondBedroom: 'Second Bedroom',
      thePatio: 'The Patio',
      outdoorShower: 'Outdoor Shower',
      outdoorLife: 'Outdoor Living',
    },
    widget: {
      mesaEyebrow: 'Perfect for families',
      mesaTitle1: 'A home',
      mesaTitle2: 'for four',
      playaEyebrow: 'Costa de la Luz',
      playaTitle1: '5 min',
      playaTitle2: 'to the beach',
      playaCity: 'Barbate',
      playaTime: '5 min',
    },
    footer: {
      title: 'Barbate.',
      description: 'Discover a hidden paradise on the Costa de la Luz. Endless beaches, the scent of pines from the Breña Natural Park, and a world-renowned cuisine built around wild bluefin tuna.',
      locationTitle: 'Perfect Location',
      locationSubtitle: 'In the heart of Barbate.',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    nav: { concept: 'Concept', gallery: 'La Maison', location: 'Barbate', reserve: 'Réserver', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu' },
    hero: { reserve: 'Réserver', reserveLong: 'Réserver (Sans commission)', airbnb: 'Airbnb', airbnbLong: 'Voir sur Airbnb', back: 'Retour', phone: 'Appeler', whatsapp: 'WhatsApp' },
    concept: {
      headlinePart1: "Le charme",
      headlinePart2: 'traditionnel,',
      headlinePart3: 'réinventé.',
      intro: "Casa Moli n'est pas seulement un hébergement, c'est une pause dans le temps. Au cœur de Barbate, nous avons restauré une maison côtière sans perdre son âme andalouse.",
      breezeTitle: 'Brise Marine',
      breezeDesc: "Une structure ouverte pour que l'Atlantique inonde la maison.",
      lightTitle: 'Lumière Naturelle',
      lightDesc: "Patios andalous baignés par le soleil infini de Cadix.",
      quote: '« Un hommage à la vie lente au bord de la mer. »',
    },
    gallery: {
      title: 'La Maison',
      subtitleLine1: 'Chaque recoin a été pensé pour transmettre la paix.',
      subtitleLine2: 'Du salon au patio.',
      livingRoom: 'Salon Principal',
      patioTable: 'Table du Patio',
      bedroom: 'Chambre avec lit double',
      bathroom: 'Salle de bain',
      secondBedroom: 'Deuxième Chambre',
      thePatio: 'Le Patio',
      outdoorShower: 'Douche Extérieure',
      outdoorLife: 'Vie en Plein Air',
    },
    widget: {
      mesaEyebrow: 'Idéal pour les familles',
      mesaTitle1: 'Une maison',
      mesaTitle2: 'pour quatre',
      playaEyebrow: 'Costa de la Luz',
      playaTitle1: 'À 5 min',
      playaTitle2: 'de la plage',
      playaCity: 'Barbate',
      playaTime: '5 min',
    },
    footer: {
      title: 'Barbate.',
      description: "Découvrez un paradis caché sur la Costa de la Luz. Des plages kilométriques, l'arôme des pins du Parc Naturel de la Breña et une gastronomie mondialement connue autour du thon rouge sauvage.",
      locationTitle: 'Emplacement Parfait',
      locationSubtitle: 'Au cœur de Barbate.',
      rights: 'Tous droits réservés.',
    },
  },
  de: {
    nav: { concept: 'Konzept', gallery: 'Das Haus', location: 'Barbate', reserve: 'Buchen', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen' },
    hero: { reserve: 'Buchen', reserveLong: 'Buchen (Provisionsfrei)', airbnb: 'Airbnb', airbnbLong: 'Auf Airbnb ansehen', back: 'Zurück', phone: 'Anrufen', whatsapp: 'WhatsApp' },
    concept: {
      headlinePart1: 'Traditioneller',
      headlinePart2: 'Charme,',
      headlinePart3: 'neu gedacht.',
      intro: 'Casa Moli ist mehr als eine Unterkunft — es ist eine Pause in der Zeit. Im Herzen von Barbate haben wir ein Küstenhaus restauriert, ohne seine andalusische Seele zu verlieren.',
      breezeTitle: 'Meeresbrise',
      breezeDesc: 'Eine offene Struktur, durch die der Atlantik das Haus durchströmt.',
      lightTitle: 'Natürliches Licht',
      lightDesc: 'Andalusische Innenhöfe, gebadet im endlosen Sonnenlicht von Cádiz.',
      quote: '„Eine Hommage an das langsame Leben am Meer."',
    },
    gallery: {
      title: 'Das Haus',
      subtitleLine1: 'Jede Ecke wurde gestaltet, um Ruhe zu vermitteln.',
      subtitleLine2: 'Vom Wohnzimmer bis zum Innenhof.',
      livingRoom: 'Hauptwohnzimmer',
      patioTable: 'Tisch im Innenhof',
      bedroom: 'Zimmer mit Doppelbett',
      bathroom: 'Badezimmer',
      secondBedroom: 'Zweites Zimmer',
      thePatio: 'Der Innenhof',
      outdoorShower: 'Außendusche',
      outdoorLife: 'Leben im Freien',
    },
    widget: {
      mesaEyebrow: 'Ideal für Familien',
      mesaTitle1: 'Ein Haus',
      mesaTitle2: 'für vier',
      playaEyebrow: 'Costa de la Luz',
      playaTitle1: '5 Min.',
      playaTitle2: 'zum Strand',
      playaCity: 'Barbate',
      playaTime: '5 Min.',
    },
    footer: {
      title: 'Barbate.',
      description: 'Entdecken Sie ein verstecktes Paradies an der Costa de la Luz. Kilometerlange Strände, der Duft der Pinien des Naturparks Breña und eine weltbekannte Küche rund um den wilden Roten Thun.',
      locationTitle: 'Perfekte Lage',
      locationSubtitle: 'Im Herzen von Barbate.',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
};

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'es',
  setLang: () => {},
});

export function useT() {
  const { lang } = useContext(LangContext);
  return TRANSLATIONS[lang];
}

export function useLang() {
  return useContext(LangContext);
}
