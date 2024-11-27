import { useState } from 'react'
import './App.css'
import { Navigation, Home, Projects, About, Contact } from './components'

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Home');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <>
            <Navigation onMenuClick={handleMenuClick} />
            <div className="content">
                {selectedMenu === 'Home' && <Home />}
                {selectedMenu === 'Projects' && <Projects />}
                {selectedMenu === 'About' && <About />}
                {selectedMenu === 'Contact' && <Contact />}
            </div>
        </>
    )
}

export default App
