import React from 'react';
import styles from './Projects.module.css';
import { PROJECTS } from '../projects.js';

export default function Projects({ onProjectClick }) {
    return (
        <>
            <h1>Projects and Apps</h1>
            <ul className={styles.list}>
                {Object.keys(PROJECTS).map((projectName) => (
                    <li key={projectName}>
                        <a href="#" onClick={() => onProjectClick(projectName)}>
                            <h2>{PROJECTS[projectName].title}</h2>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
