import React from 'react'
import 'styles/App.css'
import AuthModal from 'components/AuthModal'
import Header from 'components/Header'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Nutrition from 'pages/Nutrition'
import Workouts from 'pages/Workouts'
import Clients from 'pages/Clients'


const App = () => {
  return (
    <div className='App Container'>
  
      <div className="Header">
        <Header/>
      </div>
    
      <div className="Body">
        <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/nutrition" element={<Nutrition/>}/>
              <Route path="/workouts" element={<Workouts/>}/>
              <Route path="/clients" element={<Clients/>}/>
            </Routes>
        </Router>
      </div>
      
      <AuthModal />
    </div>
  )
}


export default App
