import { createSlice } from "@reduxjs/toolkit";
import { loadGuestAction } from "../Actions/guestsGetAction";

const guestSlice = createSlice({
  name: "guests",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    currentUser: null,
  },
  reducers: {
    addGuests: (state, action) => {
      state.data.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(loadGuestAction.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(loadGuestAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(loadGuestAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { addGuests, setCurrentUser } = guestSlice.actions;
export default guestSlice.reducer;
