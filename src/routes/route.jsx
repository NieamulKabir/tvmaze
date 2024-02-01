import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import Shows from "../pages/Shows/Shows";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/shows/:showId",
        element: <ShowDetails />,
      },
    ],
  },
]);

export default routes;
