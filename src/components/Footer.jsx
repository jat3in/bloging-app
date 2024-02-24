import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <div className='container footer-container'>
        <ul className='footer-categories'>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>

            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>

            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>

            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            <li><Link to={'/posts/categoreis/education'}>Education</Link></li>
            

        </ul>

        <div className='footer-copyright'>
            <small> &copy; copy rights all reserved </small>
        </div>

        </div>
    </footer>
  )
}
