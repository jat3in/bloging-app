import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from '../components/PostItem';

export default function AuthorPost() {

    const [post, setPost] = useState(DummyPosts);
  return (
    <section className='authorPosts'>
    <h1 className='page-title'>Author Posts</h1>
    {post.length > 0 ?  <div className='authorPost-container container'>
        {
            post.map(({id,Image, authorId,category,title,des},index) => <PostItem key={index} Image={Image} authorId={authorId} category={category} title={title} des={des} PostId={id} />)
        }
        </div> : <h2 className='error-center'>No Post Found</h2>}
       

    </section>
  )
}
