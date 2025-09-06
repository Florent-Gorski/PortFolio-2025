// src/index.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");
if (!el) {
  console.error('#root not found in index.html');
} else {
  createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
