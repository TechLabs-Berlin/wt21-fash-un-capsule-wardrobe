import React, { PureComponent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        m: "auto",
        display: "flex",
        flexDirection: "row",
        maxWidth: "75%",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Paste your link here"
        variant="outlined"
      />
    </Box>
  );
}

export default SearchBar;
