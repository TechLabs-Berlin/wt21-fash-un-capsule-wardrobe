import React from "react";
import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import logo from "./logo_small.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      width="100%"
      sx={{
        backgroundColor: "#BFEEED",
        // px: "5%",
        position: "relative",
        // bottom: "0",
        bottom: "0",
      }}
    >
      <Box
        maxWidth="100%"
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {!isMatch && (
          <Box component="div">
            <Link href="#">
              <img
                src={logo}
                alt="logo footer"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
          </Box>
        )}

        {/* Footer Menu Items */}
        <Box
          component="div"
          display="flex"
          flexDirection={isMatch ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          width={isMatch ? "stretch" : "auto"}
        >
          <Link href="#" underline="hover" m={2}>
            About Us
          </Link>
          <Link href="#" underline="hover" m={2}>
            API
          </Link>
          <Link href="#" underline="hover" m={2}>
            Documentation
          </Link>
          <Link href="#" underline="hover" m={2}>
            Help
          </Link>
        </Box>

        {!isMatch && (
          <Box component="div" sx={{ mr: "25px" }}>
            <a href="https://twitter.com/" target="blank">
              <TwitterIcon fontSize="large" sx={{ mr: "10px" }} />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <FacebookIcon fontSize="large" sx={{ mr: "10px" }} />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <InstagramIcon fontSize="large" />
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Footer;
