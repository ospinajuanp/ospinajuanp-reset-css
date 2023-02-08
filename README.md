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
```npm
ospinajuanp-reset-css
```

# Usage

- Import/Link in your project 
- Example : < link rel="stylesheet" href="./resetStyle.css">
- You can modify inside the file in the :root section the values of the --color-primary and --color-secondary variables in order to have a base configuration in your project. 
## CSS y SASS(scss)
```css
/* Here we define normal mode*/
:root { 
  /* Here we define color*/
  --color-primary:#181818;
  --color-secondary:#f0f0f0;
  /* Here we define typography*/
  --typography-primary: Helvetica,arial,sans-serif;
  --typography-secondary: Verdana;
}
/* Here we define dark mode*/
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary:#f0f0f0;
    --color-secondary:#181818;
  }
}
/* Optional */
/* Here we define Contrast High */
@media (prefers-contrast: high) {
  :root {
    --color-primary:#000;
    --color-secondary:#fff;
  }
}
```


# Contributing

If someone wants to add or improve something, I invite you to collaborate directly in this repository: [github](https://github.com/ospinajuanp/ospinajuanp-reset-css)

# License

funny-commit is released under the [MIT License](https://opensource.org/licenses/MIT)



# Gratitude to
I want to offer my sincere thanks to Eduardo Fierro(@eduardofierropro) because through his videos and streams I have acquired the knowledge to carry out this project. I share his social networks to follow his work and contributions to the community.
- Twitch: https://twitch.tv/eduardofierropro
- Youtube! https://www.youtube.com/EduardoFierro...
- TikTok https://www.tiktok.com/@eduardofierro...
- Podcast about web development https://anchor.fm/eduardofierropro
- Instagram https://www.instagram.com/eduardofier...
- Github https://github.com/eduardofierropro
- Twitter https://twitter.com/i/lists/132582779...
- His web https://eduardofierro.pro