import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import bgImg from "../../src/assets/5153829.jpg";

const RegisterPage = () => {
  const errorMessages = {
    "auth/email-already-in-use":
      "This email is already registered. Try logging in.",
    "auth/weak-password": "Password should be at least 6 characters.",
  };
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // ✅ Client-side password validation
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

    // ✅ Only proceed if password passes validation
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-semibold" to="/auth/login">
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
