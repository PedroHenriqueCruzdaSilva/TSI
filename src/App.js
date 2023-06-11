import React from "react";
import { GlobalStyle } from "./components/ResetGlobal";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tecnologia Smart e Internet</title>
      </Helmet>
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
