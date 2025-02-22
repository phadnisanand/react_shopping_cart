import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.id === action.payload.id)

// const items =
//   localStorage.getItem("cartItems") !== null
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

// const totalAmount =
//   localStorage.getItem("totalAmount") !== null
//     ? JSON.parse(localStorage.getItem("totalAmount"))
//     : 0;

// const totalQuantity =
//   localStorage.getItem("totalQuantity") !== null
//     ? JSON.parse(localStorage.getItem("totalQuantity"))
//     : 0;

// const setItemFunc = (item, totalAmount, totalQuantity) => {
//   localStorage.setItem("cartItems", JSON.stringify(item));
//   localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
//   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// }


const items =
   localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
     : [];

const slice = createSlice({
  name: 'cart',
  initialState: [...items],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) state[existingItemIndex].quantity += 1
      else state.push({ ...action.payload, quantity: 1 })
      Swal.fire({
      title: "Good job!",
      text: "Product added to cart!",
      icon: "success"
    });
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state.splice(existingItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      console.log(state[existingItemIndex]);
      state[existingItemIndex].quantity -= 1
      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1)
    },
  },
})
export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions

export default slice.reducer
