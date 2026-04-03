export interface Project {
  title: string
  description: string
  image: string
  url: string
  badge?: string
}

export const projects: Project[] = [
  {
    title: 'Tillie',
    description:
      'Einfache, mobile Kasse für kleine Events. Foto vom handgeschriebenen Preiszettel machen und per KI Produkte anlegen. Ideal für Weihnachtsmärkte, Schulfeste, Vereinsveranstaltungen und mehr.',
    image: '/img/projects/tillie.jpg',
    url: 'https://tillie.it',
  },
  {
    title: '‘s Blättle Abodienst',
    description:
      'Automatischer Newsletter-Versand mit KI-Zusammenfassung. Erkennt neue Ausgaben des Metzinger Blättle, erstellt eine Zusammenfassung und liefert sie per E-Mail mit personalisierter Zusammenfassung an Abonnenten.',
    image: '/img/projects/sblaettle.jpg',
    url: 'https://sblättle.de',
  },
]
