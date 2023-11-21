import { createAsyncThunk } from "@reduxjs/toolkit";
import { regencyService } from "../service/regency.service";

export const getRegencData = createAsyncThunk(
  "regency/getRegency",
  async (provinsiId) => {
    try {
      const regency = await regencyService(provinsiId);
      return regency;
    } catch (error) {
      console.error(error.message);
    }
  }
);
