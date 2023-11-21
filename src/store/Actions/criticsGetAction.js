import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase";

export const loadCritics = createAsyncThunk("critics/loadCrtics", async () => {
  try {
    const userId = localStorage.getItem("userId");

    const q = query(collection(db, "critics"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (err) {
    console.error(err);
  }
});

export const selectCritics = (state) => state.critics.data;
