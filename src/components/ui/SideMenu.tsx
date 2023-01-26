import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { SearchOutlined} from "@mui/icons-material"
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';
import GroupIcon from '@mui/icons-material/Group';
export const SideMenu = () => {
    return (
        <Drawer
            open={false}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Search..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Map'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Mis History'} />
                    </ListItem>


                    {/* Admin */}
                    <Divider />
                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Users'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}