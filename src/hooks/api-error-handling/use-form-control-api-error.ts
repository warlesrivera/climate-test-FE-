import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { Path, UseFormSetError } from 'react-hook-form';
import { formatToApiError } from './utils';


/**
 * @desc Hook used for controlling the errors obtained from the API and showing them in the form field
  * @param {name, isError, error, setError}
 */
export const useFormControlApiError = <TForm>(
  name: Path<TForm>,
  isError: boolean,
  error: FetchBaseQueryError,
  setError: UseFormSetError<TForm>
) => {
  useEffect(() => {
    if (isError) {
      const errorMessage = formatToApiError(error);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError(name, {
        type: 'manual',
        message: errorMessage.message,
      });
    }
  }, [isError]);
};
