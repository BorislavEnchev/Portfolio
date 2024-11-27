import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import p5 from 'p5';
import { setup, draw, windowResized } from './snowflakes.js';

new p5((p) => {
    p.setup = () => setup(p);
    p.draw = () => draw(p);
    p.windowResized = () => windowResized(p);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
