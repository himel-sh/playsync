import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
    });

    if (confirm.isConfirmed) {
      try {
        navigate("/", { replace: true });
        await logout();

        Swal.fire({
          title: "Goodbye!",
          text: "You're logged out successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        Swal.fire({
          title: "Oops!",
          text: "Logout failed. Please try again.",
          icon: "error",
        });
      }
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500"
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500"
          }
        >
          Contact Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive
                ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
                : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500"
            }
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-11/12 flex justify-between items-center">
        {/* Brand Text */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        >
          PlaySync
        </Link>

        <div className="flex items-center gap-3">
          {/* Mobile dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost" aria-label="menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile menu styled too */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md right-0"
            >
              {navLinks}
            </ul>
          </div>

          {/* Desktop nav */}
          <ul className="menu menu-horizontal gap-3 hidden lg:flex">
            {navLinks}
          </ul>

          {/* Auth section */}
          {user ? (
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full border border-yellow-400"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                    {user.displayName
                      ? user.displayName.charAt(0).toUpperCase()
                      : "U"}
                  </div>
                )}

                <span className="font-medium hidden sm:inline-block">
                  {user.displayName || "User"}
                </span>
              </div>

              {/* Logout — gradient border */}
              <button
                onClick={handleLogout}
                className="px-4 py-1 rounded-md font-semibold  bg-transparent border-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:opacity-90 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              {/* Login */}
              <Link
                to="/auth/login"
                className="px-4 py-1 rounded-md border font-semibold border-gray-400 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition"
              >
                Login
              </Link>

              {/* Register — gradient button */}
              <Link
                to="/auth/register"
                className="px-4 py-1 rounded-md font-semibold text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:opacity-90 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
