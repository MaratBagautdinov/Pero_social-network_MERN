import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import postsSlice from "./posts/postsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsSlice
    }
})
