import { AlertColor } from '@mui/material';

export interface IAlertInfoState {
  message: string|undefined;
  isActive: boolean;
  alertType?: AlertColor|null,
}

export interface ISetAlertInfoPayload {
  message?: string|undefined,
  alertType?: AlertColor,
}