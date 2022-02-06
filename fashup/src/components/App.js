import React, { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import SearchWindow from "./SearchWindow/SearchWindow";
import Header from "./Header/Header";
import ImageList from "./ImageList";
import { createTheme } from "@mui/material/styles";
import { useImageUpload } from "./SearchWindow/useImageUpload";
import MainHowTo from "./HowTo/MainHowTo";
import Footer from "./Footer/Footer";
import Documentation from "./HeaderTabs/Documentation";
import Api from "./HeaderTabs/API";
import AboutUs from "./HeaderTabs/AboutUs";
import Help from "./HeaderTabs/Help";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BFEEED",
    },
    secondary: {
      main: "#007B7B",
    },
  },
});

function App() {
  const { handleImageUpload, resetData, dataAvailable, results } =
    useImageUpload({ apiURL: "http://localhost:5000/api/process-image" });

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
              results={results}
            />

            {dataAvailable ? (
              <ImageList results={results} dataAvailable={dataAvailable} />
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
        maxWidth="100%"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
        }}
      >
        <Header onLinkClick={(v) => setLinkIndex(v)} resetData={resetData} />

        {renderSwitch(linkIndex)}

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
