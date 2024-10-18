import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [
       ],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        deletePro(state, action) {
            const productId = action.payload;
            return state.filter(item => item.id != action.payload)
        }
    }})

    export default cartSlice.reducer;
    export const {add, deletePro}= cartSlice.actions