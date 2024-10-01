import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import IndividualProperty from "../components/IndividualProperty";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element:<Home/>,
            loader: () => fetch('/properties.json')
        },
        {
            path:'/details',
            element:<Details/>,
            loader: () => fetch('/property.json')
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/profile',
            element:<Login/>
        },
        {
            path:'/orders',
            element:<Login/>
        },
        {
            path:'/details/:id',
            element:<PrivateRoutes><IndividualProperty/></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;
