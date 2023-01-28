import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const bounce1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

/**
 * Screen that is shown when the app is loading
 *
 * @return {Page JSX}
 */
export const SplashScreen: FC = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 2000,
    }}
  >
    <Box
      sx={{
        height: 100,
        width: 100,
        animation: `${bounce1} 1s ease-in-out infinite`,
      }}
    >
      <Typography variant='h6' color='blue'>American |</Typography>
      <Typography sx={{ ml: 0.5 }} color='red'>humidity</Typography>
    </Box>
  </Box>
);
