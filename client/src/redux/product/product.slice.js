import { createSlice } from '@reduxjs/toolkit';
import { loadProduct } from './product.thunk';

const product = createSlice({
    name: "product",
    initialState: {
      isLoading: false,
      data: null,
    },
    reducers: {},
    extraReducers: {
      [loadProduct.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      },
      [loadProduct.pending]: (state) => {
        state.isLoading = true;
      },
      [loadProduct.rejected]: (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
      }
    },
});

export default product.reducer;
