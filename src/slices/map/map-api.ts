import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuthorization } from '../base-query-authorization';
import { baseUrlApiRoutes } from '../base-url-api-routes';
import { IGetMapListResponse, IHistoryParams } from '../../types';

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
            historyMap:builder.query<IGetMapListResponse,IHistoryParams >({
                query: (historyParams) => {
                    return {
                        url: `/history/${historyParams.id}/10?page=${historyParams.page}`,
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const {
    useMapQuery,
    useHistoryMapQuery
} = mapApi;