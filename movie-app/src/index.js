import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root with the root container element (assumed to have an id of 'root')
const root = createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(<App />);