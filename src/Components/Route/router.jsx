import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import HomeLayout from "../Layout/HomeLayout";

import Help from "../Pages/Help/Help";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Donationcam from "../Pages/DonationCam/DonationCam";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/donation',
                element:<Donationcam></Donationcam>
            },
       
            {
                path:'/howtohelp',
                element:<Help></Help>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
        ]
        
    }
])