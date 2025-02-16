import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className=''>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='max-w-[1320px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default HomeLayout;