import "./Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { round } from 'lodash'
import { decreaseCartItemQuantity, increaseCartItemQuantity } from './CartReducer'
import { useEffect } from "react";
export function Cart(props) {
const cartItems = useSelector((state) => state.cartItems)
const dispatch = useDispatch()
const getCartTotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
};

useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <>
       <div className="container bg-white">
         <h2>Cart Page</h2>
          <Link to="/">Go to Product listing Page</Link>
          <div className="row">
            <div className="wrap-table-shopping-cart">
              <table className="table-shopping-cart">
                <tbody><tr className="table_head">
                  <th className="column-1">Product</th>
                  <th className="column-2"></th>
                  <th className="column-3">Price</th>
                  <th className="column-4">Quantity</th>
                  <th className="column-5">Total</th>
                </tr>
                  {cartItems.map((pdata, index) => (
                    <tr className="table_row"  key={index}>
                      <td className="column-1">
                        <div className="how-itemcart1">
                          <img src={pdata.image} alt="IMG" width="75px" />
                        </div>
                      </td>
                      <td className="column-2">{pdata.title} {pdata.id}</td>
                      <td className="column-3">$ {pdata.price}</td>
                      <td className="column-4"><div className="_quantifier_p8w2b_1">
                        <button onClick={() => dispatch(decreaseCartItemQuantity({id: pdata.id}))}>-</button>
                        <span>{pdata.quantity}</span>
                        <button onClick={() => dispatch(increaseCartItemQuantity({id: pdata.id}))}>+</button>
                      </div></td>
                      <td className="column-5">$ {pdata.quantity* pdata.price}</td>
                    </tr>
                ))}
                <tr>
                  <td className="column-3" colSpan="3">Total</td>
                  <td className="column-4" ></td>
                  <td className="column-5" >$ {round(getCartTotal(), 2)}</td>
                </tr>
              </tbody></table>
            </div>
        </div>
      </div>
    </>
  )
}
