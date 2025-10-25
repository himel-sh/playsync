import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import GamesDetails from "../pages/GamesDetails";
import Games from "../pages/Games";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import Error from "../pages/Error";
import Forget from "../pages/Forget";

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
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/games/:id",
        element: (
          <PrivateRoute>
            <GamesDetails></GamesDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/gamedata.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/forgetpass",
        element: <Forget></Forget>,
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
