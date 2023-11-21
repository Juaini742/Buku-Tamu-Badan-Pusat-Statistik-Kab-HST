import { createAsyncThunk } from "@reduxjs/toolkit";
import { subDistService } from "../service/subDist.service";

export const getSubDistAction = createAsyncThunk(
  "subDist/getSubDist",
  async (id) => {
    try {
      const subDist = await subDistService(id);
      return subDist;
    } catch (error) {
      console.error(error.message);
    }
  }
);
