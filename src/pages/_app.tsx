import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { lightTheme } from '../themes';
import { store } from '../store';
import { AuthProvider } from '../context/auth-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ReduxProvider store={store}>
      <AuthProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  )
}
