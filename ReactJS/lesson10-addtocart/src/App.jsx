import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Products from './pages/Products'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import { Container } from 'react-bootstrap'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/products/:url' element={<ProductDetails />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default App