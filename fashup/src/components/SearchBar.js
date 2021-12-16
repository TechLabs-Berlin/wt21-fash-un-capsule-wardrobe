import React from "react";

import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      label="Paste your link here"
      variant="outlined"
    />
  );
}

export default SearchBar;
