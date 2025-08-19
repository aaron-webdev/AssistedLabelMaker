import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='text-center align-items-center align-content-center justify-content-center justify-items-center'>
      <App />
    </div>
    
  </StrictMode>,
)
