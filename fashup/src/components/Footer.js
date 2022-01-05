import React from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Link,
  Grid,
} from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "10%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="100%">
          <Grid
            container
            spacing={1}
            columns={8}
            display="flex"
            justifyContent="center"
            flexwrap="wrap"
          >
            <Grid item xs={8} sm={1} textAlign="center">
              Product
            </Grid>
            <Grid item xs={8} sm={1} textAlign="center">
              Features
            </Grid>
            <Grid item xs={8} sm={1} textAlign="center">
              Resources
            </Grid>
            <Grid item xs={8} sm={2} textAlign="center">
              FASH UP
            </Grid>
            <Grid item xs={8} sm={1} textAlign="center">
              About
            </Grid>
            <Grid item xs={8} sm={1} textAlign="center">
              Blog
            </Grid>
            <Grid item xs={8} sm={1} textAlign="center">
              Support
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
