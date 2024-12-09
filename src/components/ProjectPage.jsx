import React from 'react';
import './ProjectPage.module.css';
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
            {typeof project.link === 'string' ? (
                <p className="project-private">{project.link}</p>
            ) : (
                <button
                    className="project-button"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                >
                    View Project
                </button>
            )}
        </div>
    );
}
