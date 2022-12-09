import './App.css';
import Header from './components/Header';
import InputSection from './components/InputSection';
import EightBall from './components/8Ball';
import React, { useContext } from 'react';
import { ThemeContext } from './hooks/themeContext';
import SwitchButton from './components/Button/button';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? "app-dark" : "app-light"}`}>
      <div className="app-header">
        <Header/>
      </div>
      <div className="app-body">
        <InputSection/>
        <EightBall/>
      </div>
      <SwitchButton/>
    </div>
  );
}

export default App;
