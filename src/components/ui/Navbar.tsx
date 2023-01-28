import React, { useContext, useState } from 'react'
import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'


interface Props {
    useStateDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
export const Navbar = ({ useStateDrawer }: Props) => {

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/home' passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6' color='blue'>American |</Typography>
                        <Typography sx={{ ml: 0.5 }} color='red'>humidity</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/map' passHref legacyBehavior>
                        <Link>
                            <Button>principal Map</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/history' passHref legacyBehavior>
                        <Link>
                            <Button >history</Button>
                        </Link>
                    </NextLink>

                </Box>
                <Box flex={1} ></Box>

                <Button onClick={() => (useStateDrawer(true))}>
                    Menú
                </Button>
            </Toolbar>
        </AppBar >

    )
}

