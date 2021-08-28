//In src/components/themeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/Theme/Theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button>
      <button className="theme__toggler" onClick={handleThemeToggle}>
        <span>{theme === 'light' ? '🌞' : '🔅'}</span>
      </button>
    </button>
  );
};

export default ThemeToggle;
