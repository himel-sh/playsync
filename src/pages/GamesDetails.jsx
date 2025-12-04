import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

// Component for a clean, individual detail row
const DetailItem = ({ label, value }) => (
  <div className="text-sm p-3 bg-gray-100/50 rounded-lg shadow-sm">
    <span className="font-semibold text-gray-700 block mb-0.5">{label}:</span>{" "}
    <span className="text-gray-800 font-medium">
      {Array.isArray(value) ? value.join(", ") : value}
    </span>
  </div>
);

const GamesDetails = () => {
  const allGames = useLoaderData();
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Find the game details immediately
  const game = allGames.find((g) => g.id === id);

  // Set the document title
  useEffect(() => {
    if (game) {
      document.title = game.title;
    } else {
      document.title = "Game Details";
    }
  }, [game]);

  // Handle "Not Found" case
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-white">
        <div className="text-center p-10 border rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-red-600">
            Game Not Found
          </h2>
          <p className="text-lg text-gray-600">
            Please check the URL or return to the main list.
          </p>
        </div>
      </div>
    );
  }

  // Destructure for cleaner JSX
  const {
    title,
    category,
    developer,
    ratings,
    description,
    coverPhoto,
    releaseDate,
    price,
    platforms,
    gameModes,
    languageSupport,
    ageRating,
  } = game;

  const handleDownload = () => {
    if (!user) {
      return navigate("/auth/login");
    }
    window.open(game.downloadLink, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-white pb-20">
      {/* --- HERO SECTION: Image and Overlaid Details --- */}
      <div className="w-full h-[70vh] relative overflow-hidden shadow-2xl">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Text Details */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-5xl">
          <p className="text-sm font-semibold uppercase text-blue-300 mb-2 tracking-wider">
            {category}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
            {ratings} <span className="text-2xl ml-1">⭐</span>
            <span className="ml-4 text-lg font-normal text-gray-300">
              By {developer}
            </span>
          </p>
          <p className="mb-6 max-w-xl text-gray-200 text-lg">
            {description.substring(0, 200)}...
          </p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg shadow-xl text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:opacity-90 transition duration-300"
          >
            Download Now
          </button>
        </div>
      </div>

      {/* --- DETAIL SECTION: Full Description and Technical Specs --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
              Full Description
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Key Info Side Panel */}
          <div className="lg:col-span-1 p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Key Information
            </h2>

            <div className="space-y-4">
              <DetailItem label="Release Date" value={releaseDate} />
              <DetailItem label="Age Rating" value={ageRating} />
              <div className="p-3 rounded-lg shadow-md  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
                <span className="font-bold block text-lg mb-1">Price:</span>
                <span className="text-3xl font-extrabold">{price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- TECHNICAL SPECIFICATIONS --- */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DetailItem label="Platforms" value={platforms} />
            <DetailItem label="Game Modes" value={gameModes} />
            <DetailItem label="Languages" value={languageSupport} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
