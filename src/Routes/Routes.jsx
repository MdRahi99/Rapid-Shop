import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Shared/Error/Error";
import Main from "../Layouts/Main";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Customers/Customers";
import Orders from "../Pages/Orders/Orders";
import SignIn from "../Pages/Register/SignIn/SignIn";
import SignUp from "../Pages/Register/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ProductsList from "../Pages/ProductsList/ProductsList";
import ProductDetails from "../Pages/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <PrivateRoute><Main /></PrivateRoute>,
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
                path: '/dashboard/products-list',
                element: <ProductsList />
            },
            {
                path: '/dashboard/products/product-details/:id',
                element: <ProductDetails />
            },
            {
                path: '/dashboard/products/cart',
                element: <Cart />
            },
            {
                path: "/dashboard/customers",
                element: <Customers />,
            },
            {
                path: "/dashboard/orders",
                element: <Orders />,
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