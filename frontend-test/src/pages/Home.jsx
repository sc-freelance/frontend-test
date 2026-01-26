import React from 'react';
import Navbar from '../components/Layout/navbar';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import CTA from '../components/Landing/CTA';
import Footer from '../components/Layout/footer';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;