import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase";

export const loadGuestAction = createAsyncThunk(
  "guest/loadGuests",
  async () => {
    try {
      const userId = localStorage.getItem("userId");

      const q = query(collection(db, "guests"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const selectGuests = (state) => state.guests.data;
