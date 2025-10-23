import React, { use } from "react";

const popularGamePromise = fetch("/gamedata.json").then((res) => res.json());

const PopularGames = () => {
  const popularGames = use(popularGamePromise);

  const topGames = popularGames
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Popular Games ({topGames.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topGames.map((game) => (
          <div
            key={game.id}
            className="bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{game.title}</h3>

              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p className="text-sm text-gray-400 mb-1">{game.category}</p>
                  <p className="text-sm text-gray-400 mb-2">
                    By {game.developer}
                  </p>
                </div>
                <span className="text-yellow-400 font-bold">
                  {game.ratings} ⭐
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
