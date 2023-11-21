import { createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { setAuthData } from "../Reducers/authSlice";

export const registerAction = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { dispatch }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
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

      dispatch(
        setAuthData({
          user: fiedUser,
          registerSuccess: true,
          loginError: null,
        })
      );
      swal({
        title: "Kerja Bagus",
        text: "Anda sudah terdaftar, silahkan melakukan login",
        icon: "success",
      }).then(() => {
        window.location.href = "/loginUser";
      });
    } catch (err) {
      console.error("telah terjadi kesalahan", err.message);
      swal({
        title: "Gagal",
        text: "Terjadi kesalahan, silahkan ulangi",
        icon: "error",
      });
      dispatch(
        setAuthData({
          user: null,
          registerSuccess: false,
          loginError: null,
        })
      );
    }
  }
);
