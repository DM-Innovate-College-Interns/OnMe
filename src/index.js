import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Stylesheets/LoginScreen.css";
import "./Stylesheets/General.css";

import LoginScreen from "./Components/LoginScreen";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <LoginScreen />
  </StrictMode>
);