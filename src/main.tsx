import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ on utilise le pipeline Tailwind (pas de CDN)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
