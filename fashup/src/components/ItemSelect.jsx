import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export const ItemSelect = (props) => {
  const { onSelect, initialValue } = props;

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Item</InputLabel>
      <Select
        autoWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={initialValue}
        label="Item"
        onChange={handleChange}
        sx={{ paddingLeft: "1%" }}
      >
        <MenuItem value={"shirt"}>Shirt</MenuItem>
        <MenuItem value={"hoodie"}>Hoodie</MenuItem>
        <MenuItem value={"sneakers"}>Sneakers</MenuItem>
      </Select>
    </FormControl>
  );
};
