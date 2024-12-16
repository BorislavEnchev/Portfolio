import { useState } from 'react'
import './App.css'
import { Navigation, Home, Projects, About, Contact, ProjectPage } from './components'

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Home');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleMenuClick = (menuItem) => {
        setSelectedMenu(menuItem);
        setSelectedProject(null);
    };
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setSelectedMenu(null);
    }

    return (
        <>
            <Navigation onMenuClick={handleMenuClick} onProjectClick={handleProjectClick} />
            <div className="content">
                {selectedMenu === 'Home' && <Home />}
                {selectedMenu === 'Projects' && <Projects onProjectClick={handleProjectClick} />}
                {selectedMenu === 'About' && <About />}
                {selectedMenu === 'Contact' && <Contact />}
                {selectedProject && <ProjectPage projectName={selectedProject} />}
            </div>
        </>
    )
}

export default App
