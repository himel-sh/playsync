import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";

const Forget = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Enter Email",
        text: "Please provide an email address.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);

      Swal.fire({
        title: "Email Sent!",
        html: `A password reset link has been sent to <b>${email}</b>. You will now be redirected to Gmail.`,
        icon: "success",
        confirmButtonColor: "#16a34a",
        timer: 3000,
        showConfirmButton: false,
      });

      setEmail("");

      // Open Gmail after a short delay
      setTimeout(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
      }, 3000);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to send reset email.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        background: "radial-gradient(circle at center, #f0a0f0, #ffffff 80%)",
      }}
    >
      <div className="card w-full max-w-sm shadow-2xl p-6 bg-white rounded-2xl border-4 border-pink-300 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-pink-600">
          Reset Password
        </h1>
        <form onSubmit={handleReset} className="card-body space-y-4">
          <label className="label text-lg font-medium text-gray-700 ">
            Email
          </label>
          <input
            type="email"
            className="input input-bordered w-full border-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200 placeholder-gray-400"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg transform transition-all hover:scale-105"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
