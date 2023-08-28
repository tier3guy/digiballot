// Internal Imports
import { Suspense } from "react";
import Layout from "./Layout";

// External Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routings
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
};

export default App;
