import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { setAuthData } from "../Reducers/authSlice";

export const loginAction = createAsyncThunk(
  "auth/loginuser",
  async ({ email, password }, { dispatch }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const fiedUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      };

      localStorage.setItem("Email", email);
      localStorage.setItem("userId", fiedUser.uid);

      window.location.href = "/";

      dispatch(
        setAuthData({
          user: fiedUser,
          registerSuccess: false,
          loginError: null,
        })
      );
    } catch (error) {
      console.error("terjadi kesalahan", error.message);
      dispatch(
        setAuthData({
          user: null,
          registerSuccess: false,
          loginError: error.message,
        })
      );
    }
  }
);
