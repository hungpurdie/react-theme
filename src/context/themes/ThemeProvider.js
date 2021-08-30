import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');
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
