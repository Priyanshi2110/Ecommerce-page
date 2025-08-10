import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './assets/components/Nav'
import Navbar from './assets/components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import Pricing from './assets/pages/Pricing'
import Dashboard from './assets/pages/Dashboard'
import Contact from './assets/pages/Contact'

function App() {
  

  return (
    <>
    <Router>
     <Nav/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/price' element={<Pricing/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>

   
    </>
  )
}

export default App
