const themes = [
  'simple',
  'dark',
  'pastel',
  'darkBluePastel',
  'lightBluePastel',
  'retro'
];

function setTheme(themeName) {
  if (!themes.includes(themeName)) {
    console.warn(`Theme "${themeName}" not found. Available themes: ${themes.join(', ')}`);
    return;
  }
  document.documentElement.setAttribute('data-theme', themeName);
}

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'simple';
}

function initTheme(themeName = 'simple') {
  setTheme(themeName);
}

function info() {
  console.log('Ospinajuanp Reset CSS - A modern CSS reset with multiple themes.');
  console.log('Available themes:', themes.join(', '));
  console.log('Usage: setTheme("dark") or import specific theme directly.');
}

module.exports = {
  themes,
  setTheme,
  getTheme,
  initTheme,
  info
};