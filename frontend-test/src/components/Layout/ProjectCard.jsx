import React from 'react';
import './Layout_CSS/ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    return (
        <div className="card" style={{ width: "18rem;" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick text to see what it could become</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <img src="..." className="card-img-top" alt="..." />
            <br />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick text to see what it could become</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default ProjectCard;