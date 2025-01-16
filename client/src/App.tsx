import React from 'react'
import AuthModal from 'components/AuthModal'
import Header from 'components/Header'
import 'styles/ReactWelcome.css'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Nutrition from 'pages/Nutrition'
import Workouts from 'pages/Workouts'
import Clients from 'pages/Clients'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nutrition" element={<Nutrition/>}/>
            <Route path="/workouts" element={<Workouts/>}/>
            <Route path="/clients" element={<Clients/>}/>
          </Routes>
      </Router>
      <AuthModal />
    </div>
  )
}


export default App
