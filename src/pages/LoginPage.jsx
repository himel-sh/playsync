import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import bgImg from "../../src/assets/5153829.jpg";

const LoginPage = () => {
  const { signin, user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(location.state || "/");
        Swal.fire({
          title: "Welcome!",
          text: `Logged in as ${user.displayName || user.email}`,
          icon: "success",
          confirmButtonColor: "#16a34a",
          timer: 2500,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Google Sign-In Failed",
          text: "Unable to complete Google sign-in. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location.state || "/");
        Swal.fire({
          title: "Welcome back!",
          text: `Logged in as ${user.displayName || user.email}`,
          icon: "success",
          confirmButtonColor: "#16a34a",
          timer: 2500,
          showConfirmButton: false,
        });
        form.reset();
        setEmail("");
      })
      .catch(() => {
        Swal.fire({
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      Swal.fire({
        title: "Enter your email",
        text: "Please type your email before clicking forgot password.",
        icon: "warning",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }
    navigate("/forgetpass", { state: { email } });
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <title>PlaySync | Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-bold text-center text-3xl mt-4">
          {user ? "Switch to another Account" : "Login Your Account"}
        </h1>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <a onClick={handleForgotPassword} className="link link-hover">
                Forgot password?
              </a>
            </div>

            {/* Gradient Login Button */}
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:opacity-90 transition duration-300"
            >
              Login
            </button>

            {/* Gradient Google Sign-In Button */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="mt-2 w-full py-2 rounded-lg flex items-center justify-center gap-2 font-semibold
                         bg-white border-2 border-yellow-400
                         hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500
                         hover:text-white transition duration-300"
            >
              <FcGoogle size={20} />
              Login with Google
            </button>

            <p className="mt-4 text-center">
              Don’t have an account?{" "}
              <Link
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
