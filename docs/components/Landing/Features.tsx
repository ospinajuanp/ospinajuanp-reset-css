'use client'

import { Zap, Shield, Palette, Code2, Layers, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Type-Safe',
    description: 'Full TypeScript support with complete type definitions for every function and theme.',
  },
  {
    icon: Zap,
    title: 'Lightweight',
    description: 'Minimal footprint with tree-shaking support. Load only what you need.',
  },
  {
    icon: Palette,
    title: '6 Built-in Themes',
    description: 'Simple, Dark, Pastel, Dark Blue Pastel, Light Blue Pastel, and Retro.',
  },
  {
    icon: Code2,
    title: 'React Hooks',
    description: 'useResetTheme and ThemeProvider for seamless integration with React apps.',
  },
  {
    icon: Layers,
    title: 'Modular SCSS',
    description: 'Full SCSS source included for customization at the module level.',
  },
  {
    icon: Lightbulb,
    title: 'Dynamic Switching',
    description: 'Change themes at runtime with the JavaScript API for user preferences.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why ospinajuanp-reset-css?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for modern web development with a focus on developer experience and performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}