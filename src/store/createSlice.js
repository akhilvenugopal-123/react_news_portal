import { createSlice } from "@reduxjs/toolkit";

const loadNewsFromLocalStorage = () => {
    try {
        const serializedNews = localStorage.getItem("news");
        if (serializedNews === null) {
            return [];
        }
        return JSON.parse(serializedNews);
    } catch (error) {
        return [];
    }
};

export const newsSlice = createSlice({
    name: 'news',
    initialState: { items: loadNewsFromLocalStorage() },
    reducers: {
        addNewsItem: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("news", JSON.stringify(state.items));
        },
        deleteNewsItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("news", JSON.stringify(state.items));
        },
        updateNewsItem: (state, action) => {
            const { id, title, detail } = action.payload;
            const newsItem = state.items.find((item) => item.id === id);
            if (newsItem) {
              newsItem.title = title;
              newsItem.detail = detail;
              localStorage.setItem("news", JSON.stringify(state.items));
            }
          },
    },
});


export const { addNewsItem, deleteNewsItem,updateNewsItem} = newsSlice.actions;
export default newsSlice.reducer;
