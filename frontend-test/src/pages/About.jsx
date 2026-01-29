import React from 'react';
import Navbar from '../components/Layout/navbar';
import Footer from '../components/Layout/footer';

const About = () => {
    const skills = [
        {
            name: 'HTML/CSS',
            level: 'Advanced',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'JavaScript',
            level: 'Advanced',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'React',
            level: 'Intermediate',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'Node.js',
            level: 'Intermediate',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'Python',
            level: 'Intermediate',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'Django',
            level: 'Beginner',
            image: 'https://via.placeholder.com/100'
        },
        {
            name: 'React Native',
            level: 'Intermediate',
            image: 'https://via.placeholder.com/100'
        }
    ]
    return (
        <div className="about-page">
            <Navbar />
            <h1>About me</h1>
            <p> 
                I am an aspiring Software Engineer with a strong interest in full-stack development and machine learning, 
                driven by a desire to build practical, meaningful digital solutions. My journey into technology has been 
                shaped by both formal study and self-directed learning, where I have focused on understanding how software 
                systems work from end to end. I enjoy transforming abstract ideas into working applications and continuously 
                improving them through testing, iteration, and feedback.

                With a background in Mathematics and Further Mathematics, I approach problems analytically and methodically, 
                breaking complex challenges into smaller, solvable parts. This mindset has naturally translated into programming, 
                where I value clean logic, clarity, and thoughtful design. My technical skills include proficiency in languages 
                such as JavaScript, Python, and Java, along with experience in frameworks like React and Node.js. 
                I am also familiar with database management, version control systems, and agile development practices. 

                Outside of coding, I am passionate about staying updated with the latest advancements in technology, 
                particularly in AI and machine learning. I enjoy participating in coding challenges and hackathons, 
                which help me sharpen my skills and collaborate with other developers. Ultimately, I aspire to 
                contribute to innovative projects that leverage technology to solve real-world problems and improve people's lives.

            </p>
            <h2>Skills and Technologies achieved</h2>
            <div className="skills d-flex flex-wrap">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card text-center m-3 p-3 border rounded" style={{ width: '150px' }}>
                        <img src={skill.image} alt={skill.name} className="mb-2" />
                        <h5>{skill.name}</h5>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default About;