import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-8 px-4 sm:px-0">
      {/* Keep h2 exactly as it is */}
      <h2 className="text-2xl font-bold mb-4">Our NewsLetter</h2>

      <div className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center max-w-xl mx-auto w-full">
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
            className="input input-bordered w-full flex-1 text-black px-4 py-2 rounded-md focus:outline-none"
          />
          <button className="btn btn-primary text-white w-full sm:w-auto px-6 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
