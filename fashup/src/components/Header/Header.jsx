import { Button } from "@mui/material";
import React from "react";
import "./Header.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">FASH UP</div>
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
      <div className="signUp">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<PersonAddAltIcon />}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
