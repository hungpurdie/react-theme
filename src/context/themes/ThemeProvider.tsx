import React, { createContext, useEffect, useState } from 'react';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

interface Theme {
  theme: string;
  handleSetTheme: (theme: string) => void;
}

const initialContext: Theme = {
  theme: '',
  handleSetTheme: () => {},
};

export const ThemeContext = createContext(initialContext);

function ThemeProvider({ children }: ThemeContextProviderProps) {
  const initialTheme = localStorage.getItem('data-theme')
    ? JSON.parse(localStorage.getItem('data-theme')!)
    : 'light';

  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    localStorage.setItem('data-theme', JSON.stringify(theme));
  }, [theme]);

  const handleSetTheme = (theme: string) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
