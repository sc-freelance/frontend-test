import React from 'react';

const Hero = () => {
    return (
        <section className="hero bg-light py-5">
            <div className="container text-center">
                <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
                <p className="lead mb-4">
                    Discover amazing projects, collaborate with creators, and build the future together.
                </p>
                <div className="d-flex justify-content-center">
                    <input
                        type="text"
                        className="form-control w-50 me-2"
                        placeholder="Search for projects..."
                    />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;