import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from "jsonwebtoken";

export const loginUser = createAsyncThunk(
    "user/login",
    async (credentials, thunkAPI) =>
     await axios
        .post(`http://localhost:8000/api/auth/login`, credentials)
        .then((response) => {
          const { token } = response.data;
          const user = jwt.decode(token);
          localStorage.setItem('token', token);
          return { ...user, token };
        })
        .catch((error) => thunkAPI.rejectWithValue(error.response.data))
  );
  
  export const registerUser = createAsyncThunk(
    "user/register",
    async (credentials, thunkAPI) =>
    await axios
        .post(`http://localhost:8000/api/auth/register`, credentials)
        .then((response) => {
          const { token } = response.data;
          const user = jwt.decode(token);
          localStorage.setItem('token', token);
          return { ...user, token };
        })
        .catch((error) => thunkAPI.rejectWithValue(error.response.data))
  );