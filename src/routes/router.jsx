import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import GamesDetails from "../pages/GamesDetails";
import Games from "../pages/Games";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";

import Loading from "../pages/Loading";
import Error from "../pages/Error";
import Forget from "../pages/Forget";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/games/:id",
        element: <GamesDetails></GamesDetails>,
        loader: () => fetch("/gamedata.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/forgetpass",
        element: <Forget></Forget>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
