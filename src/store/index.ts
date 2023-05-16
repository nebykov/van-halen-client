import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/userReducer'
import tracksReducer from "./actions/tracksReducer";


export const store = configureStore({
    reducer: {
        user: userReducer,
        track: tracksReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch