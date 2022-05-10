import './App.css';
import Keywords from './parts/Keywords';
import TextComponent from './parts/TextComponent';
import Variables from './parts/Variables';
import WeatherCC from './parts/WeatherCC';
import WeatherFC from './parts/WeatherFC';

function App() {
  return (
    <div className="App">
      <h1>06 - Function and Class Component</h1>
      <WeatherCC/>
      <WeatherFC/>
      <Variables/>
      <Keywords/>
      <TextComponent/>
    </div>
  );
}

export default App;
