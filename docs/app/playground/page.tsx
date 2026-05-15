'use client'

import { useState } from 'react'
import { Header } from '@/components/Landing/Header'
import { themes, themeLabels, type ThemeName } from '@/lib/docs'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg border overflow-hidden">
      <div className="bg-[#1e1e1e]">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono text-gray-100">{code}</code>
        </pre>
      </div>
      <button
        onClick={copyToClipboard}
        className={cn(
          'absolute right-3 top-3 rounded-md p-2 text-xs opacity-0 transition-opacity group-hover:opacity-100',
          copied ? 'text-green-400' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
        )}
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export default function PlaygroundPage() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('dark')
  const [activeTab, setActiveTab] = useState<'css' | 'js' | 'react'>('js')

  const themePreviews: Record<ThemeName, { bg: string; text: string; border: string; accent: string }> = {
    simple: { bg: '#ffffff', text: '#212529', border: '#dee2e6', accent: '#007bff' },
    dark: { bg: '#212529', text: '#e9ecef', border: '#343a40', accent: '#6c757d' },
    pastel: { bg: '#fff5f5', text: '#5a3d3d', border: '#ffd5d5', accent: '#ff8787' },
    darkBluePastel: { bg: '#1a1a2e', text: '#e0e0e0', border: '#2d2d44', accent: '#7b8cde' },
    lightBluePastel: { bg: '#f0f4f8', text: '#2c3e50', border: '#d0dbe5', accent: '#5d9cec' },
    retro: { bg: '#f4e4bc', text: '#5c4a1f', border: '#d4c4a0', accent: '#c85a17' },
  }

  const preview = themePreviews[selectedTheme]

  const codeExamples = {
    css: `/* Import in CSS */
@import 'ospinajuanp-reset-css/${selectedTheme}';`,
    js: `// Import in JavaScript/TypeScript
import 'ospinajuanp-reset-css/${selectedTheme}';

// Or use dynamic import
const { loadTheme } = await import('ospinajuanp-reset-css/themes');
await loadTheme('${selectedTheme}');`,
    react: `// Using useResetTheme hook
import { useResetTheme } from 'ospinajuanp-reset-css/react';

function App() {
  const { theme, setTheme, themes } = useResetTheme('${selectedTheme}');

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  );
}`,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold">Playground</h1>
            <p className="text-muted-foreground">
              Select a theme and see the preview with generated code.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Select Theme
                </label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value as ThemeName)}
                  className="w-full rounded-lg border bg-card px-4 py-3 text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {themeLabels[theme]}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="rounded-lg border p-6 shadow-sm"
                style={{
                  backgroundColor: preview.bg,
                  borderColor: preview.border,
                }}
              >
                <h3
                  className="mb-4 text-lg font-semibold"
                  style={{ color: preview.text }}
                >
                  Theme Preview
                </h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-sm font-medium" style={{ color: preview.text }}>
                      Headings
                    </span>
                    <h1 style={{ color: preview.text }} className="text-2xl font-bold">
                      Heading 1
                    </h1>
                    <h2 style={{ color: preview.text }} className="text-xl font-semibold">
                      Heading 2
                    </h2>
                    <h3 style={{ color: preview.text }} className="text-lg font-medium">
                      Heading 3
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm font-medium" style={{ color: preview.text }}>
                      Body Text
                    </span>
                    <p style={{ color: preview.text }} className="text-base">
                      This is paragraph text showing how the theme handles regular content.
                      The colors are optimized for readability and visual comfort.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm font-medium" style={{ color: preview.text }}>
                      Interactive Elements
                    </span>
                    <div className="flex gap-2">
                      <button
                        className="rounded-md px-4 py-2 text-sm font-medium text-white"
                        style={{ backgroundColor: preview.accent }}
                      >
                        Primary Button
                      </button>
                      <button
                        className="rounded-md border px-4 py-2 text-sm font-medium"
                        style={{ borderColor: preview.border, color: preview.text }}
                      >
                        Secondary
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm font-medium" style={{ color: preview.text }}>
                      Form Elements
                    </span>
                    <input
                      type="text"
                      placeholder="Input field..."
                      className="w-full rounded-md border px-3 py-2"
                      style={{
                        backgroundColor: preview.bg,
                        borderColor: preview.border,
                        color: preview.text,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-4 flex gap-2">
                  <button
                    onClick={() => setActiveTab('js')}
                    className={cn(
                      'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                      activeTab === 'js'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setActiveTab('css')}
                    className={cn(
                      'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                      activeTab === 'css'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                  >
                    CSS
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={cn(
                      'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                      activeTab === 'react'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                  >
                    React
                  </button>
                </div>

                <CodeBlock code={codeExamples[activeTab]} />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-2 font-semibold">Theme Details</h4>
                <dl className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Name:</dt>
                    <dd className="font-mono">{themeLabels[selectedTheme]}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Import path:</dt>
                    <dd className="font-mono">{`ospinajuanp-reset-css/${selectedTheme.replace(/([A-Z])/g, '-$1').toLowerCase()}`}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}