import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "GameStudioX",
    logo: "https://i.ibb.co.com/HTb3whKP/Gemini-Generated-Image-r8065dr8065dr806-Edited-3.png",
  },
  {
    name: "PlayMasters",
    logo: "https://i.ibb.co.com/wFfTVVVK/Gemini-Generated-Image-r8065dr8065dr806-Edited-2.png",
  },
  {
    name: "NextGen Games",
    logo: "https://i.ibb.co.com/0RSVF6FX/Gemini-Generated-Image-r8065dr8065dr806-Edited.png",
  },
  {
    name: "PixelWorks",
    logo: "https://i.ibb.co.com/M58bXPNC/Gemini-Generated-Image-r8065dr8065dr806-Edited-1.png",
  },
];

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="max-w-7xl mx-auto bg-gradient-to-r from-white via-yellow-50 to-pink-50 rounded-3xl p-10 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-12 object-contain mb-2"
            />
            <span className="text-gray-700 font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Partners;
