import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) =>
    await axios
      .get(`http://localhost:8000/api/products/find/${id}`)
      .then((response) => response.data)
      .catch((error) => thunkAPI.rejectWithValue(error.response.data))
);
