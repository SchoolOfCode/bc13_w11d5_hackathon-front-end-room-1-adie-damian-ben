import './App.css';
import Header from './components/Header';
import InputSection from './components/InputSection';
import EightBall from './components/8Ball';
import React, { useContext, useState } from 'react';
import { ThemeContext } from './hooks/themeContext';
import SwitchButton from './components/Button/button';
import useFetch from './hooks/useFetch';

function App() {

  const [answer, setAnswer] = useState("");

  const url = `https://magic8ballroom1.onrender.com/`;
  const { data } = useFetch(url);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? "app-dark" : "app-light"}`}>
      <div className="app-header">
        <Header/>
      </div>
      <div className="app-body">
        <InputSection setAnswer={setAnswer} data={data}/>
        <EightBall answer={answer}/>
      </div>
      <SwitchButton/>
    </div>
  );
}

export default App;
