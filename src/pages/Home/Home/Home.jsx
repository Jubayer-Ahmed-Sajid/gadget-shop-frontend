import React from 'react';
import Banner from './Home/Banner';
import Featured from './Home/Featured';
import Accordian from './Home/Accordian';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;