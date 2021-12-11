import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";



import auth from "./authentication/authentication.slice";
import products from "./products/products.slice";
import product from "./product/product.slice";
import  cart  from "./cart/cart.slice";
import wishlist from './wishlist/wishlist.slice'

const reducer = combineReducers({
  products,
  product,
  cart,
  user: auth,
  wishlist,
});

export const store = configureStore({
  reducer,
});
