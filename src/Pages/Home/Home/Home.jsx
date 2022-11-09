import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeShowService from '../HomeShowService/HomeShowService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeShowService></HomeShowService>
            <About></About>
        </div>
    );
};

export default Home;