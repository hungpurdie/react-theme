import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themes/ThemeProvider';

const ThemeToggle = () => {
  const { handleSetTheme, theme } = useContext(ThemeContext);

  const handleThemeToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleSetTheme(theme);
  };
  return (
    <button>
      <button className="theme__toggler" onClick={handleThemeToggle}>
        {theme === 'light' ? '🌞' : '🔅'}
      </button>
    </button>
  );
};

export default ThemeToggle;
