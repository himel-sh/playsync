import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white p-10 mt-10">
      {/* Brand Section */}
      <aside>
        <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          PlaySync
        </p>
        <p className="text-gray-400 mt-1">Your hub for all things gaming.</p>
      </aside>

      {/* Games Section */}
      <nav>
        <h6 className="footer-title text-gray-400 uppercase tracking-wider">
          Games
        </h6>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Popular Games
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          New Releases
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Top Rated
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Categories
        </a>
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="footer-title text-gray-400 uppercase tracking-wider">
          Company
        </h6>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          About PlaySync
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Contact
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Careers
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Press
        </a>
      </nav>

      {/* Legal Section */}
      <nav>
        <h6 className="footer-title text-gray-400 uppercase tracking-wider">
          Legal
        </h6>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Terms of Use
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Privacy Policy
        </a>
        <a className="link link-hover hover:text-yellow-400 transition-colors">
          Cookie Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
