import React, { PureComponent } from "react";
import Box from "@mui/material/Box";
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
    <Box
      component="form"
      sx={{
        m: "auto",
        display: "flex",
        flexDirection: "row",
        maxWidth: "25%",
        justifyContent: "center",
      }}
    >
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
    </Box>
  );
}

export default ItemSelect;
