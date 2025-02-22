import Product from './Product';
import { useSelector, useDispatch } from 'react-redux'
import { searchProductsByCategory, searchProductByTitle,orderProductsByPrice } from './productReducer';
import { products } from './Products';
import { uniqBy, upperCase } from 'lodash'
export function ProductListing(props) {
  let productItems = useSelector((state) => state.products);

  // const [searchVal, setSearchVal] = useState("");
  // const [searchCategory, setSearchCategory] = useState("");
  // const [sortProducts, setSortProducts] = useState("");


  // const setLowToHigh = () => {
  //   const sortedProducts = productItems.sort((a, b) => a.price - b.price);
  //   setShowProductList([...sortedProducts]);
  // };
  // const setHighToLow = () => {
  //   const reverseSortedProducts = productItems.sort((a, b) => b.price - a.price);
  //   setShowProductList([...reverseSortedProducts]);
  // };
  // const restList = () => {
  //   const resetList = productItems;
  //   setShowProductList([...resetList]);
  // };

  // if(sortProducts == 'asc') {
  //  productItems= productItems.sort((a, b) => a.price - b.price);
  // } else {
  //  productItems= productItems.sort((a, b) => a.price - b.price);
  // }



  // productItems = productItems.filter( function (item) {
  //   if (searchVal === "" && searchCategory === "") { return item }
  //   if (searchVal != '' && item.title.toLowerCase()
  //           .includes(searchVal.toLowerCase())) { return item; }
  //   if (searchCategory != '' && item.category.toLowerCase() == searchCategory) { return item; }
  // });
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    productItems = dispatch(searchProductsByCategory(e))
  };

  const handleProductChange = (e) => {
    productItems = dispatch(searchProductByTitle(e))
  };

  const handlePriceChange = (e) => {
    productItems = dispatch(orderProductsByPrice(e))
  };

  const uniqueCategory = uniqBy([...products], 'category');

  return (
    <>
      <div className="container bg-white">
          <h2>Products Listing</h2>
          <div className="row">
            <p>Search Products <input type='text' name="search" id="search" onChange={(e) => handleProductChange(e.target.value)}  /> </p>
            <p>Search by Category &nbsp;
              <select onChange={(e) => handleCategoryChange(e.target.value)}>
                  <option value="">All</option>
                  {
                      uniqueCategory.map((ele) => (
                           <option key= {ele.category} value= {ele.category}>{upperCase(ele.category)} </option>
                        ))
                  }
              </select>
            </p>
            <p>Sort by Price &nbsp;
              <select onChange={(e) => handlePriceChange(e.target.value)}>
                  <option value="">None</option>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
              </select>
            </p>

             {productItems.length > 0 ? productItems.map(
                ({ id, title, price, image }) => (
                  <Product
                    key= {id}
                    id= {id}
                    title= {title}
                    price= {price}
                    image= {image}
                  />
                )
              ) : <b>No product found</b>}
          </div>
      </div>
    </>
  )
}
