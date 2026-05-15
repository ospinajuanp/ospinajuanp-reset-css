import { CodeBlock } from '@/components/Docs/CodeBlock'
import { ApiTable } from '@/components/Docs/ApiTable'

export default function ReactApiPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>React API</h1>
      <p className="lead">
        Use the React hooks and provider for seamless integration with React applications.
      </p>

      <h2>Import</h2>
      <CodeBlock
        code={`import { useResetTheme, ThemeProvider, useTheme } from 'ospinajuanp-reset-css/react';`}
      />

      <h2>ThemeProvider</h2>
      <ApiTable
        data={[
          {
            name: 'defaultTheme',
            type: 'ThemeName',
            defaultValue: 'undefined',
            description: 'The default theme to apply on initial render. If not provided, no theme is applied.',
          },
          {
            name: 'children',
            type: 'ReactNode',
            defaultValue: '-',
            description: 'The child components that will have access to the theme context.',
          },
        ]}
      />

      <h2>useResetTheme Hook</h2>
      <ApiTable
        data={[
          {
            name: 'initialTheme',
            type: 'ThemeName',
            defaultValue: 'undefined',
            description: 'The initial theme for this hook instance.',
          },
        ]}
      />

      <h3>Return Value</h3>
      <ApiTable
        data={[
          {
            name: 'theme',
            type: 'ThemeName',
            defaultValue: '-',
            description: 'The current active theme.',
          },
          {
            name: 'setTheme',
            type: '(theme: ThemeName) => void',
            defaultValue: '-',
            description: 'Function to change the current theme.',
          },
          {
            name: 'themes',
            type: 'ThemeName[]',
            defaultValue: '-',
            description: 'Array of all available theme names.',
          },
        ]}
      />

      <h2>useTheme Hook</h2>
      <p>
        Use <code>useTheme</code> inside a <code>ThemeProvider</code> to access the theme context.
        Returns the same object as <code>useResetTheme</code>.
      </p>

      <h2>Usage Examples</h2>

      <h3>Using useResetTheme directly</h3>
      <CodeBlock
        code={`import { useResetTheme } from 'ospinajuanp-reset-css/react';

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useResetTheme('dark');

  return (
    <div>
      <p>Current theme: {theme}</p>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}`}
      />

      <h3>Using ThemeProvider</h3>
      <CodeBlock
        code={`import { ThemeProvider, useTheme } from 'ospinajuanp-reset-css/react';

function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeSwitcher />
    </ThemeProvider>
  );
}`}
      />
    </div>
  )
}