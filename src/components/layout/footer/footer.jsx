import React from "react";
import { StyledSection, Copyright } from "./styles";
import Logo from "/src/components/ui/logo/logo";

function Footer() {
  return (
    <StyledSection>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
