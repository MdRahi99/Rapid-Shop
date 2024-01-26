import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Shared/Error/Error";
import Main from "../Layouts/Main";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Customers/Customers";
import Orders from "../Pages/Orders/Orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/customers",
                element: <Customers />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />
    }
]);