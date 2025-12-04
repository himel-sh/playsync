import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert on submission
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you shortly.",
      icon: "success",
      confirmButtonColor: "#d946ef",
    });

    // Reset the form
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-10 bg-white rounded-2xl p-10 shadow-xl max-w-6xl mx-auto"
    >
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Contact Us
      </h2>

      <p className="text-gray-700 max-w-2xl text-lg font-medium mb-8">
        Have questions, feedback, or ideas? We're here to help! Fill out the
        form and our team will get back to you shortly.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5 bg-gray-50 p-8 rounded-xl shadow-md"
        >
          <div>
            <label className="font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full mt-1"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Message subject"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full mt-1 h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-bold text-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 bg-black rounded-xl text-white shadow-md"
        >
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>

          <p className="text-gray-300 mb-6">
            We're always excited to hear from our PlaySync gamers. Reach out
            anytime!
          </p>

          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-yellow-400">Email</h4>
              <p className="text-gray-300">support@playsync.com</p>
            </div>

            <div>
              <h4 className="font-bold text-yellow-400">Phone</h4>
              <p className="text-gray-300">+1 (800) 555-PLAY</p>
            </div>

            <div>
              <h4 className="font-bold text-yellow-400">Address</h4>
              <p className="text-gray-300">
                PlaySync HQ
                <br />
                123 Gaming Street, Tech Valley
                <br />
                California, USA
              </p>
            </div>

            <div>
              <h4 className="font-bold text-yellow-400 mb-1">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <a className="hover:text-yellow-400 transition cursor-pointer">
                  🌐
                </a>
                <a className="hover:text-yellow-400 transition cursor-pointer">
                  🐦
                </a>
                <a className="hover:text-yellow-400 transition cursor-pointer">
                  📘
                </a>
                <a className="hover:text-yellow-400 transition cursor-pointer">
                  📸
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
