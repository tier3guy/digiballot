// Internal Imports
import { Suspense, useEffect } from "react";
import Layout from "./Layout";

// External Imports
import { Routes, Route, useNavigate } from "react-router-dom";

// Routings
import { AppRoutes, AuthRoutes } from "./routes";

// Hooks
import { useRootContext } from "./hooks";

const App = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useRootContext();

  useEffect(() => {
    if (!isLoggedIn) {
      if (
        window.location.pathname === "/auth/login" ||
        window.location.pathname === "/auth/signup"
      ) {
      } else navigate("/auth/login");
    } else navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <Layout>
      <Suspense>
        {isLoggedIn && (
          <Routes>
            {AppRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={<route.element />}
                />
              );
            })}
          </Routes>
        )}
        {!isLoggedIn && (
          <Routes>
            {AuthRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={<route.element />}
                />
              );
            })}
          </Routes>
        )}
      </Suspense>
    </Layout>
  );
};

export default App;
