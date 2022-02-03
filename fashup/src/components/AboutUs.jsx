import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material/";
import aboutImg from "./about.jpg";

function AboutUs() {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{ display: "flex", flexDirection: "row", my: "50px", px: "0" }}
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
          Fashup is born from a group of talented individual, who shared their
          ideas and express their creativity through vintage fashion and cared
          about sustainability and their pocket alike. We put an efford to
          create a joined place for you to browse the alternatives choices of
          items without much of a hassle or need of luck to find the favourite
          piece of items. We valued our ideology and our world and glad to put
          our little part to this circular economy where everyone benefited from
          the effort.We want you to enjoy buying and enjoy your new piece, just
          that it doesnt need to harm the earth or your pocket in the way.
        </Grid>
        <Grid item md={3} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          Contact us
        </Grid>
        <Grid item md={9} sx={{ mb: "15px" }}>
          FASHUP, Lutzgasse 67c, Neumünster, Berlin, 10418, GERMANY
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
