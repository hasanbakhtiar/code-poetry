import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
