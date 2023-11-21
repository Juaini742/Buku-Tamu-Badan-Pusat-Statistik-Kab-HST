// distSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getDistAction } from "../Actions/distActions";

const distSlice = createSlice({
  name: "dist",
  initialState: {
    dist: [],
    selectedSubDistId: null,
  },
  reducers: {
    setSelectedSubDistId: (state, action) => {
      state.selectedSubDistId = action.payload;
      state.dist = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDistAction.fulfilled, (state, action) => {
      state.dist = action.payload.data;
    });
  },
});

export const { setSelectedSubDistId } = distSlice.actions;
export default distSlice.reducer;
