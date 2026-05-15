import { ThemeName } from '../index';

export declare const themes: ThemeName[];

export declare function useResetTheme(initialTheme?: ThemeName): {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeName[];
};

export declare function ThemeProvider(props: {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}): JSX.Element;

export declare function useTheme(): {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeName[];
};