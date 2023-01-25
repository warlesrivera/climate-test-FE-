import { combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from "../slices";

export const rootReducer = combineReducers({
    loginUser: loginSlice.reducer,  
  
  });
  