import { CodeBlock } from '@/components/Docs/CodeBlock'

export default function QuickStartPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Quick Start</h1>
      <p className="lead">
        Get up and running with ospinajuanp-reset-css in minutes.
      </p>

      <h2>Step 1: Install</h2>
      <CodeBlock code="npm install -D ospinajuanp-reset-css" />

      <h2>Step 2: Import</h2>
      <p>Import the reset styles in your main CSS or JavaScript file:</p>

      <CodeBlock
        filename="styles.css"
        code={`/* Option 1: CSS import */
@import 'ospinajuanp-reset-css';

/* Option 2: JavaScript import */
import 'ospinajuanp-reset-css';`}
      />

      <h2>Step 3: Use a Theme (Optional)</h2>
      <p>Choose from 6 built-in themes:</p>

      <CodeBlock
        code={`/* Available themes */
import 'ospinajuanp-reset-css';           // Simple (default)
import 'ospinajuanp-reset-css/dark';      // Dark Mode
import 'ospinajuanp-reset-css/pastel';    // Pastel
import 'ospinajuanp-reset-css/dark-blue-pastel';
import 'ospinajuanp-reset-css/light-blue-pastel';
import 'ospinajuanp-reset-css/retro';     // Retro`}
      />

      <h2>That's It!</h2>
      <p>
        The CSS reset is now applied to your project. Your browser inconsistencies are gone.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/docs/api/javascript"
          className="text-primary hover:underline"
        >
          Learn about the JavaScript API →
        </a>
        <a
          href="/playground"
          className="text-primary hover:underline"
        >
          Try the Playground →
        </a>
      </div>
    </div>
  )
}