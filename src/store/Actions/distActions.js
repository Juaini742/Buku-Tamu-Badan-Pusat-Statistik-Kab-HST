// distAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { distService } from "../service/dist.service";

export const getDistAction = createAsyncThunk("dist/getDist", async (id) => {
  try {
    const dist = await distService(id);
    return dist;
  } catch (error) {
    console.error(error.message);
    throw error; // Re-throw the error to propagate it to the UI
  }
});
