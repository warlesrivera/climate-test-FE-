import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuthorization } from '../base-query-authorization';
import { ILoginParams, IDataResponse, IGenericResponse, IUserParam } from '../../types';
import { baseUrlApiRoutes } from '../base-url-api-routes';
import { setToken } from './login-slice';

export const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: baseQueryWithAuthorization({
        baseUrl: baseUrlApiRoutes.auth,
    }),
    endpoints(builder) {
        return {
            login: builder.mutation<IGenericResponse, ILoginParams>({
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
                transformResponse: (response: { data: IGenericResponse; }) =>(response.data),
                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;
                        dispatch(setToken(data));

                    } catch (error) { }
                },

            }),
            registerUser: builder.mutation<string, IUserParam>({
                query: (UserParams) => {
                    return {
                        url: `${baseUrlApiRoutes.user}/create`,
                        method: 'POST',
                        body:UserParams ,
                    };
                },
            }),
            logout: builder.mutation<void, void>({
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
    useRegisterUserMutation,
    useLogoutMutation
} = loginApi;