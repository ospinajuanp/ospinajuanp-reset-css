import { ThemeName } from './index';

export const themes: ThemeName[];

export function loadTheme(themeName: ThemeName): Promise<void>;

export default Record<ThemeName, () => Promise<any>>;