import React, { useState } from "react";
import "./Header.css";
import logo from "./logo_tuerkis.png";
import {
  Button,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Drawer } from "@mui/material";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    
      <AppBar elevation={0} position="sticky">
        <Container disableGutters maxWidth="xl" >
          <Toolbar  sx={{ backgroundColor: "#BFEEED", pl: "0px" }}>
            {isMatch ? (
              <>
                <img
                  src={logo}
                  alt="fashup logo"
                  style={{ width: "5%", height: "auto" }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PersonAddAltIcon />}
                  sx={{ marginLeft: "auto" }}
                >
                  Sign Up
                </Button>
                <DrawerComponent />
              </>
            ) : (
              <>
                <img
                  src={logo}
                  alt="fashup logo"
                  style={{ width: "5%", height: "auto" }}
                />
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="primary"
                >
                  <Tab label="About Us" />
                  <Tab label="Our API" />
                  <Tab label="Documentation" />
                  <Tab label="Help" />
                </Tabs>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PersonAddAltIcon />}
                  sx={{ marginLeft: "auto" }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
   
  );
};

export default Header;
