import { Grid } from "@mui/material";
import React from "react";
import { LayoutAdm } from "../../components/layouts";
import MapChart from "./mapChart";



const Map = () => {
    return (
        <LayoutAdm title={'America humidity'} pageDescription={'discover the humidity of each state'} >
            <Grid container spacing={8} justifyContent='center'>
                <Grid item xs={12} sm={8} >
                    <MapChart />
                </Grid>
            </Grid>
        </LayoutAdm>
    );
}

export default Map
