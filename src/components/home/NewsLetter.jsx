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
      <h2 className="text-2xl font-bold mb-4 text-center">Our Newsletter</h2>

      <form
        onSubmit={handleSubscribe}
        className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center max-w-xl mx-auto w-full"
      >
        <span className="text-2xl sm:text-4xl font-bold text-primary tracking-tight mb-2 sm:mb-4">
          Play<span className="text-secondary">Sync</span>
        </span>

        <p className="text-gray-300 text-lg sm:text-2xl font-semibold mb-4 text-center">
          Stay updated with the latest game news.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full flex-1 text-black px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="btn btn-primary text-white w-full sm:w-auto px-6 py-2 rounded-md hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
