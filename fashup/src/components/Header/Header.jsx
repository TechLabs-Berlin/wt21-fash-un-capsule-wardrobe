import React, { useState } from "react";
import "./Header.css";
import logo from "./logo_tuerkis.png";
import { Button, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";


const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <AppBar elevation={0}>
        <Toolbar sx={{ backgroundColor: "#BFEEED" }}>
          <img src={logo} alt="fashup logo" style={{ width: "5%", height: "auto" }} />

          <Tabs sx={{ marginLeft: "auto" }} value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary">
            <Tab label="About Us" />
            <Tab label="Our API" />
            <Tab label="Documentation" />
            <Tab label="Help" />
          </Tabs>

          <Button variant="outlined" color="primary" size="large" startIcon={<PersonAddAltIcon />} sx={{ marginLeft: "auto" }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
