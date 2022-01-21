import React from "react";
import { Button, Box, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import "./Header.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar className="header">
        <Toolbar>
          <Box className="logo">FASH UP</Box>
          <Box className="categories">
            <Tabs>
              <Tab label="About Us"/>
              <Tab label="Our API"/>
              <Tab label="Documentation" />
              <Tab label="Help" />
            </Tabs>
          </Box>
          <Box className="signUp">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PersonAddAltIcon />}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
