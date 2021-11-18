import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProducts = createAsyncThunk(
  "product/getProducts",
  async (category, thunkAPI) =>
    await axios
      .get(category
        ? `http://localhost:8000/api/products?category=${category}`
        : `http://localhost:8000/api/products`)
      .then((response) => response.data)
      .catch((error) => thunkAPI.rejectWithValue(error.response.data))
);

