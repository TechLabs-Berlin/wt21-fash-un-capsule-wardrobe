import React from "react";
import { Typography } from "@mui/material";
import UploadItem from "./UploadItem.svg";
import SelectItem from "./SelectItem.svg"

const MainHowTo = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" align="center">How does it work?</Typography>
      <img src={UploadItem} alt="UploadItem"/>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}> Step 1 </Typography>
      <Typography>Upload a single Picture with <br/> your favourite clothing item</Typography>
      
      <img src={SelectItem} alt="UploadItem"/>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}> Step 2 </Typography>
      <Typography>Upload a single Picture with <br/> your favourite clothing item</Typography>
    </React.Fragment>
  );
};

export default MainHowTo;
