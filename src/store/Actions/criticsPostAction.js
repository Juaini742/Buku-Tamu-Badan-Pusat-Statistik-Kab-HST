import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../Firebase";
import { addCritics, setCurrentUser } from "../Reducers/criticsSlice";
import { addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";

export const criticsPostAction = createAsyncThunk(
  "critics/CriticsData",
  async ({ formData }, { dispatch }) => {
    try {
      const user = auth.currentUser;

      const updateFormData = {
        name: formData.name,
        suggestion: formData.suggestion,
        userId: user.uid,
      };

      await addDoc(collection(db, "critics"), updateFormData);

      swal({
        title: "Sukses",
        text: "Terima kasih sudah memberikan masukkan",
        icon: "success",
      });

      dispatch(setCurrentUser(user.uid));
      dispatch(addCritics(updateFormData));

      return updateFormData;
    } catch (err) {
      console.error(err.message);
      swal({
        title: "Gagal",
        text: "Terjadi kesalahan, silahkan ulangi",
        icon: "error",
      });
    }
  }
);
