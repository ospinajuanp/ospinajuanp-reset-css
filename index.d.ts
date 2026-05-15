export type ThemeName = 'simple' | 'dark' | 'pastel' | 'darkBluePastel' | 'lightBluePastel' | 'retro';

export const themes: ThemeName[];

export function setTheme(themeName: ThemeName): void;

export function getTheme(): ThemeName | 'simple';

export function initTheme(themeName?: ThemeName): void;

export function info(): void;