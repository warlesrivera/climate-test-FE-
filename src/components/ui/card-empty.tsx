import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'


export const CardEmpty = () => {
    return (
        <Card elevation={2.0} sx={{ borderRadius: '0' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    No previous news
                </Typography>
            </CardContent>
        </Card>
    )
}

