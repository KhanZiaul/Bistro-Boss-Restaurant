import MainLayout from "../Layouts/MainLayout";

import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

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
            }
        ]
    }
]);
export default router;