import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './products.thunk';

const products = createSlice({
    name: "products",
    initialState: {
      isLoading: false,
      data: null,
    },
    reducers: {},
    extraReducers: {
      [loadProducts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      },
      [loadProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [loadProducts.rejected]: (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
      }
    },
});

export default products.reducer;