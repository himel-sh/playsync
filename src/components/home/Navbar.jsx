import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/Adobe Express - file.png";
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
        console.error("Logout failed:", error);
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
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }
        >
          Games
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="PlaySync Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight hidden sm:inline-block">
              Play<span className="text-secondary">Sync</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost"
              aria-label="Open menu"
            >
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md right-0"
            >
              {navLinks}
            </ul>
          </div>

          <ul className="menu menu-horizontal gap-3 hidden lg:flex">
            {navLinks}
          </ul>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full border border-primary"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                    {user.displayName
                      ? user.displayName.charAt(0).toUpperCase()
                      : "U"}
                  </div>
                )}
                <span className="font-medium hidden sm:inline-block">
                  {user.displayName || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error btn-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn btn-outline btn-sm">
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-primary btn-sm text-white"
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
