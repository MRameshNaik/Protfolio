import React from "react";
import "./Footer.css";
import instagram_icon from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
// import twitter from "../Asserts/square-x-twitter.svg";
// import youtube from "../Asserts/youtube.svg";
import github from "../../assets/square-github.svg";

const Footer=()=>{
    return(
        <div className="footer">
            <ul className="footer-links">
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={linkedin} alt="" />
                </div>
                {/* <div className="footer-icons-container">
                    <img src={twitter} alt="" />
                </div> */}
                {/* <div className="footer-icons-container">
                    <img src={youtube} alt="" />
                </div> */}
                <div className="footer-icons-container">
                    <img src={github} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Are Reserved</p>
            </div>
        </div>
    )
}

export default Footer;