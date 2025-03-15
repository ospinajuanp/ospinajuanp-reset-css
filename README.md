# ospinajuanp-reset-css

ospinajuanp-reset-css is a lightweight tool designed to help kickstart your web projects by resetting browser default styles. It provides a consistent baseline for styling by eliminating common browser inconsistencies, so you can focus on designing your application without unexpected default behaviors.

## Features

- **Universal Reset:** Resets styles for a wide range of HTML elements.
- **Browser Bug Fixes:** Addresses common browser inconsistencies and bugs.
- **Enhanced Usability:** Provides subtle improvements to usability right out of the box.
- **Template Options:** Offers four preset templates:
  1. **simple:** A basic reset.
  2. **modeDark:** A dark theme reset.
  3. **modePastel:** A pastel-inspired reset.
  4. **modeRetro:** A retro-themed reset.

## Installation

Install the package via npm:

```bash
npm install ospinajuanp-reset-css
```
## Getting Started
Once installed, run the tool using the following command:
```bash
ospinajuanp-reset-css
```

You will be guided through a simple CLI process:

Destination Folder Prompt:

```bash
Where do you want to copy the files? (Press Enter to use 'src'):
```

Template Selection Prompt:

```bash
Do you want to reset styles 
1 (simple) 
2 (dark)
3 (pastel)
4 (retro)
(Press Enter to use the default template: simple)
```

After your selections, the script copies the appropriate reset file (e.g., resetStyle.css) to the specified destination folder (default is src).

Note: The option to choose between CSS and SCSS has been removed; only CSS is supported.

# Usage
### Without a Framework
Simply include the reset stylesheet in your HTML file:
```bash
<link rel="stylesheet" href="./resetStyleMODE.css">
```

### With a Framework
Import the reset stylesheet directly into your project. For example, in a JavaScript or TypeScript file:
```bash
import './src/resetStyle.css';
```


# Customizing the Styles simple

You can further modify the reset or extend it by adding custom CSS variables and media queries. For instance:

```bash
/* Custom properties for colors and typography */
:root {
  --color-primary: #007bff;
  --color-secondary: #f8f9fa;
  --color-tertiary: #dee2e6;
  --color-accent: #17a2b8;
  --color-text: #212529;
  --color-background: #ffffff;
  --typography-primary: Helvetica, arial, sans-serif;
  --typography-secondary: Verdana, sans-serif;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #0d6efd;
    --color-secondary: #343a40;
    --color-tertiary: #495057;
    --color-accent: #ffb400;
    --color-text: #e9ecef;
    --color-background: #212529;
  }
}

/* High contrast mode (optional) */
@media (prefers-contrast: high) {
  :root {
    --color-primary: #ffcc00;
    --color-secondary: #000000;
    --color-tertiary: #ffffff;
    --color-accent: #ff0000;
    --color-text: #ffffff;
    --color-background: #000000;
  }
}
```

# Contributing
Contributions are welcome! If you’d like to enhance the functionality or improve the code, please feel free to submit pull requests or open issues. Join the conversation on GitHub.

# License
ospinajuanp-reset-css is released under the [MIT License](https://opensource.org/licenses/MIT)