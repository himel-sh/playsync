import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const GamesDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const gameDetails = data.find((g) => g.id === id);
    setGame(gameDetails || null);
  }, [data, id]);

  useEffect(() => {
    if (game) {
      document.title = `${game.title}`;
    }
  }, [game]);

  if (!game)
    return <div className="p-8 text-center">Loading game details...</div>;

  return (
    <div className="w-full min-h-screen py-10">
      <div className="w-full h-screen relative rounded-2xl overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8 text-white max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">{game.title}</h1>
          <p className="text-lg mb-2">Category: {game.category}</p>
          <p className="text-lg mb-2">By {game.developer}</p>
          <p className="text-yellow-400 font-bold text-xl mb-4">
            {game.ratings} ⭐
          </p>
          <p className="mb-6 max-w-xl">{game.description}</p>
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-max"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
