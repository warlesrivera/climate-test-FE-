import { combineReducers } from "@reduxjs/toolkit";
import sessionStorage from 'redux-persist/lib/storage/session';
import { slicesNamesConstants } from "../common/constants/slices-names-constants";
import { loginSlice } from "../slices";
import { loginApi } from "../slices/authentication/login-api";


const loginConfig = {
  key: slicesNamesConstants.login,
  storage: sessionStorage,
};
export const rootReducer = combineReducers({
  loginUser: loginSlice.reducer, 
  [loginApi.reducerPath]: loginApi.reducer,
  
  
  });
  