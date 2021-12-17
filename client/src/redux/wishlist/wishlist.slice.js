import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    quantity: 0,
}
const wishlist = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.data.push(action.payload);
            state.quantity += 1;
        },
        remove: (state, action) => {
            state.data = state.data.filter(item => item !== action.payload);
            state.quantity -= 1;
        },
        clear: () => initialState
    },

});

export const { add, remove, clear } = wishlist.actions;
export default wishlist.reducer;