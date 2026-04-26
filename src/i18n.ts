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
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
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
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Lo que más nos preguntan antes de reservar.',
      items: [
        { q: '¿Dónde está Casa Moli?', a: 'En el centro de Barbate, en la Costa de la Luz (Cádiz, Andalucía), a unos 5 minutos a pie de la playa.' },
        { q: '¿Para cuántas personas es?', a: 'Casa Moli tiene 2 dormitorios y capacidad para 4 personas. Es ideal para familias o dos parejas.' },
        { q: '¿A qué distancia está la playa?', a: 'A 5 minutos a pie de la playa de Barbate. Zahara de los Atunes, Los Caños de Meca y el Cabo de Trafalgar están a 10–20 min en coche.' },
        { q: '¿Puedo reservar sin comisiones?', a: 'Sí. Reserva directa por WhatsApp al +34 696 742 513 o por teléfono, sin comisiones de plataforma. También está en Airbnb.' },
        { q: '¿Tiene aire acondicionado?', a: 'Sí, Casa Moli incluye aire acondicionado, cocina equipada, y ducha interior y exterior en un patio andaluz privado.' },
        { q: '¿Es adecuada para familias?', a: 'Sí. Pensada para familias y grupos de hasta 4 personas, con espacios tranquilos y ubicación segura en el centro de Barbate.' },
      ],
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
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'The questions guests ask us most before booking.',
      items: [
        { q: 'Where is Casa Moli located?', a: 'In the center of Barbate, on the Costa de la Luz (Cádiz, Andalusia, Spain), about a 5-minute walk from the beach.' },
        { q: 'How many guests fit in the house?', a: 'Casa Moli has 2 bedrooms and sleeps up to 4 guests. Ideal for families or two couples.' },
        { q: 'How far is the beach?', a: '5 minutes on foot to Playa de Barbate. Zahara de los Atunes, Los Caños de Meca and Cabo de Trafalgar are 10–20 min by car.' },
        { q: 'Can I book without fees?', a: 'Yes. Book directly via WhatsApp at +34 696 742 513 or by phone — no platform commission. Also available on Airbnb.' },
        { q: 'Does it have air conditioning?', a: 'Yes. Casa Moli includes air conditioning, a fully equipped kitchen, and both indoor and outdoor showers in a private Andalusian patio.' },
        { q: 'Is it family-friendly?', a: 'Yes. Designed for families and groups of up to 4, with quiet spaces and a safe location in central Barbate.' },
      ],
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
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Les questions que les voyageurs nous posent le plus avant de réserver.',
      items: [
        { q: 'Où se trouve Casa Moli ?', a: 'Au centre de Barbate, sur la Costa de la Luz (Cádiz, Andalousie), à environ 5 minutes à pied de la plage.' },
        { q: 'Pour combien de personnes ?', a: 'Casa Moli dispose de 2 chambres et accueille jusqu’à 4 personnes. Idéal pour les familles ou deux couples.' },
        { q: 'À quelle distance de la plage ?', a: 'À 5 min à pied de la plage de Barbate. Zahara de los Atunes, Los Caños de Meca et le Cabo de Trafalgar sont à 10–20 min en voiture.' },
        { q: 'Peut-on réserver sans commission ?', a: 'Oui. Réservation directe par WhatsApp au +34 696 742 513 ou par téléphone, sans commission. Également sur Airbnb.' },
        { q: 'Y a-t-il la climatisation ?', a: 'Oui. Casa Moli dispose de la climatisation, d\'une cuisine équipée, et d\'une douche intérieure et extérieure dans un patio andalou privé.' },
        { q: 'Est-ce adapté aux familles ?', a: 'Oui. Conçue pour les familles et groupes jusqu’à 4 personnes, dans un environnement calme au centre de Barbate.' },
      ],
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
    faq: {
      title: 'Häufige Fragen',
      subtitle: 'Was Gäste uns vor der Buchung am häufigsten fragen.',
      items: [
        { q: 'Wo befindet sich Casa Moli?', a: 'Im Zentrum von Barbate, an der Costa de la Luz (Cádiz, Andalusien), etwa 5 Gehminuten vom Strand entfernt.' },
        { q: 'Für wie viele Personen?', a: 'Casa Moli hat 2 Schlafzimmer und Platz für bis zu 4 Personen. Ideal für Familien oder zwei Paare.' },
        { q: 'Wie weit ist der Strand?', a: '5 Minuten zu Fuß zum Strand von Barbate. Zahara de los Atunes, Los Caños de Meca und Cabo de Trafalgar liegen 10–20 Min. mit dem Auto entfernt.' },
        { q: 'Kann man ohne Gebühren buchen?', a: 'Ja. Direktbuchung per WhatsApp unter +34 696 742 513 oder telefonisch — ohne Plattformprovision. Auch auf Airbnb verfügbar.' },
        { q: 'Gibt es eine Klimaanlage?', a: 'Ja. Casa Moli verfügt über Klimaanlage, eine voll ausgestattete Küche sowie Innen- und Außendusche in einem privaten andalusischen Innenhof.' },
        { q: 'Ist es familienfreundlich?', a: 'Ja. Gestaltet für Familien und Gruppen bis 4 Personen, mit ruhigen Räumen und sicherer Lage im Zentrum von Barbate.' },
      ],
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
