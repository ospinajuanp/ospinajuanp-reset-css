'use client'

import { Check } from 'lucide-react'

const steps = [
  {
    title: 'Install the package',
    code: 'npm install ospinajuanp-reset-css',
  },
  {
    title: 'Import and use',
    code: `import 'ospinajuanp-reset-css';
// or use a specific theme
import 'ospinajuanp-reset-css/dark';`,
  },
  {
    title: 'Use with React (optional)',
    code: `import { ThemeProvider, useTheme } from 'ospinajuanp-reset-css/react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}`,
  },
]

export function Quickstart() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Quick Start</h2>
          <p className="text-muted-foreground">
            Get up and running in minutes with just a few lines of code.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="font-medium">{step.title}</h3>
              </div>
              <pre className="overflow-x-auto rounded-md bg-[#1e1e1e] p-4">
                <code className="font-mono text-sm text-gray-100">{step.code}</code>
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/docs"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Read the full documentation
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href="/playground"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Try the interactive playground
          </a>
        </div>
      </div>
    </section>
  )
}