import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
