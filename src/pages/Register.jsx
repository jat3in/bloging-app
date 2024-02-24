import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const changeInputHandler = e => {
       const {name, value} = e.target
       setUserData({
        ...userData,
        [name]: value
       })
    } 
  return (
    <section className='regsiter'>
        <div className='container container-register form-container'>
            <h2>Sign Up</h2>
            <form action='' className='form register-form'>
                <p className='form-message'>This is Invalid Message</p>
                <input type='text' name='name' placeholder='Full Name' value={userData.name} onChange={changeInputHandler}/>
                <input type='email' name='email' placeholder='Email' value={userData.email} onChange={changeInputHandler}/>
                <input type='text' name='password' placeholder='Password' value={userData.password} onChange={changeInputHandler}/>
                <input type='password' name='password2' placeholder='Confirm Password' value={userData.password2} onChange={changeInputHandler}/>
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
            <small>Already Have an account ? <Link to={'/login'}>Sign In</Link></small>
        </div>
    </section>
  )
}
