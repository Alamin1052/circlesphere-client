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
import ManagerDashboardHome from "../Pages/Dashboard/DashboardHome/ManagerDashboardHome";
import ManagerClubs from "../Pages/Dashboard/Maneger/ManagerClubs";
import ClubMembers from "../Pages/Dashboard/Maneger/ClubMembers";
import ManageEvents from "../Pages/Dashboard/Maneger/ManageEvents";
import EventRegistrations from "../Pages/Dashboard/Maneger/EventRegistrations";
import AdminDashboardHome from "../Pages/Dashboard/DashboardHome/AdminDashboardHome";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageClubs from "../Pages/Dashboard/Admin/ManageClubs";
import PaymentsTransactions from "../Pages/Dashboard/Admin/PaymentsTransactions";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import Clubs from "../Pages/Clubs/Clubs";
import Events from "../Pages/Events/Events";
import ClubDetails from "../Pages/Clubs/clubDetails";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Payment/PaymentCancel";

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
            },
            {
                path: 'clubs',
                Component: Clubs
            },
            {
                path: 'club-details/:id',
                Component: ClubDetails
            },
            {
                path: 'events',
                Component: Events
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancel',
                Component: PaymentCancel
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
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
            },
            {
                path: 'manager-home',
                element: <ManagerRoute><ManagerDashboardHome /></ManagerRoute>,
            },
            {
                path: 'manager-clubs',
                element: <ManagerRoute><ManagerClubs /></ManagerRoute>
            },
            {
                path: 'club-members',
                element: <ManagerRoute><ClubMembers /></ManagerRoute>
            },
            {
                path: 'manage-events',
                element: <ManagerRoute><ManageEvents /></ManagerRoute>
            },
            {
                path: 'event-registration',
                element: <ManagerRoute><EventRegistrations /></ManagerRoute>
            },
            {
                path: 'admin-home',
                element: <AdminRoute><AdminDashboardHome /></AdminRoute>,
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>,
            },
            {
                path: 'manage-clubs',
                element: <AdminRoute><ManageClubs /></AdminRoute>,
            },
            {
                path: 'payment-transaction',
                element: <AdminRoute><PaymentsTransactions /></AdminRoute>,
            }
        ]
    }
])