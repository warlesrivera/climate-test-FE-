import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

interface ISnackbarInfoProps {
  title: string|undefined;
  open: boolean;
  onClose: (event?: Event | React.SyntheticEvent, reason?: string) => void;
  alertType: AlertColor|null|undefined;
}

/**
 * Snackbar used to show an error in the bottom right side of the screen
 *
 * @param title message to show in the snackbar
 * @param open determines if the snackbar is open
 * @param onClose the method that triggers when the snackbar is closed
 *
 * @return {Component JSX}
 */
const SnackbarInfo = ({
  title,
  open,
  onClose,
  alertType,
}: ISnackbarInfoProps) => {
  const duration =  process.env.NEXT_PUBLIC_SHOW_ERROR_SECONDS;
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={duration? +duration:3000}
      onClose={onClose}
    >
      <Alert
        variant="filled"
        onClose={onClose}
        severity={alertType?alertType:'warning'}
       /*  icon={<SnackbarIcon alertType={alertType} />} */
      >
        <Typography variant="body1">{title}</Typography>
      </Alert>
    </Snackbar>
  );
};

interface ISnackbarAlertProps {
  alertType: AlertColor;
}

const SnackbarIcon = ({ alertType }: ISnackbarAlertProps) => {
  switch (alertType) {
  case 'success':
    return <CheckCircleOutlineOutlinedIcon color="success" />;
  case 'error':
    return <ErrorOutlinedIcon color="info" />;
  }
};

export default SnackbarInfo;
