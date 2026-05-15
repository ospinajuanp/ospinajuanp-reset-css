# Ospinajuanp Reset CSS

[![npm version](https://img.shields.io/npm/v/ospinajuanp-reset-css.svg)](https://www.npmjs.com/package/ospinajuanp-reset-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Ospinajuanp-reset-css** is a lightweight, modern tool designed to help kickstart your web projects by resetting browser default styles. It provides a consistent baseline for styling by eliminating common browser inconsistencies, so you can focus on designing your application without unexpected layout behaviors.

This project is built with SCSS modularity, providing the highest industry standards for an unintrusive CSS reset, inspired by modern reset techniques.

## Features

- **Universal Reset:** Resets margins, paddings, and styles for a wide range of HTML elements.
- **Modern Baseline:** Incorporates features from modern-normalize and modern reset methodologies.
- **Fully Cross-Platform:** CLI tool uses native Node.js instead of shell commands, supporting Windows, macOS, and Linux out-of-the-box.
- **Template Options:** Offers six preset templates with predefined design variables:
  1. **Simple** (Default Baseline)
  2. **Dark Mode**
  3. **Pastel**
  4. **Dark Blue Pastel**
  5. **Light Blue Pastel**
  6. **Retro**
- **SCSS Source Ready:** Contains its raw `.scss` source for those who want to compile it independently.

## Installation

Install the package as a development dependency via npm, yarn, or pnpm:

```bash
npm install -D ospinajuanp-reset-css
```

## Getting Started (CLI Tool)

Once installed, there's a quick interactive CLI tool that will copy the right reset file directly into your source folder.

Simply run:
```bash
npx ospinajuanp-reset-css
```

You will be guided through a simple interactive process:

1. **Destination Folder Prompt:**
   ```
   Where do you want to copy the reset file? (Press Enter to use 'src'):
   ```

2. **Template Selection Prompt:**
   ```
   Available Templates:
   1 - Simple (Default)
   2 - Dark
   3 - Pastel
   4 - Dark Blue Pastel
   5 - Light Blue Pastel
   6 - Retro

   Which template do you want to use? (Press Enter for 1 - Simple):
   ```

The script will automatically copy the requested template file to the destination folder you chose (e.g., `src/resetStyle.css`).

## Manual Usage

### Without a Framework
If you copied the generated file manually via the CLI, simply include the reset stylesheet in your HTML file:
```html
<link rel="stylesheet" href="./src/resetStyle.css">
```

### With a JavaScript Framework (React, Vue, Next.js, Vite)
Import the reset stylesheet directly into your project's main layout or index file.
```javascript
// index.js or layout.jsx
import './src/resetStyle.css';
```
*(Optionally you can import directly from the package without copying: `import 'ospinajuanp-reset-css/dist/resetStyle.css';`)*

### Using Specific Themes

Import any theme directly from the package using the new exports:

```javascript
// Simple (Default)
import 'ospinajuanp-reset-css';

// Dark Theme
import 'ospinajuanp-reset-css/dark';

// Pastel Theme
import 'ospinajuanp-reset-css/pastel';

// Dark Blue Pastel
import 'ospinajuanp-reset-css/dark-blue-pastel';

// Light Blue Pastel
import 'ospinajuanp-reset-css/light-blue-pastel';

// Retro Theme
import 'ospinajuanp-reset-css/retro';
```

Or use the dist path directly:
```javascript
import 'ospinajuanp-reset-css/dist/resetStyleDark.css';
```

### Dynamic Theme Switching (JavaScript API)

Use the JS API to change themes dynamically at runtime:

```javascript
import { setTheme, getTheme, themes, initTheme } from 'ospinajuanp-reset-css/api';

// Initialize with a specific theme
initTheme('dark');

// Or set theme later
setTheme('pastel');

// Get current theme
console.log(getTheme()); // 'pastel'

// Available themes
console.log(themes); // ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro']
```

This is useful for:
- User theme preference toggles
- Theme switchers in settings
- Dynamic theme loading based on user preference

### React / Next.js Integration

Use the React hooks and provider for dynamic theme switching in your React apps:

```jsx
// Using the hook directly
import { useResetTheme } from 'ospinajuanp-reset-css/react';

function App() {
  const { theme, setTheme, themes } = useResetTheme('dark');

  return (
    <div>
      <p>Current theme: {theme}</p>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  );
}
```

Or use the ThemeProvider for app-wide theme management:

```jsx
// Using ThemeProvider
import { ThemeProvider, useTheme } from 'ospinajuanp-reset-css/react';

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
}
```

### Tree-shaking and Dynamic Imports

Webpack, Vite, and Next.js can automatically tree-shake unused CSS. Use dynamic imports to load only the theme you need:

```javascript
// Dynamic import - only loads the theme CSS used
const { loadTheme, themes } = await import('ospinajuanp-reset-css/themes');

await loadTheme('dark'); // Loads only resetStyleDark.css
```

This approach ensures that only the CSS for the selected theme is bundled, reducing your final bundle size.

## Customizing the Styles

Our templates inject generic CSS custom variables at the `:root` level. You can further modify the reset or extend it.

For instance, if choosing the `Simple` template:
```css
/* You can override these variables anywhere in your app */
:root {
  --color-primary: #007bff;
  --color-secondary: #f8f9fa;
  --color-text: #212529;
  --color-background: #ffffff;
  --typography-primary: Helvetica, Arial, sans-serif;
}

/* Add your Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #212529;
    --color-text: #e9ecef;
  }
}
```

## Developing and Compiling Sources locally

If you want to contribute to the SCSS reset styles, clone the repository and run:

```bash
npm install
npm run build
```

This will automatically trigger `node build.js` to compile the variables and base resets from `src/scss/` into `dist/*.css`.

## Contributing
Contributions are always welcome! If you’d like to enhance the functionality, improve the code, or add new themes, feel free to submit pull requests or open issues at our [GitHub Repository](https://github.com/ospinajuanp/ospinajuanp-reset-css).

## License
`ospinajuanp-reset-css` is released under the [MIT License](https://opensource.org/licenses/MIT).