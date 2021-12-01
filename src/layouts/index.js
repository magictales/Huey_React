import { Container } from "@mui/material";
import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import HtmlContainer from "./HtmlContainer";

export default function Layout({ children = <></>, fullWidth = false }) {
  return (
    <HtmlContainer>
      <Header />
      {Boolean(fullWidth) ? (
        <Body>{children}</Body>
      ) : (
        <Container>
          <Body>{children}</Body>
        </Container>
      )}
      <Footer />
    </HtmlContainer>
  );
}
