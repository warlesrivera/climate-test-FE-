import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import UseLogin from '../../hooks/use-login';
import { validations } from '../../utils';
import { AuthLayout } from '../../components/layouts'
import { ErrorOutline } from '@mui/icons-material';
import { useSnackbarApi } from '../../hooks/api-error-handling/use-snackbar-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useIsLoadingModal } from '../../hooks/use-is-loading-modal';

type FormData = {
    email: string,
    password: string,
};

const LoginPage = () => {

    /* hook the react-hook-from require from validation */
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    /* status to trigger errors */
    

    /*Custom hook to call the save action  */

    const { login,showError,isLoginError,loginError,isLoginLoading } = UseLogin();

    /* function login user */
    const onLoginUser = async ({ email, password }: FormData) => {

        const isValidLogin = await login({ user: email, pass: password });

    }
    useIsLoadingModal(isLoginLoading, false, 'verified data...');

    useSnackbarApi(
        isLoginError,
        loginError as FetchBaseQueryError,
        'Error in authentication'
      );
    
    return (
        <AuthLayout title={'Login'}>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Login</Typography>
                            <Chip
                                label="We do not recognize this user/password"
                                color="error"
                                icon={<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="email"
                                variant="filled"
                                fullWidth
                                {...register('email', {
                                    required: 'This field is required',
                                    validate: validations.isEmail

                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="password"
                                type='password'
                                variant="filled"
                                fullWidth
                                {...register('password', {
                                    required: 'This field is required',
                                    minLength: { value: 6, message: 'Minimum 6 characters' }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" color="secondary" className='circular-btn' size='large' fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href="/auth/register" passHref legacyBehavior>
                                <Link underline='always' >
                                    Don't have an account?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>

            </form>
        </AuthLayout>
    )
}

export default LoginPage