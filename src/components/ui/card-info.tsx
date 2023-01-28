import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

interface Prop {
    title: string;
    description: string;
    start: number;
    end: number;
    humidity: number;
}
export const CardInfo = ({ title, description, start, end, humidity }: Prop) => {
    return (
        <Card elevation={2.0} sx={{ borderRadius: '0' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid xs={12} item >
                        <Typography variant="h3" > Humidity : {humidity}</Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: '12px' }}>start : {new Date(start).toString()}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: '12px' }} >end : {new Date(end).toString()} </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}

