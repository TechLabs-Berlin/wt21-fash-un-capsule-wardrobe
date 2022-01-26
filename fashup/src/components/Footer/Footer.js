import React from "react";
import { Box, Link } from "@mui/material";
import logo from "./LogoFooter.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box 
      className="footer"
      component="footer"
      sx={{ backgroundColor:"#BFEEED" }}
    >
      <Box component="div"
        sx={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        
        {/* FashUpLogo */}
        <Box component="div">
          <img src={logo} alt="logo footer" style={{ width: "120px", height: "auto" }}/>
        </Box>

        {/* Footer Menu Items */}
        <Box component="div" spacing={2} >
          <Link href="#" underline="hover" m={2}>About Us</Link>
          <Link href="#" underline="hover" m={2}>API</Link>
          <Link href="#" underline="hover" m={2}>Documentation</Link>
          <Link href="#" underline="hover" m={2}>Help</Link>
        </Box>

        {/* Social Media Icons */}
        <Box component="div" sx={{mr: "25px"}}>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
