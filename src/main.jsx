// src/main.js

import React from "react";
import ReactDOM from "react-dom/client";
import AppShell from "./app/AppShell.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
);
