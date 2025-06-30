import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './scss/index.scss'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
