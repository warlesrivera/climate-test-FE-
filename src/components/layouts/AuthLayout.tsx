import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import SnackbarInfo from '../ui/snackbar-info';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorState } from '../../slices/alert-info-slice';
import { selectLoadingModal } from '../../slices/loading-modal-slice';
import LoadingModal from '../ui/loading-modal';

interface Props {
    title: string;
    children: React.ReactNode

}

 const AuthLayout: FC<Props> = ({ children, title }) => {
    const dispatch = useDispatch();
    const { message, isActive, alertType } = useSelector(selectErrorState);

    const {
        isLoading,
        isSuccess,
        description: loadingModalDescription,
      } = useSelector(selectLoadingModal);
    
    
    const onCloseErrorSnackbar = (
        event?: Event | React.SyntheticEvent,
        reason?: string
      ) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch(clearError());
    };
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
                    <SnackbarInfo
                        title={message}
                        open={isActive}
                        alertType={alertType}
                        onClose={onCloseErrorSnackbar}
                    />

                    <LoadingModal
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        description={loadingModalDescription}
                    />
                    {children}
                </Box>
            </main>

        </>
    )
 }
export default AuthLayout;