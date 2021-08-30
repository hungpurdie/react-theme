import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const initialTheme = localStorage.getItem('data-theme')
    ? JSON.parse(localStorage.getItem('data-theme'))
    : 'light';
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    localStorage.setItem('data-theme', JSON.stringify(theme));
  }, [theme]);

  const handleSetTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
