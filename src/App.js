import React from "react";
import { GlobalStyle } from "./components/ResetGlobal";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
