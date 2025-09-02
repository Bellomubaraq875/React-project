import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer' 
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      </div>
      <div className="footer">
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
