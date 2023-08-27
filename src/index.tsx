// Internal Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./index.css";

// App Component
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
