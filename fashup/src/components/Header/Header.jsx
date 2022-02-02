import React, { useState } from "react";
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
  useTheme
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DrawerComponent from "./DrawerComponent";


const Pages = ["About Us", "Our API", "Documentation", "Help"];

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  

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
                sx={{ marginLeft: "auto", border: "1px solid #007B7B", color: "#007B7B", "&:hover": { color: "#007B7B", border: "1px solid #007B7B"} }}
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
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                {
                  Pages.map((page, index) => (
                    <Tab key={index} label={page} />
                  ))

                }

                {/* replaced by pages.map method above */}
                {/* <Tab label="About Us" />
                <Tab label="Our API" />
                <Tab label="Documentation" />
                <Tab label="Help" /> */}
              </Tabs>
              <Button
                variant="outlined"
                // color="primary"
                size="large"
                startIcon={<PersonAddAltIcon />}
                sx={{ marginLeft: "auto", border: "1px solid #007B7B", color: "#007B7B", "&:hover": { color: "#007B7B", border: "1px solid #007B7B"}  }}
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
