import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from '../pages/Author';
import Home from '../pages/Home';
import AuthorPost from '../pages/AuthorPost';
import CategoryPost from '../pages/CategoryPost';
import CreatePost from '../pages/CreatePost';
import DeletePost from '../pages/DeletePost';
import EditPost from '../pages/EditPost';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserProfile from '../pages/UserProfile';
import Dashboard from '../pages/Dashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logout from '../pages/Logout';
import DetailPost from '../pages/DetailPost';

export default function Router() {
  return (
    <>
     <BrowserRouter>
     <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/author' element={<Author/>}/>
            <Route path='/posts/user/:id' element={<AuthorPost/>}/>
            <Route path='/posts/categories/:category' element={<CategoryPost/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/posts/:id/delete' element={<DeletePost/>}/>
            <Route path='/posts/:id/edit' element={<EditPost/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile/:id' element={<UserProfile/>}/>
            <Route path='/myposts/:id' element={<Dashboard/>}/>
            <Route path='/logout' element={<Logout />}/>
            <Route path='/posts/:id' element={<DetailPost />}/>
        </Routes>
        <Footer/>
     </BrowserRouter>

    </>
  )
}
