import './Navigation.less';

export default function Navigation() {
    return (<>
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#0">Home</a></li>
                <li className="menu-item">
                    <a href="#0">Projects</a>
                    <ol className="sub-menu">
                        <li className="menu-item"><a href="#0">NPI Lookup</a></li>
                        <li className="menu-item"><a href="#0">MorningMed</a></li>
                        <li className="menu-item"><a href="#0">Study Tracker</a></li>
                    </ol>
                </li>
                <li className="menu-item"><a href="#0">About</a></li>
                <li className="menu-item"><a href="#0">Contact</a></li>
            </ol>
        </nav>        
    </>)
}