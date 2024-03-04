import React, { useContext } from 'react'
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
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Account from './pages/Account'
import ChangePassword from './pages/ChangePassword'
import { ModeContext } from './context/ModeContext'
const App = () => {
    const [mode] = useContext(ModeContext);
    return (
        <BrowserRouter>
            <div className={mode}>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/products/:url' element={<ProductDetails />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/account' element={<Account />}></Route>
                        <Route path='/changepassword' element={<ChangePassword />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='*' element={<NotFoundPage />}></Route>
                    </Routes>
                </Container>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App