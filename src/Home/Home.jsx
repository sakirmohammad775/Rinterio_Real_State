import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=' mx-auto max-w-screen'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;