import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import UserContext from "../utils/UserContext.js";
import store from "../utils/store.js";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {

  const [theme,setTheme] = useState("light");
  return <UserContext.Provider value={{ theme,setTheme }}>
    <Provider store={store}>

    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  </UserContext.Provider>
}


const AppRouter = createBrowserRouter([ //configring routing
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
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