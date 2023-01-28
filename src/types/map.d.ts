import { CalendarProviderTypes } from './response';

export interface IHistoryParams {
    id: string;
    page: number;
}

export interface IGetMapListResponse extends IDataResponse {
    data: IMap[];
}
export interface IMap {
    humidity: number;
    alerts: IAlert[];
    weather: Weather[];
    user_id: number;
    city_id: number;
    updated_at: Date;
    created_at: Date;
    id: number;
    city: ICity
}

export interface IAlert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
    tags: any[];
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}


export interface ICity {
    id: number;
    name: string;
    lat: string;
    long: string;
    created_at: Date;
    updated_at: Date;
}

export interface IOffsets {
    VT: number[],
    NH: number[],
    MA: number[],
    RI: number[],
    CT: number[],
    NJ: number[],
    DE: number[],
    MD: number[],
    DC: number[]
};

export interface IMapData {
    id: number;
    city: string;
    geo: string;
    humidity: number;
    alerts: string;
    weather: string;
    created_at: Date;
}

export interface IDataGridMap {
    mapInfo: IMapData[];
    per_page: number;
    to: number;
    total: number;
    current_page: number;
    from: number;
    last_page: number;


}