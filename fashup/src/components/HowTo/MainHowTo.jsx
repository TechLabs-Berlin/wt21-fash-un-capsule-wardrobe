import React from "react";
import { Grid, Typography } from "@mui/material";
import UploadItem from "./UploadItem.svg";
import NavigateToItem from "./NavigateToItem.svg";
import SelectItem from "./SelectItem.svg";
import { Box } from "@mui/system";

const MainHowTo = () => {
  return (
    <div>
      <Grid
        container
        align="center"
        sx={{
          backgroundImage:
            "linear-gradient(180deg, #fff 0%, #54D2D2 100%, #000 100%)",
        }}
      >
        {/* Heading */}
        <Grid container justifyContent="center">
          <Grid item sx={{ my: "50px" }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: "500" }}>
              How the magic works...
            </Typography>
          </Grid>
        </Grid>

        {/* Step 1 */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={8}
          sx={{ minHeight: "500px" }}
        >
          <Grid item xs={12} md={4} lg={4}>
            <Box component="div" sx={{ mt: "30px" }}>
              <img src={SelectItem} alt="UploadItem" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {" "}
                Step 1{" "}
              </Typography>
              <Typography sx={{ pt: "50px" }}>
                Upload a picture of a clothing <br /> item with the desired
                style
              </Typography>
            </Box>
          </Grid>

          {/* Step 2 */}
          <Grid item xs={12} md={4} lg={4}>
            <Box component="div" sx={{ mt: "30px" }}>
              <img src={UploadItem} alt="UploadItem" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {" "}
                Step 2{" "}
              </Typography>
              <Typography sx={{ pt: "50px" }}>
                Let us do the browsing through <br /> thousands of products on
                vinted
              </Typography>
            </Box>
          </Grid>

          {/* Step 3 */}
          <Grid item xs={12} md={4} lg={4}>
            <Box component="div" sx={{ mt: "30px" }}>
              <img src={NavigateToItem} alt="UploadItem" />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {" "}
                Step 3{" "}
              </Typography>
              <Typography sx={{ pt: "50px" }}>
                Click the photo to navigate to the <br /> onlineshop with the
                selected item{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainHowTo;
