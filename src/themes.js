const themeModules = {
  simple: () => import('./dist/resetStyle.css'),
  dark: () => import('./dist/resetStyleDark.css'),
  pastel: () => import('./dist/resetStylePastel.css'),
  darkBluePastel: () => import('./dist/resetStyleDarkBluePastel.css'),
  lightBluePastel: () => import('./dist/resetStyleLightBluePastel.css'),
  retro: () => import('./dist/resetStyleRetro.css')
};

export async function loadTheme(themeName) {
  const loader = themeModules[themeName];
  if (!loader) {
    throw new Error(`Theme "${themeName}" not found. Available: ${Object.keys(themeModules).join(', ')}`);
  }
  return loader();
}

export const themes = Object.keys(themeModules);

export default themeModules;