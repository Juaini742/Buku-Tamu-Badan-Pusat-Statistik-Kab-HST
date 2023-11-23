import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query,} from "firebase/firestore";
import { db } from "../../Firebase";

export const guesAlltAction = createAsyncThunk(
  "guest/loadGuests",
  async () => {
    try {

      const q = query(collection(db, "guests"));
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
