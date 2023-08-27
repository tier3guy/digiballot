// Imports
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

interface Route {
  exact: boolean;
  path: string;
  element: React.FunctionComponent;
}

const Routes: Array<Route> = [
  {
    path: "/",
    exact: true,
    element: Home,
  },
  {
    path: "/auth/signup",
    exact: true,
    element: Signup,
  },
  {
    path: "/auth/login",
    exact: true,
    element: Login,
  },
];

export default Routes;
