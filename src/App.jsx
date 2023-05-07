import { useState } from 'react'
import './App.css'
import { Navbar,Sidebar,Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Projects } from './pages'

function App() {


  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar/>
      </div>
      <div className="app__body">
       <div className="app__sidebar">
       <Sidebar/>
       </div>
       <div className="app__main">
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
