import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/themeContext.jsx'
import Spotlight from './components/global/spotLight/SpotLight.jsx'




createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Spotlight>
            <App />
        </Spotlight>
        
    </ThemeProvider> 
  
)
