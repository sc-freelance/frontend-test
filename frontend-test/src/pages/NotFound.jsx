import React from 'react';
import Navbar from '../components/Layout/navbar';
import Footer from '../components/Layout/footer';

const NotFound = () => {
    return (
        <div className="notfound-page">
            <Navbar />
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Footer />
        </div>
    )
}