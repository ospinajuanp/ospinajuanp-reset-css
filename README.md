# ospinajuanp-reset-css

This project is designed so that any person or organization can use it to help start up projects. 

In this project we are working on resetting the default styles that the browser has, in order to start the project in the best possible way without having to fix possible bugs by default styles added by browsers.

### What does it do?
- Reset styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- Improves usability with subtle modifications.

## Install

```npm
npm install ospinajuanp-reset-css
```

Once installed, run the command:

```npm
ospinajuanp-reset-css
```
You'll be prompted with the following options:

```
Where do you want to copy the files? (Press Enter to use 'src'): 
```
```
Do you want to reset styles with CSS or SCSS? (Press Enter to use CSS): 
```
```
✅ File copied: resetStyle.css → src

```
By default, the reset styles will be copied to the src folder using CSS. You can change these options according to your project structure.


# Usage

- without using framework
  - Link in your project 
  - Example : < link rel="stylesheet" href="./resetStyle.css">
- using framework
  - Import in your project
  - example: import './src/resetStyle.css'


## modify CSS y SASS(scss) 
```css
/* Here we define custom properties */
:root {
  /* Here we define color*/
  --color-primary: #007bff;
  --color-secondary: #f8f9fa;
  --color-tertiary: #dee2e6;
  --color-accent: #17a2b8;
  --color-text: #212529;
  --color-background: #ffffff;
  /* Here we define typography*/
  --typography-primary: Helvetica,arial,sans-serif;
  --typography-secondary: Verdana;
}

/* Here we define dark mode*/
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
/* Optional */
/* Here we define Contrast High */
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

If someone wants to add or improve something, I invite you to collaborate directly in this repository: [github](https://github.com/ospinajuanp/ospinajuanp-reset-css)

# License

funny-commit is released under the [MIT License](https://opensource.org/licenses/MIT)