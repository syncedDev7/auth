import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Auth } from '../firebase'
const Login = () => {
  
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const userCredentials = await signInWithEmailAndPassword(Auth,email,password)
        console.log(userCredentials);
        const user = userCredentials.user
        localStorage.setItem("token",user.accessToken)
        localStorage.setItem("user",JSON.stringify(user))
        navigate("/")
       
    } catch (error) {
        console.log(error);
    }
}
  
  
  
  
  return (
    
 
    <>
    <style>
      
    </style>

    <div>
       <h1>Login Page</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <input 
            type="email"
            placeholder='Your Email'
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            
            <br />
            <br />
            <input 
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            />
            <br />
            <br />
            <button type='submit' className='login-button'>Login</button>
        </form>
    </div>
    <p>Need to Signup? <br /> <Link to="/signup">Signup</Link></p>

    </>
  )
}

export default Login
