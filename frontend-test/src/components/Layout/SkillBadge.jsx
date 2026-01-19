import React from 'react';
import './Layout_CSS/SkillBadge.css';

const SkillBadge = ({ skillName, skillLevel }) => {
    return (
        <div className="skill-badge">
            <h3>{skillName}</h3>
            <p>Level: {skillLevel}</p>
        </div>
    )
}

export default SkillBadge;