import React, { useState } from 'react'
import './styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../lib/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')

    }catch (error) {
      alert(error.message)
    }
  }

  const register = async (e) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')

    }catch (error) {
      alert(error.message)
    }

  }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login__logo'
          src='/assets/logos/amazon_logo_4.png' 
          alt='amazon_logo' 
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input 
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon Clone's conditions of Use & Sale. Please see our Privacy
          Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
      </div>
      
    </div>
  )
}

export default Login