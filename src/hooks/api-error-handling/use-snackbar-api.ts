import { AlertColor } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAlertInfo, setError } from '../../slices/alert-info-slice';
import { formatToApiError } from './utils';

/**
 * @desc Hook used for showing the errors obtained from the API in the a snackbar
 * @param {isError, error, errorMessage}
 */
export const useSnackbarApi = (
  isActive: boolean,
  error?: FetchBaseQueryError,
  message?: string,
  type?: AlertColor,
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      if (!type) {
        const apiError = message
          ? { message: message, status: 400 }
          : formatToApiError(error);

        dispatch(setError(apiError.message));
      } else {
        dispatch(setAlertInfo({ message: message, alertType: type }));
      }
    }
  }, [isActive]);
};
