import { Box, Typography } from '@mui/material';
import { LayoutAdm } from "../components/layouts";

const Custom404 = () => {
    return (
        <LayoutAdm title='Page not found' pageDescription='There is nothing to show here'>
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
        </LayoutAdm>
    )
}

export default Custom404;