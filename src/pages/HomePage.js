import { useState, useEffect } from "react";
import axios from "axios";

import { Game } from "../components/Game";

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "x-rapidapi-key":
            "db67a6793fmsh3327e1b70f5e65dp145054jsn38581f4d7f1e",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setGames(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    handleGameList();
  }, []);
  return (
    <div className="home">
      {games.map((game, index) => {
        return <Game game={game} key={index} />;
      })}
    </div>
  );
};

export default HomePage;
