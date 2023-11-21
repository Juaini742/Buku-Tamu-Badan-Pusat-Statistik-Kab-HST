import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { addGuests, setCurrentUser } from "../Reducers/guestsSlice";
import swal from "sweetalert";

export const guestsPostAction = createAsyncThunk(
  "guests/guestsAction",
  async ({ formData }, { dispatch }) => {
    try {
      const user = auth.currentUser;

      const updateFormData = {
        date: formData.date,
        name: formData.name,
        ktp: formData.ktp,
        educate: formData.educate,
        age: formData.age,
        work: formData.work,
        phone: formData.phone,
        selectedProvinsi: formData.selectedProvinsi,
        selectedKab: formData.selectedKab,
        selectedKec: formData.selectedKec,
        selectedKel: formData.selectedKel,
        address: formData.address,
        data: formData.data,
        userId: user.uid,
      };

      await addDoc(collection(db, "guests"), updateFormData);

      swal({
        title: "Terima kasih",
        text: "Anda berhasil memasukkan data baru. Terima kasih atas waktunya",
        icon: "success",
      });

      dispatch(setCurrentUser(user.uid));
      dispatch(addGuests(updateFormData));

      return updateFormData;
    } catch (error) {
      console.error(error.message);
      swal({
        title: "Gagal",
        text: "Terjadi kesalahan, silahkan ulangi",
        icon: "error",
      });
    }
  }
);
