import React, { useState } from 'react'
import PostItem from '../components/PostItem'
import { DummyPosts } from '../data/data';


export default function CategoryPost() {
    const [post, setPost] = useState(DummyPosts);
  return (
    <section className='categoryPosts'>
    <h1 className='page-title'> Category Post</h1>
    {post.length > 0 ?  <div className='categoryPost-container container'>
        {
            post.map(({id,Image, authorId,category,title,des},index) => <PostItem key={index} Image={Image} authorId={authorId} category={category} title={title} des={des} PostId={id} />)
        }
        </div> : <h2 className='error-center'>No Post Found</h2>}
       

    </section>
      )
}
