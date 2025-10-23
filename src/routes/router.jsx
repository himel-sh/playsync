import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import GamesDetails from "../pages/GamesDetails";
import Games from "../pages/Games";

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
        element: <GamesDetails></GamesDetails>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>auth layout</h2>,
  },

  {
    path: "/*",
    element: <h2>404</h2>,
  },
]);

export default router;
