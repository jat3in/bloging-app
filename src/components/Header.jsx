import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


export default function Header() {
  const [isNavShow, setNavShow] = useState(window.innerWidth > 1024 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 1024) {
      setNavShow(false)
    }else {
      setNavShow(true)
    }
  }
  return (
    <nav>
        <div className='container nav-container'>
            <Link className='nav-logo' to={'/'}  onClick={closeNavHandler}>
                <h3>Sharma Fit & Fine <span>GYM</span></h3>
            </Link>

            { isNavShow && <ul className='nav-menu'>
                <li><Link to={'/profile/id'} onClick={closeNavHandler}>Jatin Vashishtha</Link></li>
                <li><Link to={'/create'} onClick={closeNavHandler}>Create</Link></li>
                <li><Link to={'/author'} onClick={closeNavHandler}>Author</Link></li>
                <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
            </ul> }

            <button className='nav-toggle-btn' onClick={() => setNavShow(!isNavShow)}>
            {
              isNavShow ? <IoCloseSharp/> : <FaBars/>  
            }
            </button>
        </div>
    </nav>
  )
}
