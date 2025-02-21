import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export function CartComponent(props) {
  const cartItems = useSelector((state) => state.cartItems)
   const navigate = useNavigate();
  /*let totalQty = 0;
  cartItems.map(
    ({ quantity}) => (
      totalQty = totalQty + quantity
    )
  )*/

  const getCartTotal = () => {
     return cartItems.reduce((total, item) => total + item.quantity, 0); // calculate the total price of the items in the cart
  };

  const handleRedirectCart = () => {
      navigate('/cart');
  }
  return (
    <>
     <div className="wrapper">

        <span onClick={handleRedirectCart}><i className="fa">&#xf07a;</i> {getCartTotal()} </span>
      </div>
    </>
  )
}
