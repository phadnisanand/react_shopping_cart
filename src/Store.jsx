import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartReducer'
import productReducer from './productReducer'
export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer
  },
})
