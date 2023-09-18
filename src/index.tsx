// Internal Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// External Imports
import { BrowserRouter as Router } from "react-router-dom";

// Contexts
import RootContextProvider from "./contexts/RootContext";

// Styles
import "./index.css";

// App Component
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RootContextProvider>
      <Router>
        <App />
      </Router>
    </RootContextProvider>
  </StrictMode>
);
