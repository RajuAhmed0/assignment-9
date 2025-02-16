import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';

const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <About></About>
        </div>
    );
};

export default Home;