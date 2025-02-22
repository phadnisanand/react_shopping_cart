import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react'
import { ProductListing } from './ProductListing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './Cart';
import { ProductDetails } from './ProductDetails';
import { useSelector } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css';
import { CartComponent } from './CartComponent';
function App() {
  const cartItems = useSelector((state) => state.cartItems)
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className ="container">
          <BrowserRouter>
          <CartComponent></CartComponent>
            <Routes>
              <Route path="/" element={<ProductListing />} />
                <Route index element={<ProductListing />} />
                <Route path="cart" element={<Cart />} />
                <Route path="productdetails/:id" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
       </div>
  )
}

export default App
