import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "./logo.png";
import SearchBarWrapper from "./SearchBarWrapper";

const SearchWindow = () => {
  const onClick = (event) => {
    console.log(linkInput);
    console.log(itemSelectInput);
  };

  const [linkInput, setLinkInput] = useState("");
  const [itemSelectInput, setItemSelectInput] = useState("hoodie");

  return (
    <Grid
      container
      direction="row"
      className="searchWindow"
      sx={{
        backgroundImage: "linear-gradient(to right, #22f2e5, #ffc900)",
        padding: " 3% 0 15% 0",
        justifyContent: "space-between",
        height: "80vh",
        margin: "0 0",
      }}
    >
      <Grid
        item
        xs={12}
        md={5}
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={logo} />
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Find your Best
          <br /> Vinted Match!
        </Typography>
        <br />
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ paddingRight: "5%", paddingTop: "5%", paddingLeft: "5%" }}
      >
        <Paper
          style={{
            height: "100%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            border: "1px solid black",
          }}
        >
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>
              <Box
                sx={{
                  position: "absolute",
                  top: "4%",
                  left: "3%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <Box
                  sx={{
                    height: "10px",
                    width: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "10px",
                    width: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Box
                  sx={{
                    height: "10px",
                    width: "10px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid item sx={{ marginTop: "15%" }}>
              <SearchBarWrapper
                onSelect={setItemSelectInput}
                onLinkInput={setLinkInput}
                initialSelectValue={itemSelectInput}
              />
            </Grid>
            <Grid item sx={{ margin: "auto auto 15% auto" }}>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={onClick}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchWindow;
