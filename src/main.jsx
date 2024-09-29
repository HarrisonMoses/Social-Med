import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Notfound from './components/Notfound.jsx';
import Team from './components/Team.jsx';
import HomePage from './components/HomePage.jsx';
import About from './About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound/>,
    children: [],
  },
  {
    path: "team",
    element: <About/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
