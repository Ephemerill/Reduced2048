import { createContext, useContext, useState } from 'react';

export type ThemeOption = {
  id: string;
  name: string;
  imagePath: string;
};

export const themes: ThemeOption[] = [
  { id: 'numbers', name: 'Reduced Cakes', imagePath: '/tile-images/reduced' },
  { id: 'pokemon', name: 'Real Reduced Cakes', imagePath: '/tile-images/real' },
  { id: 'emoji', name: 'Cupcakes', imagePath: '/tile-images/cupcakes' },
  // Add more themes here
];

type ThemeContextType = {
  currentTheme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(themes[0]);

  const setTheme = (theme: ThemeOption) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 