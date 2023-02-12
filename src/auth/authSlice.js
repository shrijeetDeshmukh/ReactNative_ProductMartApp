import { createSlice } from "@reduxjs/toolkit";
import { removeData } from "../storage/asyncStore";

const initialState = {
    isLoggedIn: false,
}
const authSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        setSignOut: (state) => {
            removeData();
            state.isLoggedIn = false;
        },
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export default authSlice.reducer;