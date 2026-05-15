import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = ['simple', 'dark', 'pastel', 'darkBluePastel', 'lightBluePastel', 'retro'];

const ThemeContext = createContext({
  theme: 'simple',
  setTheme: () => {},
  themes: themes
});

export function ThemeProvider({ children, defaultTheme = 'simple' }) {
  const [theme, setThemeState] = useState(defaultTheme);

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;