import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeShowService from '../HomeShowService/HomeShowService';
import WorkSample from '../WorkSample/WorkSample';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeShowService></HomeShowService>
            <About></About>
            <WorkSample></WorkSample>
        </div>
    );
};

export default Home;