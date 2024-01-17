import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/_settings.scss'
import { DarkModeContextProvider } from './context/DarkModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
)
