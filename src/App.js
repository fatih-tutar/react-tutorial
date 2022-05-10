import './App.css';
import Keywords from './parts/Keywords';
import TextComponent from './parts/TextComponent';
import Variables from './parts/Variables';

function App() {
  return (
    <div className="App">
      <Variables/>
      <Keywords/>
      <TextComponent/>
    </div>
  );
}

export default App;
