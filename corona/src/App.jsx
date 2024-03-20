import React from 'react'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
      <div className='App'>
      <Outlet />
      </div>
    </>
  )
}

export default App
