import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { RootState } from '../store';
import { selectToken } from './authentication/login-slice';

export const baseQueryWithAuthorization = ({
  baseUrl,
  headers,
}: FetchBaseQueryArgs) => {
  return fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (extraHeaders, api) => {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken) {
        extraHeaders.set('authorization', `Bearer ${accessToken}`);
      } else {
        const token = selectToken(api.getState() as RootState);

        if (token) {
          extraHeaders.set('authorization', `Bearer ${token}`);
        }
      }

      return extraHeaders;
    },
    headers: headers,
  });
};
