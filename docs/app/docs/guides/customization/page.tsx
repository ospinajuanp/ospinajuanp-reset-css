import { CodeBlock } from '@/components/Docs/CodeBlock'

export default function CustomizationPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Customization</h1>
      <p className="lead">
        Learn how to customize and extend the default styles.
      </p>

      <h2>CSS Variables</h2>
      <p>All themes use CSS custom properties that you can override:</p>

      <CodeBlock
        code={`:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-background: #ffffff;
  --color-text: #212529;
  --color-border: #dee2e6;

  /* Typography */
  --font-family: Helvetica, Arial, sans-serif;
  --font-size-base: 16px;
  --line-height: 1.5;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}`}
      />

      <h2>Dark Mode Overrides</h2>
      <p>Add dark mode overrides using media queries:</p>

      <CodeBlock
        code={`@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #212529;
    --color-text: #e9ecef;
    --color-border: #343a40;
  }
}`}
      />

      <h2>Component-Specific Overrides</h2>
      <p>Target specific elements for more granular control:</p>

      <CodeBlock
        code={`/* Buttons */
button {
  --btn-padding: 0.5rem 1rem;
  --btn-radius: 0.375rem;
}

/* Form elements */
input, textarea, select {
  --input-bg: var(--color-background);
  --input-border: var(--color-border);
  --input-radius: 0.25rem;
}

/* Links */
a {
  --link-color: var(--color-primary);
  --link-hover: #0056b3;
}`}
      />

      <h2>SCSS Source</h2>
      <p>The package includes raw SCSS source for advanced customization:</p>

      <CodeBlock
        code={`// If using SCSS directly
@import 'ospinajuanp-reset-css/scss/reset';

// Customize variables before import
$font-family-base: 'Inter', sans-serif;
$color-primary: #6366f1;`}
      />

      <h2>Theme-Specific Customization</h2>
      <p>Each theme can be customized independently:</p>

      <CodeBlock
        code={`/* Dark theme overrides */
:root.dark {
  --color-primary: #818cf8;
  --color-background: #1e293b;
  --color-text: #f1f5f9;
}

/* Pastel theme overrides */
:root.pastel {
  --color-primary: #f472b6;
  --color-background: #fff1f2;
}`}
      />

      <h2>Next Steps</h2>
      <ul>
        <li><a href="/playground" className="text-primary hover:underline">Playground</a> - Experiment with themes</li>
        <li><a href="/docs/guides/dynamic-theming" className="text-primary hover:underline">Dynamic Theming</a> - Implement theme switching</li>
      </ul>
    </div>
  )
}