import React, { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      Swal.fire({
        title: "Missing Fields",
        text: "Please fill in both name and photo URL.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        title: "Profile Updated!",
        text: "Your information has been successfully updated.",
        icon: "success",
        confirmButtonColor: "#16a34a",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/my-profile");
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to update profile.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
        <h2 className="text-4xl font-extrabold mb-3 text-pink-600">
          Access Required
        </h2>
        <p className="text-lg text-gray-500">
          Please log in to update your profile details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
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
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4 text-left">
          <div>
            <label className="label text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full border-gray-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 rounded-lg"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label text-lg font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              className="input input-bordered w-full border-gray-300 focus:border-yellow-400 focus:ring focus:ring-yellow-200 rounded-lg"
              placeholder="Enter photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl font-bold text-yellow-500 bg-white border-2 border-yellow-400 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Update Information
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfile;
