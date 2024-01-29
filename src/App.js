import './App.css';
import Home from './Components/Home-Component'
import LoveStory from './Components/LoveStory';
import HappyCouple from './Components/HappyCouple';
import Menu from './Components/Menu-Component';
import Map from './Components/Map-Component';
import SocialMediaComponent from './Components/SocialMedia-Component';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Bonheur Royale' rel='stylesheet'></link>
      <header className="App-header">
      <Home/>
      <LoveStory/>
      <HappyCouple/>
      <Menu/>
      <Map/>
      <SocialMediaComponent/>
      </header>
    </div>
  );
}

export default App;
