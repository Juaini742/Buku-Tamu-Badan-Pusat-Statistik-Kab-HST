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

    if (!/^\d{16}$/.test(formData.ktp)) {
      throw new Error("KTP harus berisi 16 digit angka");
    }

    if (!/^\d{1,2}$/.test(formData.age)) {
      throw new Error("Usia maksimal 2 digit angka");
    }

    if (!/^\d{1,13}$/.test(formData.phone)) {
      throw new Error("Nomor telepon maksimal 13 digit angka");
    }

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
      }).then(() => {
        window.location.reload()
      })

      dispatch(setCurrentUser(user.uid));
      dispatch(addGuests(updateFormData));

      return updateFormData;
    } catch (error) {
      let errorMessage = "Terjadi kesalahan, silahkan ulangi";
      switch (true) {
        case error.message.includes("KTP"):
          errorMessage = "Kesalahan pada KTP: " + error.message;
          break;
        case error.message.includes("Usia"):
          errorMessage = "Kesalahan pada Usia: " + error.message;
          break;
        case error.message.includes("Nomor telepon"):
          errorMessage = "Kesalahan pada Nomor telepon: " + error.message;
          break;
        default:
          break;
      }

      swal({
        title: "Gagal",
        text: errorMessage,
        icon: "error",
      });
    }
  }
);
