import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import HomeLayout from "../Layout/HomeLayout";

import Help from "../Pages/Help/Help";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Donationcam from "../Pages/DonationCam/DonationCam";
import DonationCamDetails from "../Pages/DonationCam/DonationCamDetail/DonationCamDetails";
import DonationForm from "../Pages/DonationForm/DonationForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element: <Dashboard></Dashboard>
            },
            {
                path: "/donationcamdetails/:id",
                element: <DonationCamDetails></DonationCamDetails>
            },
            {
                path: "/donationform",
                element: <DonationForm></DonationForm>
            }
        ]

    }
])