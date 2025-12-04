import React, { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

import { Link } from "react-router"; // Use 'react-router-dom' for Link in modern React Router

import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Helper function to format the creation time

  const formatCreationTime = (timestamp) => {
    if (!timestamp) return "N/A";

    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",

      month: "long",

      day: "numeric",
    });
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
        <h2 className="text-4xl font-extrabold mb-3 text-pink-600">
          Access Required
        </h2>

        <p className="text-lg text-gray-500">
          Please log in to view your profile details.
        </p>

        <Link
          to="/login" // Assuming you have a login route
          className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  // Use optional chaining for safe access

  const creationDate = formatCreationTime(user.metadata?.creationTime);

  const displayName = user.displayName || "Anonymous User";

  const photoURL = user.photoURL || "https://i.ibb.co/2gQd1pM/default-user.png";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      // New background style: Radiant gradient from center (pink-50) fading to white edges

      style={{
        background:
          "radial-gradient(circle at center, #fdf2f8 0%, #ffffff 70%, #ffffff 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 border-t-8 border-yellow-400/80 text-center transform hover:shadow-3xl transition-shadow duration-500"
      >
        {/* Profile Image/Avatar */}

        <div className="avatar mb-6">
          <div className="w-36 rounded-full ring-4 ring-pink-500 ring-offset-4 ring-offset-white mx-auto shadow-xl">
            <img
              src={photoURL}
              alt={displayName}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* User Details */}

        <h2 className="text-4xl font-extrabold text-gray-800 mb-1 leading-tight">
          {displayName}
        </h2>

        <p className="text-md text-pink-500 mb-6 font-mono font-semibold">
          {user.email}
        </p>

        {/* Membership Info */}

        <p className="text-sm text-gray-500 mt-4 mb-6 pt-3 border-t border-gray-200">
          Member since{" "}
          <span className="font-extrabold text-pink-600 tracking-wide">
            {creationDate}
          </span>
        </p>

        {/* Action Button */}

        <Link
          to="/update-profile"
          className="inline-block py-3 px-6  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  text-white font-bold w-full rounded-xl shadow-xl shadow-pink-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Manage Profile Settings
        </Link>
      </motion.div>
    </div>
  );
};

export default Profile;
