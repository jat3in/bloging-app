import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from './PostItem'
import HeadPost from './HeadPost'



export default function Post() {
    const [post , setPost] = useState(DummyPosts)
  return (
    <section className='posts'>

    <div className='head-post-aria'>
        <HeadPost/>
    </div>
    {post.length > 0 ?  <div className='post-container container'>
        {
            post.map(({id,Image, authorId,category,title,des},index) => <PostItem key={index} Image={Image} authorId={authorId} category={category} title={title} des={des} PostId={id} />)
        }
        </div> : <h2 className='error-center'>No Post Found</h2>}
       

    </section>
  )
}
