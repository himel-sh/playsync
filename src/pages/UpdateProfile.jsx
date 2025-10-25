import React, { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

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
      console.error(error);
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to update profile.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        background: "radial-gradient(circle at center, #a5f3fc, #ffffff 80%)",
      }}
    >
      <div className="card w-full max-w-sm shadow-2xl p-6 bg-white rounded-2xl border-4 border-cyan-300">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-cyan-600">
          Update Information
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full border-cyan-400 focus:border-cyan-500 focus:ring focus:ring-cyan-200"
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
              className="input input-bordered w-full border-cyan-400 focus:border-cyan-500 focus:ring focus:ring-cyan-200"
              placeholder="Enter photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg transform transition-all hover:scale-105 mt-4"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
