import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import SearchBar from "./SearchBar";
import ItemSelect from "./ItemSelect";
import ImageList from "./ImageList";
import StickyFooter from "./Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#51b7ae" }}>
        <Toolbar>
          <Typography variant="h5">FashUp</Typography>
        </Toolbar>
      </AppBar>
      <Box
        position="relative"
        component="form"
        sx={{
          mt: "5%",
          ml: "10%",
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          width: "80%",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ItemSelect />
          </Grid>
          <Grid item xs={12}>
            <ImageList />
          </Grid>
        </Grid>
      </Box>
      <StickyFooter />;
    </>
  );
}

export default App;
