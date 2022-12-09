import './App.css';
import Header from './components/Header';
import InputSection from './components/InputSection';
import EightBall from './components/8Ball';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-body">
        <InputSection/>
        <EightBall/>
      </div>
    </div>
  );
}

export default App;
