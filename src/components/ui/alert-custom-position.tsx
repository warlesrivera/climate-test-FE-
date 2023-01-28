import { Alert, Popper, PopperPlacementType,  SxProps, Theme, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface IAlertCustomPosition {
  anchorElAlert: HTMLElement | null;
  open: boolean;
  placement: PopperPlacementType;
  onClose: () => void;
  children: React.ReactNode;
  sx: SxProps<Theme>
}

/**
 * @description Renders an alert at the specific location, depending on a reference
 * @param IAlertCustomPosition 
 * @returns JSXElement 
 */
export const AlertCustomPosition = ({  anchorElAlert, open, placement, onClose, children, sx }: IAlertCustomPosition) => {

  return (
    <Popper
      placement={placement}
      anchorEl={anchorElAlert}
      open={open}
      modifiers={[{ name: 'flip', enabled: true }]}
    >
      <Grid container >
        <Grid xs={8} item sx={{ margin: '0px 20px' }}>
          <Alert
            variant='filled'
            onClose={onClose}
            severity={'info'}
            icon={<InfoIcon color='info' />}
            sx={sx}
          ></Alert>
          {children}
        </Grid>
      </Grid>
    </Popper>
  );
};
