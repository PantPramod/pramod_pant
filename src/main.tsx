import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//@ts-ignore
import BuBbleShooter from './components/BuBbleShooter.jsx'
import AdminPanel from './AdminPanel.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>} path='/'/>
      <Route element={<BuBbleShooter/>} path="/bubble-shooter"/>
      <Route element={<AdminPanel/>} path="/admin-panel"/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
