import { useDispatch } from 'react-redux'
import { addCartItem } from './CartReducer'
import { Link } from 'react-router-dom';

function Product({ id, title, price, image }) {
  const dispatch = useDispatch()
  return (
    <>
       <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
           <div className="product">
              <img src= {image}/>
            </div>
            <div className="title pt-4 pb-1"><Link to={`/productdetails/${id}`}>{title}</Link></div>
            <div className="price"> $ {price}</div>
            <div className="addtocart">
            <button
              onClick={() => {
                dispatch(addCartItem({ id, title, price, image }))
              }}
            >Add to Cart
            </button>

            </div>
        </div>
    </>
  )
}
export default Product;
