import { useState, useEffect } from 'react';

export const themes = ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro'];

export function useResetTheme(initialTheme = 'simple') {
  const [theme, setThemeState] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = (newTheme) => {
    if (!themes.includes(newTheme)) {
      console.warn(`Theme "${newTheme}" not found. Available themes: ${themes.join(', ')}`);
      return;
    }
    setThemeState(newTheme);
  };

  return { theme, setTheme, themes };
}

export default useResetTheme;