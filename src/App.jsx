import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="content">
                <h1>Borislav's Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default App
