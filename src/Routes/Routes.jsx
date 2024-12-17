import { Await, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Away from "../pages/Away/Away";
import About_us from "../pages/About_us/About_us";
import Contact from "../pages/Contact/Contact";
import Registration from "../pages/Authentication/Registration/Registration";
import Login from "../pages/Authentication/Registration/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Overview from "../pages/Dashboard/Overview";
import PrivateRoutes from "./Private/PrivateRoutes";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About_us></About_us>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path:"/dashboard/add-product",
        element:<AddProduct></AddProduct>
      }
    ],
  },
]);
