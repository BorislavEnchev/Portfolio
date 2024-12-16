import React from 'react';
import { PROJECTS } from '../projects.js';

export default function ProjectPage({ projectName }) {
    const project = PROJECTS[projectName];

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-page">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
                <h3>Technologies Used:</h3>
                <h3>{project.technologies}</h3>
            </div>
            {project.link.startsWith("http") ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.link}
                </a>
            ) : (
                <p className="project-private">{project.link}</p>
            )}
        </div>
    );
}
