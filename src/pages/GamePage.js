import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const GamePage = () => {
    const [game, setGame] = useState([]);
    const { gameId } = useParams();

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: gameId},
        headers: {
          'x-rapidapi-key': 'db67a6793fmsh3327e1b70f5e65dp145054jsn38581f4d7f1e',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      axios
        .request(options)
        .then(function (response) {
          setGame(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    handleGameList();
  }, [gameId]);
  return (
    <div className="gamepage">
        <img src={game.thumbnail} alt='' />
        <h2>{game.title}</h2>
        <p>{game.description}</p>
      
    </div>
  )
}

export default GamePage
