import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import HomeLayout from "../Layout/HomeLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Donationcam from "../Pages/DonationCam/DonationCam";
import DonationCamDetails from "../Pages/DonationCam/DonationCamDetail/DonationCamDetails";
import DonationForm from "../Pages/DonationForm/DonationForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Edit from "../Pages/Dashboard/EditProfile/Edit";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donationcam',
                element: <Donationcam></Donationcam>,
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,

            },
            {
                path: "/donationcamdetails/:id",
                element: <PrivateRoute><DonationCamDetails></DonationCamDetails></PrivateRoute>
            },
            {
                path: "/donationform",
                element: <PrivateRoute><DonationForm></DonationForm></PrivateRoute>
            }
        ]

    },

    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path:"/edit",
        element:<Edit></Edit>
    }
])