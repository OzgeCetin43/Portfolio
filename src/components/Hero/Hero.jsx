import React from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import hero from "../../assets/images/hero.jpg";
import "./Hero.css";

const Hero = () => {
    return <div className="hero-container">
        <div className="hero-container-left">
            <h1 className="hero-hello-text">Özge is a <span>computer engineer</span> and <span>full-stack developer_</span></h1>
            <p className="hero-description">She crafts responsive websites</p>
            <a href="#get-in-touch" className="hero-contact-button">
                <p className="hero-contact-button-text">
                    <span>#</span>contact her
                </p>
                <LuArrowBigRightDash />
            </a>
            <p className="hero-quotes">Everybody should learn to program a computer because it teaches you how to think. <span> - Steve Jobs</span></p>
        </div>
        <div className="hero-container-right">
            <img src={hero} alt="hero" className="hero" />
            <p className="hero-current-working">
                <small>Currently working on this portfolio !!</small>
            </p>
        </div>
    </div>
}

export default Hero;