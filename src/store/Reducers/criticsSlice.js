import { createSlice } from "@reduxjs/toolkit";
import { loadCritics } from "../Actions/criticsGetAction";

const criticsSlice = createSlice({
  name: "critics",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    currentUser: null,
  },
  reducers: {
    addCritics: (state, action) => {
      state.data.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loadCritics.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(loadCritics.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(loadCritics.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const { addCritics, setCurrentUser } = criticsSlice.actions;
export default criticsSlice.reducer;
