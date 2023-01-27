import { combineReducers } from "@reduxjs/toolkit";
import sessionStorage from 'redux-persist/lib/storage/session';
import { slicesNamesConstants } from "../common/constants/slices-names-constants";
import { loginSlice } from "../slices";
import { loginApi } from "../slices/authentication/login-api";
import alertInfoReducer from '../slices/alert-info-slice';
import loadingModalReducer from '../slices/loading-modal-slice';
import { mapApi } from "../slices/map/map-api";


const loginConfig = {
  key: slicesNamesConstants.login,
  storage: sessionStorage,
};
export const rootReducer = combineReducers({
  loginUser: loginSlice.reducer,
  alertInfo: alertInfoReducer,
  loadingModal: loadingModalReducer,
  
  [loginApi.reducerPath]  : loginApi.reducer,
  [mapApi.reducerPath]    : mapApi.reducer,
  
  
  });
  