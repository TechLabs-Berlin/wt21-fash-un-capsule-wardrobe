import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material/";
import apiImg from "./api.jpg";

function Api() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: "flex", flexDirection: "row", my: "50px", px: "50px" }}
    >
      <Grid container pr={"20px"}>
        <Box>
          <img
            src={apiImg}
            style={{
              maxWidth: "600px",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ fontWeight: "bold", fontSize: "50px", mb: "15px" }}
        >
          Our API
        </Grid>
        <Grid item xs={12} sx={{ mb: "15px" }}>
          We use API in our work, those consist of many helper
        </Grid>
        <Grid item md={3} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          API 1
        </Grid>
        <Grid item md={9} sx={{ mb: "15px" }}>
          WAiting for Details from WD-AI"Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Grid>
        <Grid item md={3} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          API 2
        </Grid>
        <Grid item md={9} sx={{ mb: "15px" }}>
          WAiting for Details from WD-AI"Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Grid>
      </Grid>
    </Container>
  );
}

export default Api;
