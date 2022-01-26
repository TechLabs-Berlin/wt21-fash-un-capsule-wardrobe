import { Grid, Typography } from "@mui/material";
import logo from "./logo.png";
import ImagePreview from "./ImagePreview";

const SearchWindow = ({
  handleImageUpload,
  vintedUsername,
  dataAvailable,
  imagePaths,
}) => {
  return (
    <Grid
      container
      direction="column"
      className="searchWindow"
      sx={{
        backgroundImage: "linear-gradient(to bottom, #22f2e5, #ffc900)",
        padding: " 10% 0 5% 0",
        height: "auto",
        margin: "0 0",
      }}
    >
      <Grid container direction="row" sx={{ justifyContent: "center" }}>
        {/* <img
          src={logo}
          alt="Fashup Logo"
          style={{
            borderRadius: "50%",
            maxWidth: "180px",
          }}
        /> */}
        <Grid
          item
          sx={{
            paddingLeft: "5%",
            paddingRight: "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Find your Best
            <br /> Vinted Match!
          </Typography>
          <br />
          <Typography variant="body" align="justify" sx={{ maxWidth: "306px" }}>
            Tired of browsing endlessly just to find the right pre-owned piece?
            Find it easily here with FashUp!
          </Typography>
          <br />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImagePreview
          handleImageUpload={handleImageUpload}
          dataAvailable={dataAvailable}
          vintedUsername={vintedUsername}
          imagePaths={imagePaths}
        />
      </Grid>
    </Grid>
  );
};

export default SearchWindow;
