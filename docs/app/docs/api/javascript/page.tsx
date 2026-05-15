import { CodeBlock } from '@/components/Docs/CodeBlock'
import { ApiTable } from '@/components/Docs/ApiTable'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JavaScript API',
  description: 'JavaScript API reference for ospinajuanp-reset-css. Learn about setTheme, getTheme, themes, initTheme, and loadTheme functions.',
}

export default function JavaScriptApiPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>JavaScript API</h1>
      <p className="lead">
        Use the JavaScript API to dynamically change themes at runtime.
      </p>

      <h2>Import</h2>
      <CodeBlock
        code={`import { setTheme, getTheme, themes, initTheme } from 'ospinajuanp-reset-css/api';`}
      />

      <h2>Functions</h2>
      <ApiTable
        data={[
          {
            name: 'initTheme',
            type: '(themeName?: ThemeName) => void',
            defaultValue: 'undefined',
            description: 'Initialize the theme. If no theme is provided, defaults to system preference.',
          },
          {
            name: 'setTheme',
            type: '(themeName: ThemeName) => void',
            defaultValue: '-',
            description: 'Set the current theme to one of the available themes.',
          },
          {
            name: 'getTheme',
            type: '() => ThemeName | "simple"',
            defaultValue: '-',
            description: 'Get the current active theme. Returns "simple" as default if no theme has been set.',
          },
          {
            name: 'themes',
            type: 'ThemeName[]',
            defaultValue: '-',
            description: 'Array of all available theme names.',
          },
        ]}
      />

      <h2>Type Definitions</h2>
      <CodeBlock
        code={`type ThemeName = 'simple' | 'dark' | 'pastel' | 'darkBluePastel' | 'lightBluePastel' | 'retro';`}
      />

      <h2>Usage Example</h2>
      <CodeBlock
        code={`import { setTheme, getTheme, themes, initTheme } from 'ospinajuanp-reset-css/api';

// Initialize with a specific theme
initTheme('dark');

// Or set theme later
setTheme('pastel');

// Get current theme
console.log(getTheme()); // 'pastel'

// Available themes
console.log(themes);
// ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro']`}
      />

      <h2>Use Cases</h2>
      <ul>
        <li>User theme preference toggles</li>
        <li>Theme switchers in settings</li>
        <li>Dynamic theme loading based on user preference</li>
      </ul>
    </div>
  )
}