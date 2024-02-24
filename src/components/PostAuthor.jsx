import React from 'react'
import { Link } from 'react-router-dom'
import AuthorImage from '../assets/Image1.jpg'

export default function PostAuthor() {
  return (
    <Link to={'/posts/user/:id'} className='post-author'>
        <div className='post-author-image'>
           <img src={AuthorImage} alt=''/>
        </div>
        <div className='post-author-info'>
        <h5>jatin vashishtha</h5>
        <small>just now</small>

        </div>
    </Link>
  )
}
