import { createBrowserRouter } from "react-router";
import Register from "../Features/auth/pages/Register.jsx";
import Login from "../Features/auth/pages/Login.jsx";
import SellerCreatePage from "../Features/products/pages/SellerCreatePage.jsx";
import Dashboard from "../Features/products/pages/Dashboard.jsx";
import Protected from "../Features/auth/component/Protected.jsx";
import Home from "../Features/products/pages/Home.jsx";
import ProductDetail from "../Features/products/pages/ProductDetail.jsx";
import SellerProductDetails from "../Features/products/pages/SellerProductDetails.jsx";
import Cart from "../Features/cart/pages/cart.jsx";
import AppLayout from "../app/AppLayout.jsx";

export const routes = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <AppLayout />,
        children:[
            {
        path: "/product/:id",
        element: <ProductDetail />
        },
        {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <Protected><Cart /></Protected>

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
            },
            {
                path: "/seller/products/:productId",
                element: <Protected role="seller" >
                    <SellerProductDetails />
                </Protected>
            }
        ]
    }
        ]
    }

])