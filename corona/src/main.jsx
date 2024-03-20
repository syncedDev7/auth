import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Protected from './components/Protected.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='signup' element={<Signup />} />
    <Route path='login' element={<Login />} />
    <Route path='/' element={<Protected />} >
      <Route path='/' index  element = {<Home />} />
    </Route>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
