import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import bgImg from "../../src/assets/5153829.jpg";

const RegisterPage = () => {
  const errorMessages = {
    "auth/email-already-in-use":
      "This email is already registered. Try logging in.",
    "auth/weak-password": "Password should be at least 6 characters.",
  };

  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate("/");
        Swal.fire({
          title: "Welcome!",
          text: `Registered & logged in as ${user.displayName || user.email}`,
          icon: "success",
          confirmButtonColor: "#16a34a",
          timer: 2500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Sign-In Failed",
          text: "Unable to complete Google sign-in. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (password.length < 6) {
      return Swal.fire({
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }

    if (!uppercasePattern.test(password)) {
      return Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one uppercase letter.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }

    if (!lowercasePattern.test(password)) {
      return Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one lowercase letter.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              title: "Profile Update Failed",
              text: "Your account was created but we couldn't update your profile details.",
              icon: "warning",
              confirmButtonColor: "#f59e0b",
            });
          });

        form.reset();

        Swal.fire({
          title: "Registration Successful!",
          text: `Welcome, ${name}! Your account has been created.`,
          icon: "success",
          confirmButtonColor: "#16a34a",
          timer: 2500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Registration Failed",
          text: errorMessages[error.code] || error.message,
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
      <title>PlaySync | Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="font-bold text-center text-3xl mt-4">
          Register Account
        </h1>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
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

            {/* Gradient Register Button */}
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:opacity-90 transition duration-300"
            >
              Register
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
              Register with Google
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
