import { CodeBlock } from '@/components/Docs/CodeBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dynamic Theming',
  description: 'Implement dynamic theme switching with user preference support. Toggle between themes at runtime in your React or JS app.',
}

export default function DynamicThemingPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1>Dynamic Theming</h1>
      <p className="lead">
        Learn how to implement dynamic theme switching based on user preferences.
      </p>

      <h2>System Preference Detection</h2>
      <p>Automatically detect and apply the user's system theme preference:</p>

      <CodeBlock
        code={`import { initTheme } from 'ospinajuanp-reset-css/api';

// This will automatically detect system preference
initTheme();

// Or explicitly set 'system' to let it detect automatically
initTheme('dark'); // This applies dark theme directly`}
      />

      <h2>User Preference Storage</h2>
      <p>Persist user theme choice in localStorage:</p>

      <CodeBlock
        code={`import { setTheme, getTheme } from 'ospinajuanp-reset-css/api';

// On app init
const savedTheme = localStorage.getItem('theme') || 'system';
setTheme(savedTheme);

// On theme change
function handleThemeChange(newTheme) {
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}`}
      />

      <h2>React Implementation</h2>
      <p>Combine with React hooks for a complete solution:</p>

      <CodeBlock
        code={`import { useEffect, useState } from 'react';
import { useTheme } from 'ospinajuanp-reset-css/react';

function ThemeManager() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Restore saved preference on mount
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  const handleChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <select value={theme} onChange={(e) => handleChange(e.target.value)}>
      <option value="simple">Simple</option>
      <option value="dark">Dark</option>
      <option value="pastel">Pastel</option>
    </select>
  );
}`}
      />

      <h2>CSS Variables Override</h2>
      <p>The themes use CSS custom properties. Override them globally:</p>

      <CodeBlock
        code={`/* Custom overrides */
:root {
  --color-primary: #your-brand-color;
  --color-background: #your-bg-color;
  --color-text: #your-text-color;
}`}
      />

      <h2>Best Practices</h2>
      <ul>
        <li>Always provide a theme toggle in your UI</li>
        <li>Remember user choice in localStorage or cookies</li>
        <li>Respect system preference as default</li>
        <li>Add transition effects for smooth theme switching</li>
      </ul>
    </div>
  )
}