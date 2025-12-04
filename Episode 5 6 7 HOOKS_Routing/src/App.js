import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router"


const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => (
  <div>
    <Header />
  <Outlet/>
  </div>)

const AppRouter = createBrowserRouter([ //configring routing
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element:<Body/>
      }
      ,
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <h1>404: Page not found</h1>
  },

])
root.render(<RouterProvider router={AppRouter} />)