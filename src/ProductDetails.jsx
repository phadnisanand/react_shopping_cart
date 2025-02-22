import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { addCartItem } from './CartReducer'
export function ProductDetails(props) {
const { id } = useParams();
const productItems = useSelector((state) => state.products)
const matchingProducts =  productItems.filter((item) => item.id === parseInt(id));
const dispatch = useDispatch()
  return (
    <>
      <Link to="/">Product Page</Link> <br />
        product details page.
        {matchingProducts.map(
          ({ id, title, price, image }) => (
            <div className="col-lg-6 justify-content-center product-item my-3">
              <div className="product">
                <img src= {image} width ="200px"/>
              </div>
              <div className="title pt-4 pb-1">{title}</div>
              <div className="price"> $ {price}</div>
              <button className='btn btn-default btn-sm btn-dark'
                  onClick={() => {
                    dispatch(addCartItem({ id, title, price, image }))
                  }}
                > Add to Cart</button>
            </div>
          )
        )}
    </>
  )
}
