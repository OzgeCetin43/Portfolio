import React from "react";
import hero from "../../assets/images/hero-about.png";
import "./About.css";

const About = () => {
    return <div className="about-container" id="about-me">
        <h2 className="about-title"><span>#</span>about-me_</h2>
        <div className="about-container-content" id="my-works">
            <div className="about-container-left">
                <img src={hero} alt="hero" className="about-hero-image" />
            </div>
            <div className="about-container-right">
                <h2 className="about-title"><span>#</span>who-am-i_</h2>
                <p className="about-description">She is a full-stack web developer with a passion for creating intuitive and visually appealing user experiences.</p>
                <p className="about-description">She has experience with front-end technologies, including HTML, CSS, and React, and is skilled at using these tools to bring design mockups to life.</p>
                <p className="about-description">She is a strong problem-solver and is able to quickly learn new technologies and frameworks as needed.</p>
                <p className="about-description">In her spare time, she enjoys staying up-to-date with the latest trends abd experimenting with new technologies.</p>
                <p className="about-description">She is always looking for opportunities to grow and learn as a developer.</p>
                <h2 className="about-title"><span>#</span>skills_</h2>
                <div className="skills-container">
                    <div className="skills-container-left">
                        <h3 className="skills-title"><span>#</span>front-end_</h3>
                        <ul className="skills-list">
                            <li className="skill-item">React</li>
                            <li className="skill-item">HTML</li>
                            <li className="skill-item">CSS</li>
                            <li className="skill-item">Ant Design</li>
                        </ul>
                    </div>
                    <div className="skills-container-right">
                        <h3 className="skills-title"><span>#</span>back-end_</h3>
                        <ul className="skills-list">
                            <li className="skill-item">C#</li>
                            <li className="skill-item">PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default About;