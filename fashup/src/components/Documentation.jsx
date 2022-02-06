import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material/";
import docImg from "./docs.jpg";

function Documentation() {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{ display: "flex", flexDirection: "row", my: "50px", px: "0" }}
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
          Fashup is an service that provide the user the flexibility and time
          saving by providing 1 to 1 search result. THe user need to provide us
          the picture (.jpg,.png) of the items that they want to search for, we
          will process the picture and return the search result to the user in
          form of the direct link of the similar looking items we found in
          Vinted
        </Grid>
        <Grid item md={4} sx={{ color: "#007B7B", fontWeight: "bold" }}>
          How our things work?
        </Grid>
        <Grid item md={8} sx={{ mb: "15px" }}>
          The algorithm works by Training the model with the large quantity of
          items image from Vinted datbase to identified similar items return us
          a result. Further research on this topic can be found{" "}
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
          <Typography sx={{ fontWeight: "bold" }}>WD Team</Typography>
          <Typography sx={{ mb: "15px" }}>
            Cem *(Alf Alfonso)
            <br />
            Roman Wiegel
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>AI Team </Typography>
          <Typography sx={{ mb: "15px" }}>
            Fabian
            <br />
            Lukas Bauerschmidt
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>UX team </Typography>
          <Typography sx={{ mb: "15px" }}>
            Kolawole Oguntil
            <br />
            Sira Cha
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Mentor</Typography>
          <Typography>Bogdan Ciobotaru</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Documentation;
