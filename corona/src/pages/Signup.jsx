import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Auth } from '../firebase'
const Signup = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCredentials = await createUserWithEmailAndPassword(Auth,email,password)
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
    <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit} className='signup-form'>
            <input 
            type="email"
            placeholder='Your Email'
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />

            <input 
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            />

            <button type='submit' className='signup-button'>Signup</button>
        </form>
        <p>Need to Login? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup