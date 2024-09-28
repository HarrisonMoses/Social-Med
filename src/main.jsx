import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Notfound from './components/Notfound.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<h1>Home</h1>,
    errorElement:<Notfound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
