
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "I'm learning Redux Toolkit", content: "It will be fun!" },
    { id: 2, title: "Slices", content: "It's slices for posts" }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded : {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }

            }
        }
    }
})

export const selectAllPosts = state => state.posts;
export const {postAdded} = postSlice.actions;

export default postSlice.reducer;