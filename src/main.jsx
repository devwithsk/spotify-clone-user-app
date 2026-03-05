import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import SongContextProvider from './Context/SongContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <SongContextProvider>
         <App />
        </SongContextProvider>
      </AuthProvider>
    </Router>
    
    
  </StrictMode>,
)
