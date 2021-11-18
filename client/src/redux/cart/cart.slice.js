import { createSlice } from "@reduxjs/toolkit";
import { loadCart } from "./cart.thunk";

const cart = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [loadCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [loadCart.pending]: (state) => {
      state.isLoading = true;
    },
    [loadCart.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cart.reducer;
