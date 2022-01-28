import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import logo from "./logo.png";
import ImagePreview from "./ImagePreview";

const SearchWindow = ({ handleImageUpload, vintedUsername, dataAvailable }) => {
  return (

    <Grid container sx={{ mt: 7 }}>


    
        <Grid
          container
          direction="row"
          className="searchWindow"
          sx={{
            backgroundImage: "linear-gradient(to right, #22f2e5, #ffc900)",
            padding: " 3% 0 15% 0",
            justifyContent: "space-between",
            height: "auto",
            margin: "0 0",
          }}
        >
          {/* Logo | Lorem Text */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              paddingLeft: "5%",
              paddingRight: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <img src={logo} alt="Fashup Logo" style={{ borderRadius: "50%", width: "30%", height: "auto" }} />
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Find your Best
              <br /> Vinted Match!
            </Typography>
            <br />
            <Typography variant="body" align="justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet.
            </Typography>
          </Grid>
          {/* ENDE: Logo | Lorem Text */}


          <Grid item xs={12} md={6} style={{ paddingRight: "5%", paddingTop: "5%", paddingLeft: "5%" }}>
              
              <Grid container direction="column" rowSpacing={2}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ImagePreview />
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

  );
};

export default SearchWindow;
