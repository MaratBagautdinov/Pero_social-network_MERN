import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import postsService from "./postsService";

export const getPosts = createAsyncThunk('GET_POSTS', async (userID:string,thunkAPI) =>{
    try {
        return await postsService.getPosts(userID)
    }catch (error){
        // @ts-ignore
        return thunkAPI.rejectWithValue(error.response.message)
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: null,
        isError: false,
        isLoading: false,
        message: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        })
        builder.addCase(getPosts.rejected, (state,action) => {
            state.isLoading = false
            state.isError = true
            // @ts-ignore
            state.message = action.payload.message
            state.posts = null
        })
    },
    reducers: {}
})

// @ts-ignore
export default postsSlice.reducer