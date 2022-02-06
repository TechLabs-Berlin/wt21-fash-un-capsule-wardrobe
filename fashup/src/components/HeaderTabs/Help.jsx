import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material/";
import helpImg from "./help.jpg";

function Help() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "row",
        my: "50px",
        px: "50px",
      }}
    >
      <Grid container pr={"20px"}>
        <Grid item>
          <img
            src={helpImg}
            style={{
              maxWidth: "600px",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ fontWeight: "bold", fontSize: "50px", mb: "15px" }}
        >
          Help
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mb: "15px", color: "#007B7B", fontSize: "30px" }}
        >
          Frequently asked questions
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          Q:
        </Grid>
        <Grid item md={11} sx={{ mb: "15px", fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          A:
        </Grid>
        <Grid item md={11} sx={{ mb: "15px" }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          Q:
        </Grid>
        <Grid item md={11} sx={{ mb: "15px", fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          A:
        </Grid>
        <Grid item md={11} sx={{ mb: "15px" }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          Q:
        </Grid>
        <Grid item md={11} sx={{ mb: "15px", fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Grid>
        <Grid item md={1} sx={{ fontWeight: "bold" }}>
          A:
        </Grid>
        <Grid item md={10} sx={{ mb: "15px" }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Grid>
      </Grid>
    </Container>
  );
}

export default Help;
