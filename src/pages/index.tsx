import { IconButton, Typography } from '@mui/material';
import { NextPage } from 'next';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import UseLogin from '../hooks/use-login';

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
    <>
      <Typography variant='h6'>La Haus index</Typography>
      <IconButton
        aria-label="visibility"
        size="small"
        onClick={onSubmit}
      >
        <VisibilityRoundedIcon color="info" />
      </IconButton>
    </>
  );
}

export default Home;