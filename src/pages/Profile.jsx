import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-700">
        <h2 className="text-3xl font-bold mb-3 text-pink-600">
          No user logged in
        </h2>
        <p className="text-gray-500">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-pink-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="card w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border-t-4 border-pink-400 text-center"
      >
        <div className="avatar mb-5">
          <div className="w-32 rounded-full ring ring-pink-400 ring-offset-base-100 ring-offset-2 mx-auto shadow-md">
            <img
              src={user.photoURL || "https://i.ibb.co/2gQd1pM/default-user.png"}
              alt={user.displayName || "User"}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-pink-600 mb-2">
          {user.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-600 mb-4 font-medium">{user.email}</p>

        <Link
          to="/update-profile"
          className="btn bg-pink-500 hover:bg-pink-600 border-none text-white font-bold w-full mt-3 shadow-lg transition-transform transform hover:scale-105"
        >
          Update Information
        </Link>

        <p className="text-sm text-gray-500 mt-4">
          Member since{" "}
          <span className="font-semibold text-gray-700">
            {user.metadata?.creationTime
              ? new Date(user.metadata.creationTime).toLocaleDateString()
              : "N/A"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Profile;
