import NextLink from 'next/link';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { LayoutAdm } from '../../components/layouts';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Name Complete', width: 300 },

    {
        field: 'paid',
        headerName: 'all',
        description: 'descriptions test',
        width: 200,
        renderCell: (params) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="all" variant='outlined' />
                    : <Chip color="error" label="No all" variant='outlined' />
            )
        }
    },
    {
        field: 'order',
        headerName: 'view order',
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return (
               <NextLink href={`/orders/${ params.row.id }`} passHref>
                    <Link underline='always'>
                        Ver orden
                    </Link>
               </NextLink>
            )
        }
    }
];


const rows = [
    { id: 1, paid: true, fullName: 'Fernando Herrera' },
    { id: 2, paid: false, fullName: 'Melissa Flores' },
    { id: 3, paid: true, fullName: 'Hernando Vallejo' },
    { id: 4, paid: false, fullName: 'Emin Reyes' },
    { id: 5, paid: false, fullName: 'Eduardo Rios' },
    { id: 6, paid: true, fullName: 'Natalia Herrera' },
]


const UserPage = () => {
  return (
    <LayoutAdm title={'moisture history '} pageDescription={'register of dampness consultations in the americas '}>
        <Typography variant='h1' component='h1'>History </Typography>


        <Grid container>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>

    </LayoutAdm>
  )
}

export default UserPage