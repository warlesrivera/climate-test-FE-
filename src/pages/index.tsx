import { Card, CardActionArea, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { NextPage } from 'next';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import UseLogin from '../hooks/use-login';
import { LayoutAdm } from '../components/layouts';

const Home: NextPage = () => {


  const { login, loginError, isLoginError } =
    UseLogin();

  let isLoginSuccess = true;

  const onSubmit = () => {
    login({
      user: 'warlesrivera123@gmail.com',
      pass: 'Abcd123*'
    });
  };

  return (
    <LayoutAdm title={''} pageDescription={''} >

      <Typography variant='h1' component='h1'>American humidity</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>discover the humidity of each state</Typography>

      <Grid container spacing={8} justifyContent='center'>
        <Grid item xs={12} sm={8} >
          <Card >
            <CardMedia
              component='img'
              image={'assets/images/usa-map.png'}
              alt='map america'
            />
          </Card>

        </Grid>
      </Grid>
    </LayoutAdm>
  );
}

export default Home;