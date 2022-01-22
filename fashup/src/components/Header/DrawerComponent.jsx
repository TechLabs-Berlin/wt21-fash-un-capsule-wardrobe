import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
        <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                <ListItemButton onClose={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            About Us
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
    
    );
};

export default DrawerComponent;
