import React, { useState } from "react";
import {
  Chip,
  Box,
  Stack,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material/";
import "./ImageList.css";

export default function SearchResults({ results }) {
  const sortingOpts = [
    "Brand",
    "Type",
    "Color",
    "Size",
    "Price",
    "Material",
    "Sustainability",
  ];

  const [sorting, setSorting] = useState("");

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

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
      <Grid
        item
        my="20px"
        mx="4%"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
          {sortingOpts.map((item) => (
            <Chip
              sx={
                sortingOpts.indexOf(item) % 2
                  ? {
                      bgcolor: "#5B8FD2",
                      fontSize: "25px",
                      height: "55px",
                      fontWeight: "bold",
                      mb: "10px",
                    }
                  : {
                      bgcolor: "#54D2D2",
                      fontSize: "25px",
                      height: "55px",
                      fontWeight: "bold",
                      mb: "10px",
                    }
              }
              label={item}
              clickable
            />
          ))}
        </Stack>

        <Box sx={{ minWidth: 120, ml: "50px" }}>
          <FormControl
            variant="filled"
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: "10px",
            }}
          >
            <InputLabel color="secondary" id="sorting">
              Sort by
            </InputLabel>
            <Select
              sx={{ borderRadius: "10px" }}
              disableUnderline
              value={sorting}
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value={"brand"}>Brand</MenuItem>
              <MenuItem value={"type"}>Type</MenuItem>
              <MenuItem value={"color"}>Color</MenuItem>
              <MenuItem value={"size"}>Size</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"material"}>Material</MenuItem>
              <MenuItem value={"sustainability"}>Sustainability</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
          {results.map((item) => (
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
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                </a>
                <Typography pb="5px" variant="body2" color="text.secondary">
                  Descriptive text from vinted will be shown here very soon!
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
                    <Typography
                      pt="5px"
                      variant="body2"
                      color="green"
                      fontWeight="bold"
                    >
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
