import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const DrawerComponent = () => {
  return (
    <React.Fragment>
        <Drawer anchor="right" open={true}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            About Us
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
    </React.Fragment>
    
    );
};

export default DrawerComponent;
