import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';
import ItWorks from './ItWorks/ItWorks';
import OurDoner from './OurDoner/OurDoner';
import Blog from './Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ItWorks></ItWorks>
            <Blog></Blog>
            <OurDoner></OurDoner>
        </div>
    );
};

export default Home;