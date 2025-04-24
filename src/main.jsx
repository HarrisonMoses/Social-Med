import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Notfound from "./pages/Notfound.jsx";
import About from "./pages/About.jsx";
import Artifacts from "./pages/Artifacts.jsx";
import Team from "./pages/Team.jsx";
import Blog from "./pages/Blog.jsx";

// Add Flowbite script
import "flowbite";

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
    path: "team",
    element: <Team />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
