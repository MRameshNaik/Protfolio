import React from "react";
import "./MyWork.css";

const MyWork = () => {
    const projects = [
        {
            title: "Project 1",
            image: "", // Replace with image URL
            description: ["Description 1", "Description 2"],
            githubUrl: "https://github.com/username/project1"
        },
        {
            title: "Project 2",
            image: "", // Replace with image URL
            description: ["Description 1", "Description 2"],
            githubUrl: "https://github.com/username/project2"
        },
        {
            title: "Project 3",
            image: "", // Replace with image URL
            description: ["Description 1", "Description 2"],
            githubUrl: "https://github.com/username/project3"
        },
        {
            title: "Project 4",
            image: "", // Replace with image URL
            description: ["Description 1", "Description 2"],
            githubUrl: "https://github.com/username/project4"
        }
    ];

    const redirectToGithub = (githubUrl) => {
        window.open(githubUrl, "_blank"); // Opens GitHub link in a new tab
    };

    return (
        <div className="mywork">
            <div className="title">
                <p>My Projects</p>
            </div>
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <div className="project-left">
                        <img src={project.image} alt={project.title} className="" />
                    </div>
                    <div className="project-right">
                        <h2>{project.title}</h2>
                        <ul>
                            {project.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                        <button onClick={() => redirectToGithub(project.githubUrl)}>Github</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyWork;
