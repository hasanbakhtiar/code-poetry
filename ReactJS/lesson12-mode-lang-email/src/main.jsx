import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.scss'; 
import App from './App'
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';
import { ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
    <ModeProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </ModeProvider>
    </LangProvider>
  </React.StrictMode>,
)
