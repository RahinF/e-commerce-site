import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authentication.thunk";

const auth = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    error: { login: null, register: null },
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error.login = null;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error.login = action.payload;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error.register = null;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error.register = action.payload;
    },
  },
});

export const { setUser } = auth.actions
export default auth.reducer;
