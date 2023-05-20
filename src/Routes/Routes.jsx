import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Blogs from "../pages/Home/Blogs/Blogs";
import AllToys from "../pages/Home/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/AddToys/AddToys";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

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
          element:<AllToys></AllToys>
        },
        {
          path: '/addAtoy',
          element: <AddToys></AddToys>
        },
        {
          path: 'details/:id',
          element: <DetailsPage></DetailsPage>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;