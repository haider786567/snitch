import { createBrowserRouter } from "react-router";
import Register from "../Features/auth/pages/Register.jsx";
import Login from "../Features/auth/pages/Login.jsx";
import SellerCreatePage from "../Features/products/pages/SellerCreatePage.jsx";
import Dashboard from "../Features/products/pages/Dashboard.jsx";
import Protected from "../Features/auth/component/Protected.jsx";
import Home from "../Features/products/pages/Home.jsx";
import ProductDetail from "../Features/products/pages/ProductDetail.jsx";
import SellerProductDetails from "../Features/products/pages/SellerProductDetails.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
        path: "/product/:id",
        element: <ProductDetail />
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
                path: "/seller/product/:productId",
                element: <Protected role="seller" >
                    <SellerProductDetails />
                </Protected>
            }
        ]
    }
])