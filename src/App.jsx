import { useState } from 'react'
import './assets/css/App.css'
import { BrowserRouter, Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  )
}

export default App
