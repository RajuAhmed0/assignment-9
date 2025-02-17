import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import HomeLayout from "../Layout/HomeLayout";

import Help from "../Pages/Help/Help";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Donationcam from "../Pages/DonationCam/DonationCam";
import DonationCamDetails from "../Pages/DonationCam/DonationCamDetail/DonationCamDetails";
import DonationForm from "../Pages/DonationForm/DonationForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
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
                path: '/howtohelp',
                element: <Help></Help>
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