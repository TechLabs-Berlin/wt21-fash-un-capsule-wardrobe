import React, { useState } from "react";
import axios from "axios";
import FolderIcon from "./folder_icon_transparent.png";
import CloseIcon from "./close-icon.svg";
import { Container, Box, Button } from "@mui/material";
import "./ImagePreview.css";

const ImagePreview = ({ handleImageUpload, vintedUsername, dataAvailable }) => {
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
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>{vintedUsername ? vintedUsername : "kein Username"}</h2>

      <Box className="BoxUpload">
        <div className="image-upload">
          {!isUploaded ? (
            <>
              <label htmlFor="upload-input">
                <img
                  src={FolderIcon}
                  draggable={"false"}
                  alt="placeholder"
                  style={{ width: 100, height: 100 }}
                />
                <p style={{ color: "#444" }}>Click to upload image</p>
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
        </div>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => {
            handleImageUpload(image);
          }}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default ImagePreview;
