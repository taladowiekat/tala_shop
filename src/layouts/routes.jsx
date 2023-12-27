import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Register from "../components/web/register/Register.jsx";
import Login from "../components/web/login/Login.jsx";
import Home from "../components/web/home/Home.jsx";
import ProtectedRouter from "../components/web/protectedRouter/ProtectedRouter.jsx";
import Cart from "../components/web/cart/Cart.jsx";
import Categories from "../components/web/categories/Categories.jsx";
import CategoriesDetails from "../components/web/categories/CategoriesDetails.jsx";
import Product from "../components/web/products/Product.jsx";
import DashbardLayout from "./DashbardLayout.jsx";
import Profile from "../components/web/profile/Profile.jsx";
import UserInfo from "../components/web/profile/UserInfo.jsx";
import UserContact from "../components/web/profile/UserContact.jsx";
import SendCode from "../components/web/auth/SendCode.jsx";
import ForgotPassword from "../components/web/auth/ForgotPassword.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'profile',
                element: <Profile />,
                children:[
                    {
                        path: 'info',
                        element:<UserInfo/>
                    },{
                        path:'contact',
                        element: <UserContact/>
                    }
                ]
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'sendCode',
                element: <SendCode />,
            },
            {
                path: 'forgotPassword',
                element: <ForgotPassword />,
            },
            {
                path: 'cart',
                element:
                    <ProtectedRouter>
                        <Cart />
                    </ProtectedRouter>

            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'products/category/:categoryId',
                element: <CategoriesDetails />
            },
            {
                path: 'product/:productId',
                element: <Product />
            },
            {
                path: '*',
                element: <h2>page not fond --- web</h2>
            }

        ]
    },
    {
        path: "/dashboard",
        element: <DashbardLayout />,
        children: [
            {
                path: '*',
                element: <h2>page not fond --- dashboard</h2>
            }
        ]
    }
])