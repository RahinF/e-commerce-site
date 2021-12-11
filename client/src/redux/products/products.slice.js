import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './products.thunk';

const products = createSlice({
    name: "products",
    initialState: {
      isLoading: false,
      data: [],
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
      [loadProducts.rejected]: (state) => {
        state.isLoading = false;
      }
    },
});

export default products.reducer;