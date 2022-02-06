import React, { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import SearchWindow from "./SearchWindow/SearchWindow";
import Header from "./Header/Header";
import ImageList from "./ImageList";
import { createTheme } from "@mui/material/styles";
import { useImageUpload } from "./SearchWindow/useImageUpload";
import MainHowTo from "./HowTo/MainHowTo";
import Footer from "./Footer/Footer";
import Documentation from "./Documentation";
import Api from "./API";
import AboutUs from "./AboutUs";
import Help from "./Help";

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

  const [linkIndex, setLinkIndex] = useState(0);
  console.log("linkIndex", linkIndex);

  const renderSwitch = (index) => {
    switch (index) {
      case "docs":
        return (
          <div>
            <Documentation />
          </div>
        );
      case "api":
        return (
          <div>
            <Api />
          </div>
        );
      case "about":
        return (
          <div>
            <AboutUs />
          </div>
        );
      case "help":
        return (
          <div>
            <Help />
          </div>
        );
      default:
        return (
          <div>
            <SearchWindow
              handleImageUpload={handleImageUpload}
              dataAvailable={dataAvailable}
              vintedUsername={vintedUsername}
              imagePaths={imagePaths}
            />

            {dataAvailable ? (
              <ImageList
                imagePaths={imagePaths}
                dataAvailable={dataAvailable}
              />
            ) : (
              <MainHowTo />
            )}
          </div>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        maxWidth="xl"
        // disableGutters
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          mt: "10px",
        }}
      >
        <Header onLinkClick={(v) => setLinkIndex(v)} />

        {renderSwitch(linkIndex)}

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
