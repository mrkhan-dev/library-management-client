import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Toaster} from "react-hot-toast";

import {RouterProvider} from "react-router-dom";
import router from "./routes/Router";
import {HelmetProvider} from "react-helmet-async";
import AuthProvider from "./FirebaseProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="bottom-left" reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
