export type DocSection = {
  title: string
  href: string
  items: DocItem[]
}

export type DocItem = {
  title: string
  href: string
}

export const docsConfig: DocSection[] = [
  {
    title: 'Getting Started',
    href: '/docs',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'API Reference',
    href: '/docs/api',
    items: [
      { title: 'JavaScript API', href: '/docs/api/javascript' },
      { title: 'React API', href: '/docs/api/react' },
      { title: 'Themes', href: '/docs/api/themes' },
    ],
  },
  {
    title: 'Guides',
    href: '/docs/guides',
    items: [
      { title: 'Using with React', href: '/docs/guides/react' },
      { title: 'Dynamic Theming', href: '/docs/guides/dynamic-theming' },
      { title: 'Customization', href: '/docs/guides/customization' },
    ],
  },
]

export type ThemeName = 'simple' | 'dark' | 'pastel' | 'darkBluePastel' | 'lightBluePastel' | 'retro'

export const themes: ThemeName[] = ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro']

export const themeLabels: Record<ThemeName, string> = {
  simple: 'Simple (Default)',
  dark: 'Dark Mode',
  pastel: 'Pastel',
  darkBluePastel: 'Dark Blue Pastel',
  lightBluePastel: 'Light Blue Pastel',
  retro: 'Retro',
}