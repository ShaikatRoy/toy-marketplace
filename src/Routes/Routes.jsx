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
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
          element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
          loader: ({params}) => fetch(`https://figure-mania-server.vercel.app/toys/${params.id}`)
        },
        {
          path: 'myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://figure-mania-server.vercel.app/toys/${params.id}`)
        },
        
        
      ]
      
    },
    {
      path: '*', 
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;