import { useState } from 'react';
import './App.css';
import { ThemeContext } from './context/Theme/Theme';

import HomePage from './Pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" data-theme={theme}>
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
