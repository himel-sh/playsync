import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-10 bg-white rounded-2xl p-10 shadow-xl"
    >
      {/* Section Title */}
      <h2
        className="text-5xl font-extrabold text-left mb-6 
        bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
        bg-clip-text text-transparent bg-[length:150%_150%]"
      >
        About PlaySync
      </h2>

      <p className="max-w-3xl mt-2 text-black text-lg font-semibold">
        PlaySync is your gateway to discovering, tracking, and exploring
        thousands of games across all platforms. From indie gems to AAA giants,
        we bring gamers a clean, organized, and immersive way to explore the
        gaming universe.
      </p>

      {/* Divider */}
      <div className="border-b mt-8 mb-4"></div>

      {/* TABS */}
      <div className="tabs tabs-lift text-xl font-bold">
        {/* Our Story */}
        <input
          type="radio"
          name="about_tabs"
          className="tab text-xl font-semibold"
          aria-label="Our Story"
          defaultChecked
        />
        <motion.div
          className="tab-content p-6 leading-8 text-gray-700 text-[17px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>
            PlaySync began with a simple idea — to build a platform where gamers
            can easily find trusted information, reviews, and game details
            without the clutter. We noticed how scattered gaming data was across
            the internet and decided to create a unified place for all gamers.
          </p>

          <p className="mt-4">
            Over the years, PlaySync grew into a community-driven platform that
            celebrates gaming culture. From console lovers to PC enthusiasts and
            mobile gamers, our mission is to connect every type of player with
            the games they love.
          </p>

          <p className="mt-4">
            Today, PlaySync serves thousands of gamers with curated lists,
            detailed breakdowns, trending releases, and personalized discovery —
            all built with passion for gaming.
          </p>
        </motion.div>

        {/* Mission */}
        <input
          type="radio"
          name="about_tabs"
          className="tab text-xl font-semibold"
          aria-label="Our Mission"
        />
        <motion.div
          className="tab-content p-6 leading-8 text-gray-700 text-[17px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>
            Our mission is to make game discovery fun, simple, and meaningful.
            We want gamers to spend less time searching and more time playing.
          </p>

          <p className="mt-4">
            PlaySync is built around transparency, accurate data, and smart
            recommendations. We work every day to offer players clean details,
            ratings, genres, platforms, and technical information — all in one
            click.
          </p>

          <p className="mt-4">
            At the heart of our mission is empowering creators, developers, and
            gamers with the information they need to enjoy games to the fullest.
          </p>
        </motion.div>

        {/* Success */}
        <input
          type="radio"
          name="about_tabs"
          className="tab text-xl font-semibold"
          aria-label="Our Success"
        />
        <motion.div
          className="tab-content p-6 leading-8 text-gray-700 text-[17px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>
            PlaySync’s success comes from its growing community of passionate
            gamers. By combining powerful search, curated collections, and clean
            UI, we’ve built a platform gamers return to every day.
          </p>

          <p className="mt-4">
            Our achievements include featuring over 5,000+ games, integrating
            multiple genres and categories, and building a fast, responsive
            gaming catalog trusted by gamers worldwide.
          </p>

          <p className="mt-4">
            Every milestone pushes us to bring new features, smarter discovery,
            and a better experience.
          </p>
        </motion.div>

        {/* Team */}
        <input
          type="radio"
          name="about_tabs"
          className="tab text-xl font-semibold"
          aria-label="Team & Community"
        />
        <motion.div
          className="tab-content p-6 leading-8 text-gray-700 text-[17px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>
            PlaySync is powered by a small but passionate team of developers,
            designers, storytellers, and gamers. Our team lives and breathes
            gaming culture — and that passion is reflected in everything we
            build.
          </p>

          <p className="mt-4">
            But the real heart of PlaySync is our community. From feedback to
            suggestions, bug reports to game submissions — PlaySync evolves
            because of gamers like you.
          </p>

          <p className="mt-4">
            Together, we aim to shape the future of game discovery.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
