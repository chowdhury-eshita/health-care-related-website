import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Health from '../Health/Health/Health';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Health></Health>
            <Experts></Experts>
        </div>
    );
};

export default Home;