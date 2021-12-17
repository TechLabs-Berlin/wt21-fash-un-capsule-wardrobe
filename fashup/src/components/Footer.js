import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

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
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="100%">
          <Grid
            conainer
            spacing={1}
            columns={8}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
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
