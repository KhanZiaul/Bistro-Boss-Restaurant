import MainLayout from "../Layouts/MainLayout";
import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Orders/Order/Order";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Private from "../Pages/Private/Private";
import PrivateProvider from "../Provider/PrivateProvider/PrivateProvider";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PayemtHistory from "../Pages/Dashboard/PaymentHistory/PayemtHistory";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
                
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/private',
                element:<PrivateProvider><Private></Private></PrivateProvider>
            }
        ]
    },
    {
        path:"dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'payment',
                element:<PayemtHistory></PayemtHistory>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            }
        ]
    }
]);
export default router;