import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGames(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
