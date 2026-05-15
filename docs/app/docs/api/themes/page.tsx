import { CodeBlock } from '@/components/Docs/CodeBlock'
import { ApiTable } from '@/components/Docs/ApiTable'

export default function ThemesApiPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Themes API</h1>
      <p className="lead">
        Use the themes API for tree-shaking and dynamic imports.
      </p>

      <h2>Import</h2>
      <CodeBlock
        code={`import { loadTheme, themes } from 'ospinajuanp-reset-css/themes';`}
      />

      <h2>Functions</h2>
      <ApiTable
        data={[
          {
            name: 'loadTheme',
            type: '(themeName: ThemeName) => Promise<void>',
            defaultValue: '-',
            description: 'Dynamically load and apply a theme. Only loads the CSS for that specific theme.',
          },
          {
            name: 'themes',
            type: 'ThemeName[]',
            defaultValue: '-',
            description: 'Array of all available theme names.',
          },
        ]}
      />

      <h2>Usage Example</h2>
      <CodeBlock
        code={`// Dynamic import - only loads the theme CSS used
const { loadTheme, themes } = await import('ospinajuanp-reset-css/themes');

await loadTheme('dark'); // Loads only resetStyleDark.css`}
      />

      <h2>Available Themes</h2>
      <div className="grid gap-4 not-prose">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Simple (Default)</h3>
          <p className="text-sm text-muted-foreground">Baseline reset with minimal styling.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Dark Mode</h3>
          <p className="text-sm text-muted-foreground">Dark theme optimized for low-light environments.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Pastel</h3>
          <p className="text-sm text-muted-foreground">Soft pastel colors for a gentle visual experience.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Dark Blue Pastel</h3>
          <p className="text-sm text-muted-foreground">Dark theme with blue pastel accents.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Light Blue Pastel</h3>
          <p className="text-sm text-muted-foreground">Light theme with blue pastel accents.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Retro</h3>
          <p className="text-sm text-muted-foreground">Nostalgic retro-style theme.</p>
        </div>
      </div>

      <h2>Tree-shaking</h2>
      <p>
        Webpack, Vite, and Next.js can automatically tree-shake unused CSS. 
        Use dynamic imports to load only the theme you need:
      </p>
      <CodeBlock
        code={`// This approach ensures only the CSS for the selected theme is bundled,
// reducing your final bundle size.`}
      />
    </div>
  )
}