import './App.css';
import Colors from './components/colors/Colors';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Colors/>
    </div>
  );
}

export default App;
