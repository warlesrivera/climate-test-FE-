import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import  AuthLayout  from '../../components/layouts/AuthLayout'
import { ErrorOutline } from '@mui/icons-material';
import { validations } from '../../utils';
import { useIsLoadingModal } from '../../hooks/use-is-loading-modal';
import { useSnackbarApi } from '../../hooks/api-error-handling/use-snackbar-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useMounted } from '../../hooks/use-mounted';
import UseRegister from '../../hooks/use-register';



type FormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const isMounted = useMounted();

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);

    const { registerUser, registerError, isRegisterError, isRegisterLoading } = UseRegister();

    const onRegisterForm = async ({ name, email, password }: FormData) => {

        setShowError(false);
        await registerUser({name, email, password});

        if (isMounted()) {
           // router.replace('/');
        }

    }

    useIsLoadingModal(isRegisterLoading, false, 'verified data...');

    useSnackbarApi(
        isRegisterError,
        registerError as FetchBaseQueryError,
        'Error in Register'
    );


    return (
        <AuthLayout title={'Register'}>
            <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Create an account</Typography>
                            <Chip
                                label="We do not recognize this user / password"
                                color="error"
                                icon={<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Full name"
                                variant="filled"
                                fullWidth
                                {...register('name', {
                                    required: 'This field is required',
                                    minLength: { value: 2, message: 'Minimum 2 characters' }
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Email"
                                variant="filled"
                                fullWidth
                                {...register('email', {
                                    required: 'This field is required',
                                    validate: validations.isEmail

                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
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
                                Enter
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink href="/auth/login" passHref legacyBehavior>
                                <Link underline='always'>
                                    Already have an account?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage

function useRegisterMutation(): [any, { isSuccess: any; error: any; isError: any; isLoading: any; data: any; }] {
    throw new Error('Function not implemented.');
}
