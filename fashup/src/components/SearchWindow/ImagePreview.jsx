import React, { useState } from "react";
import FolderIcon from "./folder_icon_transparent.png";
import CloseIcon from "./close-icon.svg";
import { Container, Box } from "@mui/material";
import "./ImagePreview.css";

function ImagePreview() {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Upload your image</h2>

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
                src={image}
                draggable={false}
                alt="uploaded-img"
              />
            </Box>
          )}
        </div>
      </Box>
    </Container>
  );
}

export default ImagePreview;
