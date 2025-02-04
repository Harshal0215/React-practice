import { configureStore } from "@reduxjs/toolkit";
import moviereducer from './movieSlice'

export const store = configureStore({
    reducer: {
        movies : moviereducer
    },
})