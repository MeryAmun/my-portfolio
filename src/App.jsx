import { useState } from 'react'
import './App.css'
import { Navbar,Sidebar,Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Portfolio } from './pages'

function App() {


  return (
    <div className="app">
      <div className="app__sidebar">
        <Sidebar/>
      </div>
      <div className="app__navbar">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
