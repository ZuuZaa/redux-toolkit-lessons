
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "I'm learning Redux Toolkit", content: "It will be fun!" },
    { id: 2, title: "Slices", content: "It's slices for posts" }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const selectAllPosts = state => state.posts;
export const {postAdded} = postSlice.actions;

export default postSlice.reducer;