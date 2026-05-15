import { CodeBlock } from '@/components/Docs/CodeBlock'

export default function ReactGuidePage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Using with React</h1>
      <p className="lead">
        Learn how to integrate ospinajuanp-reset-css with your React or Next.js application.
      </p>

      <h2>Installation</h2>
      <p>First, install the package:</p>
      <CodeBlock code="npm install ospinajuanp-reset-css" />

      <h2>Basic Setup</h2>
      <p>Import the CSS reset in your main entry file:</p>

      <CodeBlock
        filename="src/app/layout.tsx (Next.js App Router)"
        code={`import 'ospinajuanp-reset-css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
      />

      <h2>Using the Theme Provider</h2>
      <p>For dynamic theme switching, wrap your app with the ThemeProvider:</p>

      <CodeBlock
        filename="src/app/providers.tsx"
        code={`'use client';

import { ThemeProvider } from 'ospinajuanp-reset-css/react';

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}`}
      />

      <CodeBlock
        filename="src/app/layout.tsx"
        code={`import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`}
      />

      <h2>Using the Theme Hook</h2>
      <p>Access the theme in any component:</p>

      <CodeBlock
        filename="src/components/ThemeSwitcher.tsx"
        code={`import { useTheme } from 'ospinajuanp-reset-css/react';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="rounded-md border px-3 py-2"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}`}
      />

      <h2>Alternative: useResetTheme Hook</h2>
      <p>If you don't need the provider context, use useResetTheme directly:</p>

      <CodeBlock
        code={`import { useResetTheme } from 'ospinajuanp-reset-css/react';

function MyComponent() {
  const { theme, setTheme, themes } = useResetTheme('dark');
  // ... same as useTheme but standalone
}`}
      />

      <h2>Next Steps</h2>
      <ul>
        <li><a href="/docs/guides/dynamic-theming" className="text-primary hover:underline">Dynamic Theming</a> - Learn advanced theme switching</li>
        <li><a href="/docs/guides/customization" className="text-primary hover:underline">Customization</a> - Customize the default styles</li>
        <li><a href="/playground" className="text-primary hover:underline">Playground</a> - Try themes interactively</li>
      </ul>
    </div>
  )
}