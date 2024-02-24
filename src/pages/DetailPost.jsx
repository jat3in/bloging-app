import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import postDetailImage from '../assets/Image1.jpg'

export default function DetailPost() {
  return (
    <section>
        <div className='container postDetail-container'>
            <div className='postdetail-top'>
                <PostAuthor/>
                <div className='postdetail-buttons'>
                    
                        <Link to={'/posts/werver/edit'} className='btn btn-sm btn-primary'>Edit</Link>
                        <Link to={'/posts/werver/delete'} className='btn btn-sm btn-danger'>Delete</Link>
                    
                </div>
            </div>
            <h1>lkjsklfjlel clls jfkl sjdkfskfsdkjfn kjds njksdafk</h1>
            <div className='postdetail-image'>
                <img src={postDetailImage} alt=''/>
            </div>
            <div className='postDetaol-para'>
                <p>nnfkbcsdbhcieshcihaieghk</p>
                <p>snkdfcnkhdsjx j bj skj hilklh dfkjakd</p>
                <p>nnfkbcsdbhcieshcihaieghk</p>
                <p>snkdfcnkhdsjx j bj skj hilklh dfkjakd</p>
            </div>
        </div>
    </section>
  )
}
