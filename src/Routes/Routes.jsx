import { Await, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Away from "../pages/Away/Away";
import About_us from "../pages/About_us/About_us";
import Contact from "../pages/Contact/Contact";
import Registration from "../pages/Authentication/Registration/Registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'about',
            element:<About_us></About_us>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);