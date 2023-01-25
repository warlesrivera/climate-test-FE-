import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuthorization } from '../base-query-authorization';
import { ILoginParams, IDataResponse } from '../../types';
import { baseUrlApiRoutes } from '../base-url-api-routes';
import { setToken } from './login-slice';

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: baseQueryWithAuthorization({
        baseUrl: baseUrlApiRoutes.auth,
    }),
    endpoints(builder) {
        return {
            login: builder.mutation<IDataResponse, ILoginParams>({
                query: (loginParams) => {
                    return {
                        url: `/login`,
                        method: 'POST',
                        body: {
                            user: loginParams.user,
                            pass: loginParams.pass,
                        },
                    };
                },
                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;
                        dispatch(setToken(data.data))
                                                
                    } catch (error) { }
                },

            }),
            logoutUser: builder.mutation<void, void>({
                query() {
                    return {
                        url: 'logout',
                        credentials: 'include',
                    };
                },
            }),

        };
    },
});

export const {
    useLoginMutation,
} = loginApi;