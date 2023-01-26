import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Chip, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../components/layouts'
import { ErrorOutline } from '@mui/icons-material';
import { validations } from '../../utils';



type FormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterPage = () => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onRegisterForm = async ({ name, email, password }: FormData) => {

        setShowError(false);
        //const { hasError, message } = await registerUser(name, email, password);

        /* if ( hasError ) {
            setShowError(true);
            setErrorMessage( message! );
            setTimeout(() => setShowError(false), 3000);
            return;
        } */

        // Todo: navegar a la pantalla que el usuario estaba
        router.replace('/');

    }

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