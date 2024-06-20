import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
    {
        title: "Project 1",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
        description: ["Description 1", "Description 2"],
        techStack: ["Tech 1", "Tech 2"],
        githubUrl: "https://github.com/username/project1"
    },
    {
        title: "Project 2",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
        description: ["Description 1", "Description 2"],
        techStack: ["Tech 1", "Tech 2"],
        githubUrl: "https://github.com/username/project2"
    },
    {
        title: "Project 3",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
        description: ["Description 1", "Description 2"],
        techStack: ["Tech 1", "Tech 2"],
        githubUrl: "https://github.com/username/project3"
    },
    {
        title: "Project 4",
        image: "https://via.placeholder.com/150", // Replace with actual image URL
        description: ["Description 1", "Description 2"],
        techStack: ["Tech 1", "Tech 2"],
        githubUrl: "https://github.com/username/project4"
    }
];

const Projects = () => {
    const navigate = useNavigate();

    const onProjectCardClick = useCallback((index) => {
        navigate(`/projects/${index}`);
    }, [navigate]);

    return (
        <div id="work" className="mywork">
            <div className="title">
                <p>My Projects</p>
            </div>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index} onClick={() => onProjectCardClick(index)}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
