import {
  Box,
  Modal,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';import { CircularLoading } from './circular-loading';

interface ILoadingModalProps {
  isLoading: boolean;
  isSuccess: boolean;
  description: string;
}

/**
 * Modal with a circular progress animation to represent something is loading,
 * it has the option of showing a success load
 * 
 * @param isLoading value that determines if the modal should be in screen and showing progress 
 * @param isSuccess value that determines if the modal should be in screen and showing successful load
 * @param description message to describe the loading process
 *  
 * @return {Component JSX}
 */
const LoadingModal = ({
  isLoading,
  isSuccess,
  description,
}: ILoadingModalProps) => {
  return (
    <Modal open={isLoading || isSuccess} disableAutoFocus disableEnforceFocus>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          backgroundColor: 'secondary.main',
          borderRadius: 1.5,
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {isLoading && (
          <CircularLoading sx={{ position: 'relative' }} />
        )}
        {isSuccess && <CheckIcon fontSize='large' />}
        <Typography variant="subtitle1" color="neutral.900">
          {description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoadingModal;
