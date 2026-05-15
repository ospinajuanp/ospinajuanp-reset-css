import { CodeBlock } from '@/components/Docs/CodeBlock'
import { ApiTable } from '@/components/Docs/ApiTable'

export default function DocsPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Introduction</h1>
      <p className="lead">
        <strong>ospinajuanp-reset-css</strong> is a lightweight, modern CSS reset tool designed to help 
        kickstart your web projects by resetting browser default styles.
      </p>

      <h2>What is a CSS Reset?</h2>
      <p>
        A CSS reset is a set of styles that removes default browser styling for HTML elements. 
        This provides a consistent baseline across all browsers, eliminating common inconsistencies 
        in margins, padding, and default typography.
      </p>

      <h2>Features</h2>
      <ul>
        <li><strong>Universal Reset:</strong> Resets margins, paddings, and styles for a wide range of HTML elements.</li>
        <li><strong>Modern Baseline:</strong> Incorporates features from modern-normalize and modern reset methodologies.</li>
        <li><strong>6 Built-in Themes:</strong> Simple, Dark, Pastel, Dark Blue Pastel, Light Blue Pastel, and Retro.</li>
        <li><strong>Type-Safe:</strong> Full TypeScript support with complete type definitions.</li>
        <li><strong>React Integration:</strong> Hooks and Provider for dynamic theme switching.</li>
        <li><strong>Tree-shaking:</strong> Load only the theme you need.</li>
      </ul>

      <h2>Quick Example</h2>
      <CodeBlock
        filename="index.css"
        code={`/* Simply import and go! */
@import 'ospinajuanp-reset-css';

/* Or use a specific theme */
@import 'ospinajuanp-reset-css/dark';`}
      />

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <p className="text-sm">
          Ready to get started? Check out the <a href="/docs/installation" className="text-primary hover:underline">Installation guide</a> to begin.
        </p>
      </div>
    </div>
  )
}