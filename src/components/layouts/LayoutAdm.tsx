import Head from 'next/head'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectErrorState } from '../../slices/alert-info-slice';
import { selectLoadingModal } from '../../slices/loading-modal-slice';
import { Navbar, SideMenu } from '../ui';
import LoadingModal from '../ui/loading-modal';
import SnackbarInfo from '../ui/snackbar-info';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode
}
export const LayoutAdm: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

    const [stateDrawer, setDrawerState] = useState(false);
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    console.log('ss')
                    return;
                }

                setDrawerState(open);
            };

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
                <meta name="description" content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl} />
                    )
                }
            </Head>
            <nav>
                <Navbar useStateDrawer={setDrawerState} />
            </nav>
            <SideMenu stateDrawer={stateDrawer} useStateDrawer={setDrawerState} toggleDrawer={toggleDrawer} />
            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
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
            </main>
            <footer>
                {/* TODO: my custom Footer */}
            </footer>
        </>
    )
}

