import { createSlice } from '@reduxjs/toolkit';

const wishlist = createSlice({
    name: "wishlist",
    initialState: {
        data: []
    },
    reducers: {
        add: (state, action) => {
            state.data.push(action.payload)
        },
        remove: (state, action) => {
            state.data = state.data.filter(item => item !== action.payload)
        },
    },

});

export const { add, remove } = wishlist.actions;
export default wishlist.reducer;