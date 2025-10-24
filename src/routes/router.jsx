import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import PlantDetails from "../pages/PlantDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPass from "../pages/ForgetPass";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "plants",
        Component: Plants,
        loader: () => axios("/plants.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "plants/:plantId",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        Component: SignUp,
      },
      {
        path: "login",
        Component: SignIn,
      },
      {
        path: "/forgot-password",
        Component: ForgetPass,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;