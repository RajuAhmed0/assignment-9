import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';
import ItWorks from './ItWorks/ItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ItWorks></ItWorks>
        </div>
    );
};

export default Home;