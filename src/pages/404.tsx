import { Box, Typography } from '@mui/material';
import AuthLayout from '../components/layouts/AuthLayout';

const Custom404 = () => {
    return (
        <AuthLayout title='Page not found' >
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
                <Typography marginLeft={2}>We did not find any page here</Typography>
            </Box>
        </AuthLayout>
    )
}

export default Custom404;