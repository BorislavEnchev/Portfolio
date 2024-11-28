import './Navigation.less';

export default function Navigation({ onMenuClick, onProjectClick }) {
    return (<>
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#0" onClick={() => onMenuClick('Home')}>Home</a></li>
                <li className="menu-item">
                    <a href="#0" onClick={() => onMenuClick('Projects')}>Projects</a>
                    <ol className="sub-menu">
                        <li className="menu-item"><a href="#0" onClick={() => onProjectClick('npilookup')}>NPI Lookup</a></li>
                        <li className="menu-item"><a href="#0" onClick={() => onProjectClick('morningmed')}>MorningMed</a></li>
                        <li className="menu-item"><a href="#0" onClick={() => onProjectClick('studytracker')}>Study Tracker</a></li>
                    </ol>
                </li>
                <li className="menu-item"><a href="#0" onClick={() => onMenuClick('About')}>About</a></li>
                <li className="menu-item"><a href="#0" onClick={() => onMenuClick('Contact')}>Contact</a></li>
            </ol>
        </nav>        
    </>)
}