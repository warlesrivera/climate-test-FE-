import { IconButton, Typography } from '@mui/material';
import { NextPage } from 'next';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import UseLogin from '../hooks/use-login';
import {Layout} from '../components/layouts';

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
    <Layout title={''} pageDescription={''} >
      <Typography variant='h1' component='h1'>American humidity</Typography>
    </Layout>
  );
}

export default Home;