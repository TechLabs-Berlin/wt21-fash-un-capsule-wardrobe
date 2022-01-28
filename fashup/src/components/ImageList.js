import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material/";
import InfoIcon from "@mui/icons-material/Info";

export default function SearchResults(props) {
  const { imagePaths } = props;

  return (
    <ImageList cols={3}>
      {imagePaths.map((item) => (
        <ImageListItem key={item.id} sx={{ padding: 0 }}>
          <img src={item.image} alt="alt" loading="lazy" />
          <ImageListItemBar
            title={item.title}
            subtitle={item.vintedUsername}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.description}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
