import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material/";
import docImg from "./docs.jpg";

function Documentation() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ display: "flex", flexDirection: "row", my: "50px", px: "50px" }}
    >
      <Grid container pr={"20px"}>
        <Box>
          <img
            src={docImg}
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
          Documentation
        </Grid>
        <Grid item md={4} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          What is Fashup?
        </Grid>
        <Grid item md={8} sx={{ mb: "15px" }}>
          Fashup is a service that provides the user the flexibility and time
          saving by providing 1 to 1 search result. The user needs to provide us
          the picture (.jpg,.png) of the items that they want to search for, we
          will process the picture and return the search result to the user in
          form of the direct link of the similar looking items we found on
          Vinted.com.
        </Grid>
        <Grid item md={4} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          How our things work?
        </Grid>
        <Grid item md={8} sx={{ mb: "15px" }}>
          The algorithm works by training the model with a large quantity of
          items images from the Vinted.com datbase to identify similar items and
          return a result. Further research on this topic can be found{" "}
          <a
            target="blank"
            href="https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Liu_DeepFashion_Powering_Robust_CVPR_2016_paper.pdf"
          >
            here
          </a>
          .
        </Grid>
        <Grid item sm={12} md={4} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          Our Team
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography sx={{ fontWeight: "bold" }}>AI Team </Typography>
          <Typography sx={{ mb: "15px" }}>
            Fabian Barulli
            <br />
            Lukas Bauerschmidt
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>WD Team</Typography>
          <Typography sx={{ mb: "15px" }}>
            Cem Akbulut
            <br />
            Roman Wiegel
          </Typography>

          <Typography sx={{ fontWeight: "bold" }}>UX team </Typography>
          <Typography sx={{ mb: "15px" }}>Siraprapa Chalermphao</Typography>
          <Typography sx={{ fontWeight: "bold" }}>Mentor</Typography>
          <Typography>Bogdan Ciobotaru</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Documentation;
