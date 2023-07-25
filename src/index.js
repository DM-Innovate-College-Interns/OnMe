import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LoginScreen from "./Components/LoginScreen";
import GroupSelectScreen from "./Components/GroupSelectScreen";
import GroupScreen from "./Components/GroupScreen";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <GroupScreen color={"#0e3f10"} />
  </StrictMode>
);