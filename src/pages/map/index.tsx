import { Grid } from "@mui/material";
import React from "react";
import { LayoutAdm } from "../../components/layouts";
import { useMapQuery } from "../../slices/map/map-api";
import MapChart from "./mapChart";



const Map = () => {

    const {
        data: mapListData,
        isLoading: isGetMapLoading,
        isFetching: isGetMapFetching,
      } = useMapQuery();
    

      

    return (
        <LayoutAdm title={'America humidity'} pageDescription={'discover the humidity of each state'} >
            <Grid container spacing={8} justifyContent='center'>
                <Grid item xs={12} sm={8} >
                    <MapChart listMap={mapListData?mapListData?.data:null}/>
                </Grid>
            </Grid>
        </LayoutAdm>
    );
}

export default Map
