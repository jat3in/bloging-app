import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

export default function PostItem({title, Image, PostId, category, authorId,des ,index}) {
    const shortTitle = title.length > 30 ? title.substr(0,30) + '...' : title;
    const shortDes = des.length > 30 ? des.substr(0,30) + '...' : des;
  return (
    <article className='post'>
        <div className='post-image'>
            <img src={Image}/>
        </div>
        <div className='post-content'>
            <Link to={`/posts/${PostId}`}>
                <h3>{shortTitle}</h3>
            </Link>
            <p>{shortDes}</p>
            <div className='post-footer'>
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className='btn btn-category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}
