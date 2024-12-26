import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Context.jsx";
import App1 from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App1 />
    </AuthProvider>
  </BrowserRouter>
);
