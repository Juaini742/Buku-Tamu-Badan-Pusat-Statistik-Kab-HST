import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import criticsSlice from "./criticsSlice";
import guestsSlice from "./guestsSlice";
import provSlice from "./provSlice";
import regencySlice from "./regencySlice";
import subDistSlice from "./subDistSlice";
import distSlice from "./distSlice";
import { criticsPostAction } from "../Actions/criticsPostAction";
import { guestsPostAction } from "../Actions/guestsPostAction";

const rootReducer = combineReducers({
  auth: authSlice,
  critics: criticsSlice,
  guests: guestsSlice,
  prov: provSlice,
  regency: regencySlice,
  subDist: subDistSlice,
  dist: distSlice,
});

export const AsyncAction = {
  criticsPostAction,
  guestsPostAction,
};

export default rootReducer;
