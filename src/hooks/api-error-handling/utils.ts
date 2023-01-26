import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { IApiError } from './types';

export interface IErrorData {
  message: string;
}

/**
 * @desc Function that handles the API errors 
 * @param {error}
 *@return {errorResponse}
 */
export const formatToApiError = (error: FetchBaseQueryError): IApiError => {
  const errorResponse: IApiError = {
    message: 'Unexpected error. Please try again',
    status: 500,
  };

  if (error.data) {
    const errorData = error.data as IErrorData;
    if (errorData.message?.length > 0) {
      errorResponse.message = errorData.message;
      errorResponse.status = 400;
    }
  }
  return errorResponse;
};
