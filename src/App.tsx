// External Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routings
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route path={route.path} key={index} element={<route.element />} />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
