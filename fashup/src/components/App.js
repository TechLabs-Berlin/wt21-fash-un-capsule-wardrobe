import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import SearchWindow from "./SearchWindow/SearchWindow";
import Header from "./Header/Header";
import ImageList from "./ImageList";
import { createTheme } from "@mui/material/styles";
import { useImageUpload } from "./SearchWindow/useImageUpload";
import MainHowTo from "./HowTo/MainHowTo";
import Footer from "./Footer/Footer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#88d2e3",
    },
    secondary: {
      main: "#a3a7a8",
    },
  },
});

function App() {
  const {
    handleImageUpload,
    dataAvailable,
    imagePaths,
    price,
    vintedURL,
    vintedUsername,
    isLoading,
    errorMassage,
  } = useImageUpload({ apiURL: "http://localhost:5000/api/process-image" });

  return (
    <ThemeProvider theme={theme}>
      
        <Container
          maxWidth="xl"
          disableGutters
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            mt: "10px",
          }}
        >
          <Header />
          <SearchWindow
            handleImageUpload={handleImageUpload}
            dataAvailable={dataAvailable}
            vintedUsername={vintedUsername}
            imagePaths={imagePaths}
          />
          <ImageList imagePaths={imagePaths} />
          <MainHowTo />
          <Footer />
        </Container>
    </ThemeProvider>
  );
}

export default App;
