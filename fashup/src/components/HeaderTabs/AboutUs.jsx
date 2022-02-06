import React from "react";
import { Container, Grid, Box } from "@mui/material/";
import aboutImg from "./about.jpg";

function AboutUs() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: "flex", flexDirection: "row", my: "50px", px: "50px" }}
    >
      <Grid container pr={"20px"}>
        <Box>
          <img
            src={aboutImg}
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
          About Us
        </Grid>

        <Grid item md={3} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          What is Fashup
        </Grid>
        <Grid item md={9} sx={{ mb: "15px" }}>
          Fashup is born from a group of talented individuals, who shared their
          ideas and expressed their creativity through vintage fashion and cared
          about sustainability and their pocket alike. We put an effort to
          create a joined place for you to browse the alternative choices of
          items without much of a hassle or need of luck to find the favourite
          piece. We value our ideology and our world and we're glad to put our
          little part to this circular economy where everyone benefits from the
          effort. We want you to enjoy buying and enjoy your new piece, just
          that it doesn't need to harm the earth or your pocket in the way.
        </Grid>
        <Grid item md={3} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          Contact us
        </Grid>
        <Grid item md={9} sx={{ mb: "15px" }}>
          FASHUP
          <br />
          Lutzgasse 67c
          <br />
          Berlin, 10418
          <br />
          GERMANY
          <br />
          Tel. 00548 81314
          <br />
          E-mail: fashup@fashup.de
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
