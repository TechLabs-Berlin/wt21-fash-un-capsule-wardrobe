import { Grid, TextField } from "@mui/material";
import React from "react";
import { ItemSelect } from "../ItemSelect";
import "./SearchWindow.css";

const SearchBarWrapper = (props) => {
  const { onSelect, onLinkInput, initialSelectValue } = props;

  const handleChange = (event) => {
    onLinkInput(event.target.value);
  };

  return (
    <Grid container>
      <Grid item sm={8} xs={12}>
        <TextField
          onChange={handleChange}
          fullWidth
          id="outlined-basic"
          label="Paste your link here"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <ItemSelect initialValue={initialSelectValue} onSelect={onSelect} />
      </Grid>
    </Grid>
  );
};

export default SearchBarWrapper;
