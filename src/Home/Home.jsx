import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import StatsSection from '../StatsSection/StatsSection';
import WorksProcessSection from '../WorksProcessSection/WorksProcessSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';

const Home = () => {
    return (
        <div className=' mx-auto max-w-screen'>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <StatsSection></StatsSection>
            <WorksProcessSection></WorksProcessSection>
            <PortfolioSection></PortfolioSection>
        </div>
    );
};

export default Home;