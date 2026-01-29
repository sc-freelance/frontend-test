import React from 'react';
import Navbar from '../components/Layout/navbar';
import CTA from '../components/Landing/CTA';
import Footer from '../components/Layout/footer';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <h1>Contact Us</h1>
            <p>
                
                <CTA />
            </p>
            <Footer />
        </div>
    )
}

export default Contact;