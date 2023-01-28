import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import userService from "./userService";

export const getUser = createAsyncThunk('GET_USER', async (userID:string,thunkAPI) =>{
    try {
        const user = await userService.getUser(userID)
        return user
    }catch (error){
        // @ts-ignore
        return thunkAPI.rejectWithValue(error.response.message)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isError: false,
        isLoading: false,
        message: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(getUser.rejected, (state,action) => {
            state.isLoading = false
            state.isError = true
            state.user = null
        })
    },
    reducers: {}
})

export default userSlice.reducer