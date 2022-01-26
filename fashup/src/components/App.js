import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import SearchWindow from "./SearchWindow/SearchWindow";
import StickyFooter from "./Footer";
import Header from "./Header/Header";
import ImageList from "./ImageList";
import { createTheme } from "@mui/material/styles";
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="App"
        style={{
          height: "auto",
          mt: "50px",
          display: "grid"
        }}
      >
        {/* <Container
          maxWidth="xl"
          // disableGutters
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            mt: "10px",
          }}
        > */}
          <Header />
          <SearchWindow />
          <MainHowTo />
          <Footer />
          {/* <ImageList /> */}
          {/* <StickyFooter /> */}
        {/* </Container> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
