import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SearchBar from "./SearchBar";
import ItemSelect from "./ItemSelect";

function App() {
  return (
    <div>
      <h1>FashUp</h1>
      <SearchBar />
      <ItemSelect />
    </div>
  );
}

export default App;
