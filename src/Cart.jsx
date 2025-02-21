import "./Cart.css";
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export function Cart(props) {
  const cartItems = useSelector((state) => state.cartItems)
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
                      <td className="column-2">{pdata.title}</td>
                      <td className="column-3">$ {pdata.price}</td>
                      {/* <td className="column-4">{pdata.quantity}</td> */}

                      <td className="column-4"><div className="_quantifier_p8w2b_1"><input type="button" value="-" /><input type="number" step="1" max="" value={pdata.quantity} /><input type="button" value="+" /></div></td>

                      <td className="column-5">$ {pdata.quantity* pdata.price}</td>
                    </tr>
                ))}
                <tr>
                  <td className="column-3" colSpan="3">Total</td>
                  <td className="column-4" > 5</td>
                  <td className="column-5" >$ 2000</td>
                </tr>
              </tbody></table>
            </div>
        </div>
      </div>
    </>
  )
}
