import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ItemSelect() {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Item</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={item}
        label="Item"
        onChange={handleChange}
      >
        <MenuItem value={"shirt"}>Shirt</MenuItem>
        <MenuItem value={"hoodie"}>Hoodie</MenuItem>
        <MenuItem value={"sneakers"}>Sneakers</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ItemSelect;
