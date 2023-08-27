// Imports
import { Home } from "./pages";

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
];

export default Routes;
