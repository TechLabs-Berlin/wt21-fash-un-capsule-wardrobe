import React from "react";
import { Box, Link, useMediaQuery, useTheme } from "@mui/material";
import logo from "./logo_small.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Box className="footer" component="footer" sx={{ backgroundColor: "#BFEEED" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!isMatch && 
            <Box component="div">
              <img src={logo} alt="logo footer" style={{ width: "120px", height: "auto" }} />
            </Box> 
          }
          
          
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

          {!isMatch && 
            <Box component="div" sx={{ mr: "25px" }}>
              <TwitterIcon fontSize="large" sx={{ mr: "10px" }}/>
              <FacebookIcon fontSize="large" sx={{ mr: "10px" }}/>
              <InstagramIcon fontSize="large" />
            </Box>
          }

        </Box>
      </Box>
    </div>
  );
};

export default Footer;
