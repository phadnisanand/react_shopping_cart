import React from 'react'
import Product from './Product';
import { Outlet, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

export function ProductListing(props) {
  const productItems = useSelector((state) => state.products)
  return (
    <>
      <div className="container bg-white">
          <h2>Products Listing</h2>

          <div className="row">
            <p><Link to="cart">Cart Page</Link> </p>
            <p>Search Products <input type='text' name="search" id="search" /></p>
            <p>Search by Category &nbsp;
              <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
              </select>
            </p>
            <p>Sort by Price &nbsp;
              <select>
                  <option>ASC</option>
                  <option>DESC</option>
              </select>
            </p>
             {productItems.map(
                ({ id, title, price, image }) => (
                  <Product
                    key= {id}
                    id= {id}
                    title= {title}
                    price= {price}
                    image= {image}
                  />
                )
              )}
          </div>
      </div>
    </>
  )
}
