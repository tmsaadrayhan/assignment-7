import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import playersData from "./Data/Data.json"
import { useEffect, useState } from 'react';
import PlayersList from './PlayersList/PlayersList';
import PlayersSelected from './PlayersSelected/PlayersSelected';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    document.title = "ICC World Cup Player Selection"
  })
  useEffect(() => {
    setPlayer(playersData);
  }, []);

  const playerHandler = (player) => {
    if (cart.includes(player)) {
      toast('You have already added this player.')
    } else {
      setCart([...cart, player]);
    }

  }

  return (
    <div className="App mt-4">
      <h1>ICC World Cup Player Selection</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="player-container d-flex flex-wrap w-75">
          {players.map(player => <PlayersList playerHandler={playerHandler} key={player.id} player={player} ></PlayersList>)}
        </div>
        <Toaster />
        <PlayersSelected key={cart.id} cart={cart}></PlayersSelected>
      </div>
    </div>
  );
}

export default App;
