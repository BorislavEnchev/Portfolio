import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navigation />
            <div className="content">
                <h1>Borislav's Portfolio</h1>
            </div>
        </>
    )
}

export default App
