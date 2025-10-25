import React from "react";
import { useNavigate } from "react-router";
import err from "../assets/error-404.png";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
      <title>PlaySync | Page Not Found</title>
      <img src={err} alt="404 Error" className="w-72 sm:w-96 mb-6" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-400 text-lg sm:text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary px-6 py-2 text-lg rounded-md shadow-md hover:opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
