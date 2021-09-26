import { useContext } from 'react';
import { ThemeContext } from '../../context/themes/ThemeProvider';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="header">
      <ThemeToggle />
      <h1>This is {theme} Mode</h1>
    </header>
  );
};

export default Header;
