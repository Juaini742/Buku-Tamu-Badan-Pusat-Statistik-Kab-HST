import { createSlice } from "@reduxjs/toolkit";
import { getRegencData } from "../Actions/regencyAction";

const regencSlice = createSlice({
  name: "regency",
  initialState: {
    regency: [],
    selectedProv: null,
  },
  reducers: {
    setSelectedProvId: (state, action) => {
      state.selectedProv = action.payload;
      state.regency = [];
    },
  },
  extraReducers: (build) => {
    build.addCase(getRegencData.fulfilled, (state, action) => {
      state.regency = action.payload.data;
    });
  },
});

export const { setSelectedProvId } = regencSlice.actions;
export default regencSlice.reducer;
