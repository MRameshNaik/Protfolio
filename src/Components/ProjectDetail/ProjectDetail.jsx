import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

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

const ProjectDetail = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { projectId } = useParams();
  const project = projects[projectId];

  // Function to handle navigation back to Projects page
  const navigateBack = () => {
    navigate('/'); // Navigate to the root path (Projects page)
  };

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <ul>
        {project.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
      <h3>Tech Stack:</h3>
      <ul>
        {project.techStack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <button onClick={() => window.open(project.githubUrl, "_blank")}>Github</button>
      <button onClick={navigateBack}>Back</button> {/* Back button */}
    </div>
  );
};

export default ProjectDetail;
