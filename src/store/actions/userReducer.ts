import { IUser } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IUserState {
     user: IUser | null,
     isAuth: boolean
}

const initialState: IUserState = {
       user: null,
       isAuth: false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         setUser: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload
            state.isAuth = true
         },
         logoutUser: (state) => {
          state.user = null
          state.isAuth = false
         }
    }
})


export const {setUser, logoutUser} = userSlice.actions



export default userSlice.reducer