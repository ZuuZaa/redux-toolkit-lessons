import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postSlice from "../features/posts/postSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        posts: postSlice,
        users: usersSlice
    }
})