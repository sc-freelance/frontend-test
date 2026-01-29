import React from 'react';
import Navbar from '../../components/Layout/navbar';
import Footer from '../../components/Layout/footer';

const MachineLearning = () => {
    const web_projects = [
        // Adding my machine learning projects here
        {
            title: 'Car Price Prediction',
            description: 'A machine learning model that predicts car prices based on various features such as make, model, year, mileage, and condition. By using Linear, Polynomial and Logistic Regression techniques, the model provides accurate price estimates to help buyers and sellers make informed decisions.',
            link: 'https://jupyter.org/try-jupyter/notebooks/?path=notebooks%2FHelloWorld.ipynb'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3',
            link: '#'
        }
    ]
    return (
        <div className="machine-learning-page">
            <Navbar />
            <h1>Machine Learning Projects</h1>
            <div className="projects-list">
                {web_projects.map((project, index) => (
                    <div key={index} className="project-card border p-3 mb-3">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default MachineLearning;