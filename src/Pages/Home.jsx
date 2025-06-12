import React from 'react';
import Banner from '../Components/Banner';
import Calculate from '../Components/Calculate';
import Subscription from '../Components/Subscription';
import FeaturedRoommates from '../Components/FeaturedRoommates';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoommates></FeaturedRoommates>
            <Calculate></Calculate>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;