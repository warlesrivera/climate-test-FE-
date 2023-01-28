import { Box,  Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';

import NextLink from 'next/link';
import { useAuth } from "../../hooks/use-auth";
import { useRouter } from "next/router";

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
interface Props {
    stateDrawer: boolean;
    useStateDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;

}
export const SideMenu = ({ stateDrawer, useStateDrawer, toggleDrawer }: Props) => {
    const { logout } = useAuth();
    const router = useRouter();

    const onLogout = async (): Promise<void> => {
        try {
            await logout();
            router.push('auth/login');
        } catch (err) {
            console.error(err);
        }
    };
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
                    <ListItem button onClick={onLogout}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}