import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../token";

export const loadCart = createAsyncThunk(
  "cart/getCart",
  async (id, thunkAPI) => {
    const token = getToken();

    // get user cart
    const cart = await axios
      .get(`http://localhost:8000/api/carts/find/${id}`, {
        headers: { token: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));

      // loop through products in users cart and fetch the product
    const promises = cart.products.map(async ({ productId, quantity }) => {
      const product = await axios
        .get(`http://localhost:8000/api/products/find/${productId}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));

      return { data: product, quantity: quantity };
    });
    // return the cart id with products in users cart
    return { cartId: cart._id, products: await Promise.all(promises) };
  }
);

export const clearCart = createAsyncThunk("cart/clear", async (id) => {
  const token = getToken();
  await axios
    .delete(`http://localhost:8000/api/carts/${id}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
});

export const createCart = createAsyncThunk("cart/create", async (product) => {
  const token = getToken();

  await axios.post(`http://localhost:8000/api/carts/`, product, {
    headers: { token: `Bearer ${token}` },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
})

export const updateCart = createAsyncThunk("cart/update", async (cart) => {
  const token = getToken();

  const { cartId, product } = cart;


  await axios.put(`http://localhost:8000/api/carts/${cartId}`, product, {
    headers: { token: `Bearer ${token}` }
  })
    .then(response => response.data)
    .catch(error => console.log(error))
})
