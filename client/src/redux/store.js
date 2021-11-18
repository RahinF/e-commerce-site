import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";



import auth from "./authentication/authentication.slice";
import products from "./products/products.slice";
import product from "./product/product.slice";
import  cart  from "./cart/cart.slice";

const reducer = combineReducers({
  products,
  product,
  cart,
  user: auth,
});

export const store = configureStore({
  reducer,
});
