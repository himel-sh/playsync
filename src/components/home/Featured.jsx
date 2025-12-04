import React, { use } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const gamePromise = fetch("/gamedata.json").then((res) => res.json());

const Featured = () => {
  const games = use(gamePromise);

  // Shuffle & pick 3 random featured games
  const randomFeatured = [...games].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto bg-gradient-to-r from-yellow-50 via-red-50 to-pink-50 rounded-3xl p-10 shadow-lg mt-16"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Featured Games
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-10">
        Explore some of our hand-picked featured games, chosen for their
        creativity, gameplay, and popularity among our community.
      </p>

      {/* ▼ RANDOM FEATURED GAMES GRID ▼ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {randomFeatured.map((game) => (
          <NavLink
            to={`/games/${game.id}`}
            key={game.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{game.title}</h3>
              <p className="text-sm text-gray-500">{game.category}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-400">
                  By {game.developer}
                </span>

                <span className="text-yellow-500 font-bold">
                  {game.ratings} ⭐
                </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default Featured;
