import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'Collaborate',
            description: 'Work together with teams from around the world on innovative projects.',
            icon: '🤝'
        },
        {
            title: 'Innovate',
            description: 'Access cutting-edge tools and resources to bring your ideas to life.',
            icon: '💡'
        },
        {
            title: 'Grow',
            description: 'Learn new skills and expand your network in a supportive community.',
            icon: '📈'
        }
    ];

    return (
        <section className="features py-5">
            <div className="container">
                <h2 className="text-center mb-5">Why Consider Me?</h2>
                <div className="row">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 text-center border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-3" style={{ fontSize: '3rem' }}>{feature.icon}</div>
                                    <h5 className="card-title">{feature.title}</h5>
                                    <p className="card-text">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;