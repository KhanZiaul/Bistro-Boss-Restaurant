import App from "../App";
import MainLayout from "../Layouts/MainLayout";

import {
    createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <App></App>
            }
        ]
    }
]);
export default router;