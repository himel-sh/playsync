import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Our NewsLetter</h2>

      {/* Newsletter Card */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center max-w-xl mx-auto">
        <span className="text-xl md:text-4xl font-bold text-primary tracking-tight hidden sm:inline-block">
          Play<span className="text-secondary">Sync</span>
        </span>
        <p className="text-gray-300 text-2xl md:text-3xl font-bold mb-4 text-center">
          Stay updated with the latest game news.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full flex-1 text-black"
          />
          <button className="btn btn-primary text-white w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
