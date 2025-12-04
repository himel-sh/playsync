import React, { use, useState } from "react";
import { NavLink } from "react-router";
const gamePromise = fetch("/gamedata.json").then((res) => res.json());

const Games = () => {
  const games = use(gamePromise);

  // State to hold the selected sort option
  const [sortOption, setSortOption] = useState("rating-desc");

  // Function to sort games based on selection
  const sortedGames = [...games].sort((a, b) => {
    if (sortOption === "rating-desc") {
      return parseFloat(b.ratings) - parseFloat(a.ratings);
    } else if (sortOption === "rating-asc") {
      return parseFloat(a.ratings) - parseFloat(b.ratings);
    } else if (sortOption === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="my-12">
      <title>PlaySync | Games</title>
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Total Games ({games.length})</h2>
        <div className="flex items-center gap-2 mt-2 lg:mt-0">
          <span className="text-gray-700 font-medium whitespace-nowrap">
            Sort by:
          </span>
          <select
            className="select select-bordered select-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="rating-desc">Rating: High → Low</option>
            <option value="rating-asc">Rating: Low → High</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {sortedGames.map((game) => (
          <NavLink
            to={`/games/${game.id}`}
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
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Games;
