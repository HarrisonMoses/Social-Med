import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Notfound from "./pages/Notfound.jsx";
import About from "./pages/About.jsx";
import Artifacts from "./pages/Artifacts.jsx";
import Team from "./pages/Team.jsx";
import Team2 from "./pages/Team2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "artifacts",
    element: <Artifacts />,
  },
  {
    path:'team',
    element:<Team2/>
  }
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // {/* </StrictMode> */}
);
