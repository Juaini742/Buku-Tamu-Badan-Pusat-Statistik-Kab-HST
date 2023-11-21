import { createSlice } from "@reduxjs/toolkit";
import { getSubDistAction } from "../Actions/subDistAction";

const subDistSlice = createSlice({
  name: "subDist",
  initialState: {
    subDist: [],
    selectedRegencyId: null,
  },
  reducers: {
    setSelectedRegencyId: (state, action) => {
      state.selectedRegencyId = action.payload;
      state.subDist = [];
    },
  },
  extraReducers: (build) => {
    build.addCase(getSubDistAction.fulfilled, (state, action) => {
      state.subDist = action.payload.data;
    });
  },
});

export const { setSelectedRegencyId } = subDistSlice.actions;
export default subDistSlice.reducer;
