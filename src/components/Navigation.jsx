import './Navigation.less';
import { PROJECTS } from '../projects.js';

export default function Navigation({ onMenuClick, onProjectClick }) {
    return (
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#" onClick={() => onMenuClick('Home')}>Home</a></li>
                <li className="menu-item">
                    <a href="#" onClick={() => onMenuClick('Projects')}>Projects</a>
                    <ol className="sub-menu">
                        {Object.keys(PROJECTS).map((projectKey) => (
                            <li className="menu-item" key={projectKey}>
                                <a href="#" onClick={() => onProjectClick(projectKey)}>{PROJECTS[projectKey].title}</a>
                            </li>
                        ))}
                    </ol>
                </li>
                <li className="menu-item"><a href="#" onClick={() => onMenuClick('About')}>About</a></li>
                <li className="menu-item"><a href="#" onClick={() => onMenuClick('Contact')}>Contact</a></li>
            </ol>
        </nav>
    );
}
