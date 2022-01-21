import React from "react";
import "./Header.css";
import logo from "./logo_tuerkis.png"
import { Button, Box, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar >
        <Toolbar sx={{ backgroundColor: "#BFEEED"}}>
          <img src={logo} alt="fashup logo" style={{width: "5%", height: "auto"}}/>
          
            <Tabs sx={{marginLeft:"auto"}} >
              <Tab label="About Us"/>
              <Tab label="Our API"/>
              <Tab label="Documentation" />
              <Tab label="Help" />
            </Tabs>
          
          
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PersonAddAltIcon />}
              sx={{marginLeft:"auto"}}
            >
              Sign Up
            </Button>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
