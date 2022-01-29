import React from "react";
import {
  Chip,
  Stack,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material/";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function SearchResults(props) {
  const { imagePaths } = props;
  const sortingItems = [
    "Brand",
    "Type",
    "Color",
    "Size",
    "Price",
    "Material",
    "Sustainability",
  ];

  return (
    <Grid
      container
      direction="column"
      py="50px"
      sx={{ backgroundImage: "linear-gradient(to bottom, #54D2D2, #fff)" }}
    >
      <Grid item>
        <Typography
          py="30px"
          variant="h3"
          align="center"
          sx={{ fontWeight: "500" }}
        >
          All of your perfect matches!
        </Typography>
      </Grid>
      <Grid item my="20px" sx={{ justifyContent: "center", display: "flex" }}>
        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
          {sortingItems.map((item) => (
            <Chip
              sx={{
                fontSize: "25px",
                height: "55px",
                fontWeight: "bold",
                bgcolor: "#54D2D2", // Farbe für jeden zweiten Tag: bgcolor: "#7986cb
                mb: "10px",
              }}
              label={item}
              clickable
            />
          ))}
        </Stack>
        ;
      </Grid>
      <Grid item>
        <Grid
          container
          columns={4}
          rowSpacing={3}
          sx={{
            justifyContent: "space-around",
            py: "60px",
          }}
        >
          {imagePaths.map((item) => (
            <Card
              elevation={5}
              sx={{ maxWidth: 345, borderRadius: "20px", mb: "20px" }}
            >
              <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <a href={item.websiteUrl} target="_blank">
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                </a>
                <Typography pb="5px" variant="body2" color="text.secondary">
                  XS Energy Athletic Tee Super comfy material
                </Typography>
                <Grid
                  container
                  direction="row"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <Typography pt="5px" variant="body2" color="text.secondary">
                      {item.vintedUsername}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography pt="5px" variant="body2" color="green">
                      {item.price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
