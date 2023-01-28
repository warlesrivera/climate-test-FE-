import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const baseQueryWithAuthorization = ({
  baseUrl,
  headers,
}: FetchBaseQueryArgs) => {
  return fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (extraHeaders) => {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken) {
        extraHeaders.set('authorization', `Bearer ${accessToken}`);
      }

      return extraHeaders;
    },
    headers: headers,
  });
};
