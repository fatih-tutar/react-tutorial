import './App.css';
import Counter from './parts/Counter';
import Keywords from './parts/Keywords';
import Props from './parts/Props';
import PropsCC from './parts/PropsCC';
import TextComponent from './parts/TextComponent';
import Variables from './parts/Variables';
import WeatherCC from './parts/WeatherCC';
import WeatherFC from './parts/WeatherFC';

function App() {
  return (
    <div className="App">
      <h1>10 - Using State in Class Component</h1>
      <Counter/>
      <h1>09 - Setting Default Props Values in a Component</h1>
      <Props/>
      <PropsCC/>
      <h1>08 - Using Props in Class Component</h1>
      <PropsCC status={"snowy"} style={{background:"black", color:"grey"}}/>
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
