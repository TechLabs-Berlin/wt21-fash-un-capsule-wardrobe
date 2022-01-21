import React from "react";
import { Button, Box, AppBar, Toolbar } from "@mui/material";
import "./Header.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar className="header">
        <Toolbar>
          <Box className="logo">FASH UP</Box>
          <div className="categories">
            <ul>
              <li>
                <a href="/">Kids</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Cart</a>
              </li>
            </ul>
          </div>
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
