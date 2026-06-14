import React from "react";
import ReactDOM from "react-dom/client";
import { Resume } from "./Resume/Resume";
import "./Resume/resume.css";

ReactDOM.createRoot(document.getElementById("resume-root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
