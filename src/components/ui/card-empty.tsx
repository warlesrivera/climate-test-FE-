import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

interface Prop {
    humidity?: number;

}
export const CardEmpty = ({ humidity }: Prop) => {
    return (
        <Card elevation={2.0} sx={{ borderRadius: '0' }}>
            <CardContent>
                {humidity ? (
                    <>
                        <Grid container spacing={2}>
                            <Grid xs={12} item >
                                <Typography variant="h5" > Humidity : {humidity}</Typography>
                            </Grid>
                        </Grid><Divider />
                    </>) : <></>}
                <Typography variant="h5" component="div">
                    No previous news
                </Typography>
            </CardContent>
        </Card>
    )
}

