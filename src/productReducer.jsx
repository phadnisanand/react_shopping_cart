import { products } from './Products';
import { createSlice } from '@reduxjs/toolkit'
const DEFAULT_CATEGORY = "All"

const ProductSlice = createSlice({
  name: 'products',
  initialState: products,
  selectedCategory: DEFAULT_CATEGORY,
  reducers: {
     searchProductsByCategory : (state, action) => {
        if(action.payload == '') {
          return products
        }
        else {
          return products.filter( function (item) {
            if (item.category.toLowerCase() == action.payload) { return item; }
          })
        }
      },
      searchProductByTitle: (state, action) => {
        if(action.payload == '') {
          return products
        }
        else {
          return products.filter( function (item) {
            if (item.title.toLowerCase().includes(action.payload.toLowerCase()))  { return item; }
          })
        }
      },
      orderProductsByPrice: (state, action) => {
          const allProducts = [...products];
          if(action.payload == 'asc') {
            return allProducts.sort((a, b) => a.price - b.price);
          } else if(action.payload == 'desc') {
            return allProducts.sort((a, b) => b.price - a.price);
          }
          else {
            return allProducts
          }
      }
   },
})

export const getAllProducts = (state) => state.products.list

export const {searchProductsByCategory, searchProductByTitle, orderProductsByPrice  } = ProductSlice.actions
export default ProductSlice.reducer
