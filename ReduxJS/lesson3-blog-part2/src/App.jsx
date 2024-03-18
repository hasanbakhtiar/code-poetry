import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Header from './components/Header'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/update/AddBlog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
          <Routes>
              <Route path='/' element={<Blogs/>}></Route>
              <Route path='/:slug' element={<BlogDetails/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/dashboard/add' element={<AddBlog/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App