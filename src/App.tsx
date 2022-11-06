import React from "react"
import './App.scss';
import Layout from 'Layout/Layout'
import Dashboard from 'pages/Dashboard'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <React.Fragment>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to ="/user/12" />} />
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
