import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./createSlice";

const store = configureStore({
    reducer: {
        news: newsReducer,
    },
});

export default store;
