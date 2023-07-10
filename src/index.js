import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./Stylesheets/LoginScreen.css";
import "./Stylesheets/General.css";

import LoginScreen from "./Components/LoginScreen";
import GroupSelectScreen from "./Components/GroupSelectScreen";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <GroupSelectScreen />
  </StrictMode>
);