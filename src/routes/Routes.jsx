import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Root from "../layouts/Root";
import News from "../Components/Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/news.json"),
        element: <Home></Home>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
