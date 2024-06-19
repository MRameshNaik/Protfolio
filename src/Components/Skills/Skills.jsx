import React from "react";
import "./Skills.css";

import html from "../../assets/html_logo.png";
import css from "../../assets/css_logo.png";
import javascript from "../../assets/javascript_logo.jpg";
import react from "../../assets/react_logo.jpg";
import node from "../../assets/node-js_logo.webp";
import ejs from "../../assets/ejs_logo.png";
import postgre from "../../assets/postgresql_logo.jpg";
import mongodb from "../../assets/mongodb_logo.jpg";
import python from "../../assets/python_logo.jpg";
import sql from "../../assets/sql_logo.jpg"

const skillsData = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "Python", logo: python },
    { name: "Node.js", logo: node },
    { name: "EJS", logo: ejs },
    { name: "PostgreSQL", logo: postgre },
    { name: "MongoDB", logo: mongodb },
    { name: "React", logo: react },
    {name: "SQL", logo: sql }
];

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            <div className="skills">
                <div className="row">
                    {skillsData.slice(0, 5).map((skill, index) => (
                        <div className="card" key={index}>
                            <img src={skill.logo} alt={`${skill.name} Logo`} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {skillsData.slice(5).map((skill, index) => (
                        <div className="card" key={index}>
                            <img src={skill.logo} alt={`${skill.name} Logo`} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
