import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import StatsSection from '../StatsSection/StatsSection';
import WorksProcessSection from '../WorksProcessSection/WorksProcessSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import ArticlesSection from '../ArticlesSection/ArticlesSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='max-w-screen mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <StatsSection></StatsSection>
            <WorksProcessSection></WorksProcessSection>
            <PortfolioSection></PortfolioSection>
            <ArticlesSection></ArticlesSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;