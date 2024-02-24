import React from 'react'
import { Link } from 'react-router-dom'
import { HeadPosts } from '../data/data'


export default function HeadPost() {
  return (
    <article className='head-post'>

    { HeadPosts.map(({id, Image, authorId, title, des},index) => {
        return(
            <div key={index} className='container head-post-container'>
            
            <div className='post-content'>
                <Link to={`posts/${authorId}`}>
                    <h1>{title}</h1>
                </Link>
                <p>{des}</p>
            </div>
            <div className='post-image'>
                <img src={Image} alt=''/>
            </div>

            </div>
        
        )

    }) }
    
</article>
  )
}
