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