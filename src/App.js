import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import playersData from "./Data/Data.json"
import { useEffect, useState } from 'react';
import PlayersList from './PlayersList/PlayersList';
import PlayersSelected from './PlayersSelected/PlayersSelected';


function App() {
  const[players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(playersData);
  }, []);
  
  const playerHandler = (player) => {
    setCart([...cart, player]);
  }

  return (
    <div className="App">
      <h1>ICC World Cup Player Selection</h1>
      <div className="d-flex flex-wrap">
        <div className="player-container d-flex flex-wrap w-75">
          {players.map(player => <PlayersList playerHandler={playerHandler} key={player.id} player={player} ></PlayersList>)}
        </div>
        <PlayersSelected key={cart.id} cart={cart}></PlayersSelected>
      </div>
    </div>
  );
}

export default App;
