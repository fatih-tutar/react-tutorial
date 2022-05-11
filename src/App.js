import './App.css';
import Keywords from './parts/Keywords';
import Props from './parts/Props';
import TextComponent from './parts/TextComponent';
import Variables from './parts/Variables';
import WeatherCC from './parts/WeatherCC';
import WeatherFC from './parts/WeatherFC';

function App() {
  return (
    <div className="App">
      <h1>07 - Using Props in Function Component</h1>
      <h2>Props = Properties</h2>
      <Props status={"sunny"} style={{background:'yellow', color:'black'}}/>
      <Props status={"rainy"} style={{background:'aqua', color:'darkblue'}}/>
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
