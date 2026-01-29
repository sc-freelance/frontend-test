import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

{/* Importing Main Pages */}
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

{/* Importing Project Pages */}
import WebDevelopment from './pages/Projects/WebDevelopment.jsx';
import MachineLearning from './pages/Projects/MachineLearning.jsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/web-development-page" element={<WebDevelopment />} />
        <Route path="/machine-learning-page" element={<MachineLearning />} />
      </Routes>
    </>
  )
}

export default App;
