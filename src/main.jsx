import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GalleryProvider } from "./context/GalleryContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
