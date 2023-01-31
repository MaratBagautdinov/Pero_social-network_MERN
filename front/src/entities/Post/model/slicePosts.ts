import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'loading'
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postSlice.reducer