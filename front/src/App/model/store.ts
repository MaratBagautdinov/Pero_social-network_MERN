import {configureStore} from "@reduxjs/toolkit";
import slicePosts from "@/entities/Post/model/slicePosts";

export default configureStore({
    reducer: {
        posts: slicePosts
    }
})