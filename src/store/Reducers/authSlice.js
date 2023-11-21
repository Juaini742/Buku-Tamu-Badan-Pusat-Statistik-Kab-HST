import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: null,
    displayName: null,
    email: null,
  },
  registerSuccess: false,
  loginError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload.user;
      state.registerSuccess = action.payload.registerSuccess;
      state.loginError = action.payload.loginError;
    },
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
