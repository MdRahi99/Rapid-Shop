import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Shared/Error/Error";
import Main from "../Layouts/Main";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Customers/Customers";
import Orders from "../Pages/Orders/Orders";
import SignIn from "../Pages/Register/SignIn/SignIn";
import SignUp from "../Pages/Register/SignUp/SIgnUp";

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Main />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/products",
                element: <Products />,
            },
            {
                path: "/dashboard/customers",
                element: <Customers />,
            },
            {
                path: "/dashboard/orders",
                element: <Orders />,
            },
            {
                path: "/dashboard/cart",
                element: <Cart />,
            },
        ],
    },
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/register',
        element: <SignUp />
    },
    {
        path: "*",
        element: <Error />
    }
]);