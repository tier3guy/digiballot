// Internal Imports
import { Suspense } from "react";

// External Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routings
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={index}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
