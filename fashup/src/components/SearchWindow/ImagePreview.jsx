import React, { useState } from "react";
import PlaceholderIcon from "./placeholder.svg";
import CloseIcon from "./close-icon.svg";
import { Grid, Box, Button } from "@mui/material";
import "./ImagePreview.css";

const ImagePreview = ({ handleImageUpload }) => {
  const [image, setImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      setImage(e.target.files[0]);

      reader.onload = function (e) {
        setImagePreview(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid item className="BoxUpload">
        <Box className="image-upload">
          {!isUploaded ? (
            <>
              <label htmlFor="upload-input">
                <img
                  src={PlaceholderIcon}
                  draggable={"false"}
                  alt="placeholder"
                  style={{
                    width: "auto",
                    height: "auto",
                    paddingTop: "10px",
                  }}
                />
                <p
                  style={{
                    color: "#444",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Click here to upload image
                </p>
              </label>

              <input
                id="upload-input"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <Box className="ImagePreview">
              <img
                className="close-icon"
                src={CloseIcon}
                alt="CloseIcon"
                onClick={() => {
                  setIsUploaded(false);
                  setImage(null);
                }}
              />
              <img
                id="uploaded-image"
                src={imagePreview}
                draggable={false}
                alt="uploaded-img"
              />
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          disabled={!isUploaded ? true : false}
          onClick={() => {
            handleImageUpload(image);
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default ImagePreview;
