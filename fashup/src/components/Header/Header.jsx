import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "./logo_small.png";
import {
  Button,
  Container,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DrawerComponent from "./DrawerComponent";

// const Pages = [
//   { label: "Home", value: "home" },
//   { label: "About Us", value: "about" },
//   { label: "Our API", value: "api" },
//   { label: "Documentation", value: "docs" },
//   { label: "Help", value: "help" },
// ];

const Header = ({ onLinkClick, resetData }) => {
  const [value, setValue] = useState("home");
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  // useEffect(() => {
  //   onLinkClick(value);
  // }, [value]);

  return (
    <AppBar elevation={0} position="sticky">
      <Container disableGutters maxWidth="xl">
        <Toolbar sx={{ backgroundColor: "#BFEEED" }}>
          {isMatch ? (
            <>
              <img
                src={logo}
                alt="fashup logo"
                style={{ width: "100px", height: "auto" }}
              />
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<PersonAddAltIcon />}
                sx={{
                  marginLeft: "auto",
                  border: "1px solid #007B7B",
                  color: "#007B7B",
                  "&:hover": { color: "#007B7B", border: "1px solid #007B7B" },
                }}
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
                style={{ width: "100px", height: "auto" }}
              />
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                  onLinkClick(value);
                }}
                onClick={() => {
                  resetData();
                }}
                indicatorColor="primary"
              >
                <Tab label="Home" value="home" />
                <Tab label="About Us" value="about" />
                <Tab label="Our API" value="api" />
                <Tab label="Documentation" value="docs" />
                <Tab label="Help" value="help" />
              </Tabs>
              <Button
                variant="outlined"
                // color="primary"
                size="large"
                startIcon={<PersonAddAltIcon />}
                sx={{
                  marginLeft: "auto",
                  border: "1px solid #007B7B",
                  color: "#007B7B",
                  "&:hover": { color: "#007B7B", border: "1px solid #007B7B" },
                }}
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
