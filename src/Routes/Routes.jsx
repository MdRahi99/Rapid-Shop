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
import PrivateRoute from "./PrivateRoute";
import UserProducts from "../Pages/UserProducts/UserProducts";
import ProductDetails from "../Pages/UserProducts/ProductDetails";

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
        path: '/products',
        element: <Main />,
        children: [
            {
                path: '/products',
                element: <UserProducts />
            },
            {
                path: '/products/product-details/:id',
                element: <ProductDetails />
            },
            {
                path: '/products/cart',
                element: <Cart />
            }
        ]
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