import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProvService } from "../service/prov.service";

export const getProvAction = createAsyncThunk(
  "prov/getProv",
  async (provinsiId) => {
    try {
      const prov = await getProvService(provinsiId);
      return prov;
    } catch (err) {
      throw new Error(err);
    }
  }
);
