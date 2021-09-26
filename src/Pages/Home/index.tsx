import { useContext } from 'react';
import Header from '../../components/Header';
import { ThemeContext } from '../../context/themes/ThemeProvider';
import './style.css';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="home">
      <Header />
    </div>
  );
};

export default HomePage;
