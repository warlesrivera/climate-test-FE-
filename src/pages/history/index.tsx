
import { Typography, Grid, Chip, Link, Box } from '@mui/material';
import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';

import { LayoutAdm } from '../../components/layouts';
import { selectUser, useHistoryMapQuery } from '../../slices';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GridSkeleton } from '../../components/ui';




const HistoryPage = () => {

    const user = useSelector(selectUser);
    const [pagination, setPagination] = useState<number>(1);

    const
        {
            isSuccess: isHistorySuccess,
            isLoading: isHistoryLoading,
            isFetching: isHistoryFetching,
            data: historyResponse,
        } = useHistoryMapQuery({ id: user.id, page: pagination });

    const columns: GridColumns = [
        {
            field: 'id', headerName: 'ID', sortable: true, width: 100, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.id}
                </Typography>
            ),
        },
        {
            field: 'city', headerName: 'City', sortable: true, width: 200, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.city}
                </Typography>
            ),
        },
        {
            field: 'geo', headerName: 'Geo', sortable: true, width: 300, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.geo}
                </Typography>
            ),
        },
        {
            field: 'humidity', headerName: 'Humidity', sortable: true, width: 200, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.humidity}
                </Typography >
            ),
        },
        {
            field: 'alerts', headerName: 'Alerts', sortable: true, width: 300, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.alerts}
                </Typography>
            ),
        },
        {
            field: 'weather', headerName: 'Weather', sortable: true, width: 200, renderCell: (params) => (
                <Typography variant="body1" noWrap>
                    {params.row.weather}
                </Typography>
            ),
        },
    ];

    

    if (!historyResponse) {
        return (
            <Box sx={{ px: 3, py: 3 }}>
                <GridSkeleton rowsNumber={4} />
            </Box>
        );
    }

    return (
        <LayoutAdm title={'humidity history '} pageDescription={'register of dampness consultations in the americas '}>
            <Typography variant='h1' component='h1'>History </Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>

                    <DataGrid
                        loading={isHistoryFetching}
                        rows={historyResponse.mapInfo}
                        columns={columns}
                        pageSize={historyResponse.per_page}
                        rowCount={historyResponse.total}
                        paginationMode="server"
                        onPageChange={(page) => {
                            const renderPage = page + 1;
                            if (page > 0) {
                                setPagination(renderPage)
                            }
                            
                        }
                        }
                    />

                </Grid>
            </Grid>

        </LayoutAdm>
    )
}

export default HistoryPage