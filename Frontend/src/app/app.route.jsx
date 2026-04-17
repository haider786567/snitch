import { createBrowserRouter } from "react-router";
import Register from "../Features/auth/pages/Register.jsx";
import Login from "../Features/auth/pages/Login.jsx";
import SellerCreatePage from "../Features/products/pages/SellerCreatePage.jsx";
import Dashboard from "../Features/products/pages/Dashboard.jsx";
import Protected from "../Features/auth/component/Protected.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hello world</h1>,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path:"/seller",
        children:[
            {
                path:"/seller/create-product",
                element:<Protected role="seller"><SellerCreatePage /></Protected>
            },
            {
                path:"/seller/dashboard",
                element:<Protected role="seller"><Dashboard /></Protected>
            }
        ]
    }
])