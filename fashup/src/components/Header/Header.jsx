import React, { useState } from "react";
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

const Header = ({ onLinkClick, resetData }) => {
  const [value, setValue] = useState("home");
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar elevation={0} position="sticky">
      <Container disableGutters maxWidth="xl">
        <Toolbar sx={{ backgroundColor: "#BFEEED", maxWidth: "100%" }}>
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
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab label="Home" value="home" />
                <Tab label="About Us" value="about" />
                <Tab label="Our API" value="api" />
                <Tab label="Documentation" value="docs" />
                <Tab label="Help" value="help" />
              </Tabs>
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
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
