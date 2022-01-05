import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "./logo.png";
import SearchBarWrapper from "./SearchBarWrapper";
import "./SearchWindow.css";

const SearchWindow = () => {
  const onClick = (event) => {
    console.log(linkInput);
    console.log(itemSelectInput);
  };

  const [linkInput, setLinkInput] = useState("");
  const [itemSelectInput, setItemSelectInput] = useState("hoodie");

  return (
    <Grid container direction="row" className="searchWindow">
      <Grid
        item
        xs={12}
        md={5}
        style={{ paddingLeft: "5%", paddingRight: "5%" }}
      >
        <img src={logo} />
        <Typography variant="h4">
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
        style={{ paddingRight: "5%", paddingTop: "10%", paddingLeft: "5%" }}
      >
        <Paper
          style={{
            height: "130%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>
              <SearchBarWrapper
                onSelect={setItemSelectInput}
                onLinkInput={setLinkInput}
                initialSelectValue={itemSelectInput}
              />
            </Grid>
            <Grid item sx={{ margin: "auto" }}>
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
