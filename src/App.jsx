import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ProductListing } from './ProductListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartComponent } from './CartComponent';
import { Cart } from './Cart';
import { ProductDetails } from './ProductDetails';
import 'font-awesome/css/font-awesome.min.css';
function App() {

  return (
    <>
        <CartComponent></CartComponent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProductListing />} />
                <Route index element={<ProductListing />} />
                <Route path="cart" element={<Cart />} />
                <Route path="productdetails/:id" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
       </>
  )
}

export default App
