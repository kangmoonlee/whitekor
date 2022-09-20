import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import { combinerootReducer, createStore } from "redux"
import authSlice from "./auth"
import scheduleSlice from "./schedule"
const rootReducer = combineReducers({
    auth: authSlice.reducer,
    schedule: scheduleSlice.reducer
})

console.log(process.env.NODE_ENV)
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production" 
})
export default store