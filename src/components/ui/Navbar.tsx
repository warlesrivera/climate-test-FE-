import React, { useContext } from 'react'
import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import { UiContext } from '../../context';

export const Navbar = () => {
    const { toggleSideMenu } = useContext( UiContext );
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/category/men' passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6' color='blue'>American |</Typography>
                        <Typography sx={{ ml: 0.5 }} color='red'>humidity</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/map' passHref legacyBehavior>
                        <Link>
                            <Button /* color={ asPath === '/map' ? 'primary':'info'} */>principal Map</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/history' passHref legacyBehavior>
                        <Link>
                            <Button >history</Button>
                        </Link>
                    </NextLink>

                </Box>
                <Box flex={1} ></Box>

                <Button onClick={ toggleSideMenu }>
                    Menú
                </Button>
            </Toolbar>
        </AppBar >

    )
}

