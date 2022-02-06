import { Grid, Typography } from "@mui/material";
import ImagePreview from "./ImagePreview";

const SearchWindow = ({ handleImageUpload, dataAvailable, results }) => {
  return (
    <Grid
      container
      direction="column"
      className="searchWindow"
      sx={{
        backgroundImage: "linear-gradient(to bottom, #54D2D2, #ffc900)",
        padding: " 5% 0 5% 0",
        height: "auto",
        margin: "0 0",
      }}
    >
      <Grid container direction="row" sx={{ justifyContent: "center" }}>
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
          results={results}
        />
      </Grid>
    </Grid>
  );
};

export default SearchWindow;
