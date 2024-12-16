import './Navigation.less';
import { PROJECTS } from '../projects.js';

export default function Navigation({ onMenuClick, onProjectClick }) {
    const handleMenuClick = (menu) => () => onMenuClick(menu);
    const handleProjectClick = (projectKey) => () => onProjectClick(projectKey);
    const projectEntries = Object.entries(PROJECTS);

    return (
        <nav className="menu">
            <ol>
                <li className="menu-item">
                    <a href="#" onClick={handleMenuClick('Home')}>Home</a>
                </li>
                <li className="menu-item">
                    <a href="#" onClick={handleMenuClick('Projects')}>Work</a>
                    <ol className="sub-menu">
                        {projectEntries.map(([projectKey, project]) => (
                            <li className="menu-item" key={projectKey}>
                                <a href="#" onClick={handleProjectClick(projectKey)}>{project.title}</a>
                            </li>
                        ))}
                    </ol>
                </li>
                <li className="menu-item">
                    <a href="#" onClick={handleMenuClick('About')}>About</a>
                </li>
                <li className="menu-item">
                    <a href="#" onClick={handleMenuClick('Contact')}>Contact</a>
                </li>
            </ol>
        </nav>
    );
}
