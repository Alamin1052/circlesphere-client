import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MyClubs from "../Pages/Dashboard/Member/MyClubs";
import MyEvents from "../Pages/Dashboard/Member/MyEvents";
import PaymentHistory from "../Pages/Dashboard/Member/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }, {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: 'my-clubs',
                Component: MyClubs
            },
            {
                path: 'my-events',
                Component: MyEvents
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            }
        ]
    }
])