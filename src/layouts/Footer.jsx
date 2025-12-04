import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      {/* Container with max width */}
      <div className="max-w-7xl mx-auto footer sm:footer-horizontal">
        <aside>
          <Link
            to="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
          >
            PlaySync
          </Link>
          <p className="text-gray-400 mt-1">Your hub for all things gaming.</p>
        </aside>

        {/* Games Section */}
        <nav>
          <h6 className="footer-title text-gray-400 uppercase tracking-wider">
            Games
          </h6>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Popular Games
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            New Releases
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Top Rated
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Categories
          </Link>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title text-gray-400 uppercase tracking-wider">
            Company
          </h6>

          <Link
            to="/about-us"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            About PlaySync
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Careers
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Press
          </Link>
        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className="footer-title text-gray-400 uppercase tracking-wider">
            Legal
          </h6>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Terms of Use
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </Link>

          <Link
            to="/"
            className="link link-hover hover:text-yellow-400 transition-colors"
          >
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
