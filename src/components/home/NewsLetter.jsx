import React, { useState } from "react";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    setTimeout(() => {
      Swal.fire({
        title: "Subscribed!",
        text: "You've successfully subscribed to our newsletter.",
        icon: "success",
        confirmButtonColor: "#16a34a",
        timer: 2500,
        showConfirmButton: false,
      });
      setEmail("");
    }, 1000);
  };

  return (
    <div className="mt-8 px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Our Newsletter
      </h2>

      <form
        onSubmit={handleSubscribe}
        className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 max-w-xl mx-auto w-full"
      >
        {/* Brand */}
        <span className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 tracking-tight mb-4 block text-center">
          PlaySync
        </span>

        <p className="text-gray-300 text-lg sm:text-xl font-medium mb-6 text-center">
          Stay updated with the latest game news.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full flex-1 text-white px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:scale-105 transition-transform shadow-md"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
