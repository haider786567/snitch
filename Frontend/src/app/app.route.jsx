import { createBrowserRouter } from "react-router";
import Register from "../Features/auth/pages/Register.jsx";
import Login from "../Features/auth/pages/Login.jsx";

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
    }
])