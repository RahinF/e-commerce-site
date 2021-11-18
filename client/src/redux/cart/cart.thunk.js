import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../token";


export const loadCart = createAsyncThunk(
  "cart/getCart",
  async (_id, thunkAPI) => {
    const token = getToken();

    // get user cart
    const cart = await axios
      .get(`http://localhost:8000/api/carts/find/${_id}`, {
        headers: { token: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));

    // loop through products in users cart and fetch the product
    const promises = cart.products.map(async ({ productId, quantity }) => {
      const product = await axios
        .get(`http://localhost:8000/api/products/find/${productId}`)
        .then((res) => res.data)
        .catch((error) => console.log(error));

      return { data: product, quantity: quantity };
    });

    return await Promise.all(promises);
  }
);
