import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProducts = createAsyncThunk(
  "product/getProducts",
  async (filter, thunkAPI) => {

    let url;
    const { category, latest } = filter;

    if (category) {
      url = `http://localhost:8000/api/products?category=${category}`;
    } else if (latest) {
      url = `http://localhost:8000/api/products?latest=true`;
    } else {
      url = `http://localhost:8000/api/products`;
    }

    return await axios
      .get(url)
      .then(response => response.data)
      .catch(error => thunkAPI.rejectWithValue(error.response.data));
  }
);
