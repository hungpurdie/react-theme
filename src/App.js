import { ThemeContext } from 'context/themes/ThemeProvider';
import { useContext } from 'react';
import './App.css';
import HomePage from './Pages/Home';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme}>
      <HomePage />
    </div>
  );
}

export default App;
