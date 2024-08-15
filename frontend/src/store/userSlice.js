import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "auth",
    initialState: {
        userData: null,
        status: false,
    },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload.userData;
            state.status = true;
        },
        logout: (state) => {
            state.userData = null;
            state.status = false;
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
