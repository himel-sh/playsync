import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  { path: "/", element: <h2>home layout</h2> },
  {
    path: "/auth",
    element: <h2>auth layout</h2>,
  },
  {
    path: "/game",
    element: <h2>game layout</h2>,
  },
  {
    path: "/*",
    element: <h2>404</h2>,
  },
]);

export default router;
