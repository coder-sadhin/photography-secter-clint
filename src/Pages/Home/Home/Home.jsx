import React from 'react';
import Banner from '../Banner/Banner';
import HomeShowService from '../HomeShowService/HomeShowService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeShowService></HomeShowService>
        </div>
    );
};

export default Home;