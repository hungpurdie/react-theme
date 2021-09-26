import React from 'react';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/themes/ThemeProvider';
import HomePage from './Pages/Home/index';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="App" data-theme={theme}>
      <HomePage />
    </div>
  );
}

export default App;
