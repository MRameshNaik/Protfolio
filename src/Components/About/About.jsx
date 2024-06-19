import React from "react";
import './About.css';
import profile_img from "../../assets/profile_img.jpg";

const About=( )=>{
    return(
        <div id='about' className="about">
            <div className="about-title">
            <h1> About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    
                    <p>I am M Ramesh Naik, a B.Tech student majoring in Computer Science and Engineering at IIT Bhilai. With a strong interest in full-stack web development, I excel in both frontend and backend technologies.</p>
                    <p>My experience includes developing innovative web solutions and leading projects to successful completion. I am passionate about leveraging technology to drive meaningful change and thrive in collaborative environments</p>
                   
                </div>
            </div>
        </div>
    )
}

export default About;