import { createSlice } from "@reduxjs/toolkit";
import { clearCart, createCart, loadCart, updateCart } from "./cart.thunk";

const initialState = {
  isLoading: false,
  data: [],
  quantity: 0,
  total: 0
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
      state.total += action.payload.product.price * action.payload.quantity;
      state.quantity += 1;
    },

    clear: () => initialState

  },
  extraReducers: {
    [createCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [createCart.pending]: (state) => {
      state.isLoading = true;
    },
    [createCart.rejected]: (state) => {
      state.isLoading = false;
    },

    [updateCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [updateCart.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCart.rejected]: (state) => {
      state.isLoading = false;
    },

    [loadCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.quantity = action.payload.products.length; 
    },
    [loadCart.pending]: (state) => {
      state.isLoading = true;
    },
    [loadCart.rejected]: (state) => {
      state.isLoading = false;
    },

    [clearCart.fulfilled]: (state) => {
      state.isLoading = false;
      state.data = null;
    },
    [clearCart.pending]: (state) => {
      state.isLoading = true;
    },
    [clearCart.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addProduct, clear } = cart.actions;
export default cart.reducer;
