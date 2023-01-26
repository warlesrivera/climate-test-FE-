import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { IAlertInfoState, ISetAlertInfoPayload } from 'src/types/alert-info';

const initialState: IAlertInfoState = {
  message: '',
  isActive: false,
  alertType: null,
};

export const alertInfoSlice = createSlice({
  name: 'alertInfo',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.alertType = 'error';
      state.isActive = true;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.alertType = 'success';
      state.isActive = true;
    },
    setAlertInfo: (state, action: PayloadAction<ISetAlertInfoPayload>) => {
      state.message = action.payload.message;
      state.alertType = action.payload.alertType;
      state.isActive = true;
    },
    clearError: (state) => {
      state.isActive = false;
    },
  },
});

export const { setError, setAlertInfo, setSuccess, clearError } = alertInfoSlice.actions;

export const selectErrorState = (state: RootState) => state.alertInfo;

export default alertInfoSlice.reducer;
