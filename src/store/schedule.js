import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const scheduleSlice = createSlice({
    name: "scheduleSlice",
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            console.log(state)
            console.log(action)
        }
    }
})

export const { addSchedule } = scheduleSlice.actions
export default scheduleSlice