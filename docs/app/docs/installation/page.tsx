import { CodeBlock } from '@/components/Docs/CodeBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Installation',
  description: 'Install ospinajuanp-reset-css via npm, yarn, or pnpm. Step-by-step guide for React, Next.js, Vue, and vanilla JS projects.',
}

export default function InstallationPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Installation</h1>
      <p className="lead">
        Install ospinajuanp-reset-css as a development dependency in your project.
      </p>

      <h2>Package Managers</h2>
      <p>Choose your preferred package manager:</p>

      <div className="space-y-4 not-prose">
        <div className="rounded-lg border bg-card p-4">
          <h3 className="text-sm font-semibold mb-2">npm</h3>
          <CodeBlock code="npm install -D ospinajuanp-reset-css" />
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h3 className="text-sm font-semibold mb-2">yarn</h3>
          <CodeBlock code="yarn add -D ospinajuanp-reset-css" />
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h3 className="text-sm font-semibold mb-2">pnpm</h3>
          <CodeBlock code="pnpm add -D ospinajuanp-reset-css" />
        </div>
      </div>

      <h2>Basic Usage</h2>
      <p>Import the reset styles in your main CSS or JavaScript file:</p>

      <CodeBlock
        filename="index.css"
        code={`/* In CSS */
@import 'ospinajuanp-reset-css';`}
      />

      <p>Or import directly in JavaScript:</p>

      <CodeBlock
        filename="index.js"
        code={`// In JavaScript/TypeScript
import 'ospinajuanp-reset-css';`}
      />

      <h2>Using Specific Themes</h2>
      <p>Import any of the 6 built-in themes directly:</p>

      <CodeBlock
        code={`import 'ospinajuanp-reset-css';        // Simple (default)
import 'ospinajuanp-reset-css/dark';    // Dark Mode
import 'ospinajuanp-reset-css/pastel';   // Pastel
import 'ospinajuanp-reset-css/dark-blue-pastel';
import 'ospinajuanp-reset-css/light-blue-pastel';
import 'ospinajuanp-reset-css/retro';   // Retro`}
      />

      <h2>Next Steps</h2>
      <ul>
        <li><a href="/docs/api/javascript" className="text-primary hover:underline">JavaScript API</a> - Learn about dynamic theme switching</li>
        <li><a href="/docs/api/react" className="text-primary hover:underline">React API</a> - Use hooks and providers in React</li>
        <li><a href="/playground" className="text-primary hover:underline">Playground</a> - Try themes interactively</li>
      </ul>
    </div>
  )
}