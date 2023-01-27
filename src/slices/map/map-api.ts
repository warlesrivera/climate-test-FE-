import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuthorization } from '../base-query-authorization';
import { baseUrlApiRoutes } from '../base-url-api-routes';
import { IGetMapListResponse } from '../../types';

export const mapApi = createApi({
    reducerPath: 'map',
    baseQuery: baseQueryWithAuthorization({
        baseUrl: baseUrlApiRoutes.map,
    }),
    endpoints(builder) {
        return {
            map: builder.query<IGetMapListResponse, void>({
                query: () => {
                    return {
                        url: ``,
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const {
    useMapQuery,
} = mapApi;