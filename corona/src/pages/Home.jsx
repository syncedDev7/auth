import React from 'react'

import { Auth } from '../firebase'
import { signOut } from 'firebase/auth'
import {  useNavigate } from 'react-router-dom'

const Home =  () => {
const navigate = useNavigate()
    const handleSubmit = async () =>{
        await signOut(Auth)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }    
    


  return (
    <div>
        Home
        <br />
        <br />
        <button onClick={handleSubmit}>Logout</button>
    </div>
    
  )
}

export default Home