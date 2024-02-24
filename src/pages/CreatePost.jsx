import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'



export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Uncategorized');
    const [description, setDescription] = useState('');
    const [thumbImage, setThumbIamge] = useState('');

    const postCategories = ['Education','Sports','School','Birthday'];

    const modules = {
    toolbar: [
    [{'header' : [1,2,3,4,5,6,false]}],
    ['bold','italic','underline','strike','blockquote'],
    [{'list': 'ordered'},{'list' : 'bullet'},{'indent': '+1'}, {'indent' : '-1'}],
    ['link','image'],
    ['clean']
]
    }

    const formats = [
        'header',
        'bold','italic','underline','strike','blockquote',
        'list','bullet','indent',
        'link','image'
    ]


  return (
    <section className='createPosts'>
   
       <div className='container createPosts-container'>
       <h2 className='error-center'>Create Post</h2>
            <form action='' className='form register-form'>
                <p className='form-message'>This is Invalid Message</p>
                <input type='text' name='title' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                <select name='category' value={category} onChange={e => setCategory(e.target.value)} >
                    {
                        postCategories.map(cat => <option key={cat}>{cat}</option>)
                    }
                </select>

                <input type='file' value={thumbImage} onChange={e => setThumbIamge(e.target.value)} autoFocus accept='png, jpg,jpeg' />
                <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)}/>
                <button type='submit' className='btn btn-primary'>Create</button>
                
            </form>
       </div>

    </section>
  )
}
