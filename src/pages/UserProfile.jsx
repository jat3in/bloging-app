import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../assets/Image1.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

export default function UserProfile() {
    const [ProfileImage,setProfileImage] = useState('');

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

  return (
    <section className='profile'>
        <div className='container profile-container'>
            <Link to={'/myposts/id'}>My Posts</Link>


            <div className='profile-details'>
               <div className='profile-wrapper'>
                <div className='profile-image'>
                    <img src={Image1} alt=''/>
                </div>
               <form className='profile-image-form'>
                <input type='file' name='profileImage' id='profileImage' accept='jpg, png, jpeg' onChange={e => setProfileImage(e.target.files[0])}/>
                {/* <label htmlFor='profileImage'>
                    <FaEdit/>
                </label> */}
               </form>
                <button className='profile-image-button '>
                     <FaCircleCheck />
                </button>

               </div>
               <h2>Jatin Vashishtha</h2>

               <form action='' className='form profile-data-form'>
                <p className='form-message'>This is Invalid Message</p>
                <input type='text' name='name' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
                <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' name='currentPassword' placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
                <input type='password' name='newPassword' placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                <input type='password' name='confirmPassword' placeholder='Confrim Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                <button type='submit' className='btn btn-primary'>Update Profile</button>
            </form>

            </div>
        </div>
    </section>
  )
}
