import React from "react";
import './Hero.css';
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ setMenu }) => {

    const redirectToResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1ZlXv33d0TpAhRlbMu-kRv-ckqyzf7mbe/view?usp=sharing';
        window.location.href = resumeUrl;
    };

    return (
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1> <span>I'm  M Ramesh Naik </span>, a passionate Full-Stack Developer and Tech Enthusiast.</h1>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p>Connect With Me</p>
                    </AnchorLink>
                </div>
                <div className="hero-resume" onClick={redirectToResume}>My Resume</div>
            </div>
        </div>
    );
}

export default Hero;
