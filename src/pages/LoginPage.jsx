import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import bgImg from "../../src/assets/5153829.jpg";

const LoginPage = () => {
  const { signin, user, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
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
      .catch((error) => {
        console.log(error);
      });
  };

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
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
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Login Failed",
          text:
            error.message.includes("auth/invalid-credential") ||
            error.message.includes("wrong-password")
              ? "Invalid email or password. Please try again."
              : "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-bold text-center text-3xl mt-4">
          {user ? "Switch to another Account" : "Login Your Account"}
        </h1>

        <form onSubmit={handlelogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-accent"
            >
              <FcGoogle size={20} />
              Login with Google
            </button>

            <p className="mt-4 text-center">
              Don’t have an account?{" "}
              <Link className="text-primary font-semibold" to="/auth/register">
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
