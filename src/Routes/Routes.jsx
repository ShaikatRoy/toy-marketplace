import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Blogs from "../pages/Home/Blogs/Blogs";
import AllToys from "../pages/Home/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/AddToys/AddToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/allToys',
          element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
        },
        {
          path: '/addAtoy',
          element: <AddToys></AddToys>
        }
      ]
    },
  ]);

  export default router;