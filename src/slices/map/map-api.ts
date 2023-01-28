import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuthorization } from '../base-query-authorization';
import { baseUrlApiRoutes } from '../base-url-api-routes';
import { IDataGridMap, IGetMapListResponse, IHistoryParams, IMapData } from '../../types';

export const mapApi = createApi({
    reducerPath: 'map',
    baseQuery: baseQueryWithAuthorization({
        baseUrl: baseUrlApiRoutes.map,
    }),
    tagTypes: ['MapHistory'],
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
            historyMap: builder.query<IDataGridMap, IHistoryParams>({
                query: (historyParams) => {
                    return {
                        url: `/history/${historyParams.id}/10?page=${historyParams.page}`,
                        method: 'GET',
                    };
                },
                providesTags: ['MapHistory'],
                transformResponse: (response: { data: IGetMapListResponse; }) => {
                    let mapData: IMapData[] = [];
                    response.data.data?.map((item) => {
                        mapData.push({
                            id: item.id,
                            city: item.city.name,
                            geo: `${item.city.lat} , ${item.city.long}`,
                            humidity: item.humidity,
                            alerts: item.alerts != null ? item.alerts[0].sender_name : 'no alerts',
                            weather: item.weather[0].main,
                            created_at: item.created_at,
                        })
                    });
                    const res = {
                        mapInfo: mapData,
                        per_page: response.data.per_page,
                        current_page: response.data.current_page,
                        to: response.data.to,
                        total: response.data.total,
                        from: response.data.from,
                        last_page: response.data.last_page,
                    };
                    return res;
                },
                keepUnusedDataFor: 300,
            }),
        };
    },
});

export const {
    useMapQuery,
    useHistoryMapQuery
} = mapApi;
