// Imports
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));

interface Route {
  exact: boolean;
  path: string;
  element: React.FunctionComponent;
}

export const AuthRoutes: Array<Route> = [
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

export const AppRoutes: Array<Route> = [
  {
    path: "/",
    exact: true,
    element: Home,
  },
  {
    path: "/profile",
    exact: true,
    element: Profile,
  },
];
