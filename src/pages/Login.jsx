import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const changeInputHandler = e => {
       const {name, value} = e.target
       setUserData({
        ...userData,
        [name]: value
       })
    } 
  return (
    <section>
       <div className='container container-register form-container'>
            <h2>Login</h2>
            <form action='' className='form register-form'>
                <p className='form-message'>This is Invalid Message</p>
                <input type='email' name='email' placeholder='Email' value={userData.email} onChange={changeInputHandler}/>
                <input type='text' name='password' placeholder='Password' value={userData.password} onChange={changeInputHandler}/>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            <small>Don't  Have any account ? <Link to={'/register'}>Sign Up</Link></small>
        </div> 
    </section>
  )
}
