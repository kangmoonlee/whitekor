import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: ""
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        authReducer: ( state, action ) => {
            state.token = action.payload
        }
    }
})

export const { authReducer } = authSlice.actions
export default authSlice