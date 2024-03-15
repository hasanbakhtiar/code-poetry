import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Blogs/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App