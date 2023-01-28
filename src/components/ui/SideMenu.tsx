import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { SearchOutlined } from "@mui/icons-material"
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';
import GroupIcon from '@mui/icons-material/Group';
import { useContext } from "react";
import NextLink from 'next/link';

interface Props {
    stateDrawer: boolean;
    useStateDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;

}
export const SideMenu = ({ stateDrawer, useStateDrawer, toggleDrawer }: Props) => {

    const navigateTo = () => {
        useStateDrawer(false);
    }
    return (
        <Drawer
            open={stateDrawer}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toggleDrawer(false)}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
                    <NextLink href='/map' passHref legacyBehavior>

                        <ListItem button onClick={() => navigateTo()}>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Map'} />
                        </ListItem>
                    </NextLink>
                    <NextLink href='/history' passHref legacyBehavior>
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Mis History'} />
                    </ListItem>
                    </NextLink>
                </List>
            </Box>
        </Drawer>
    )
}