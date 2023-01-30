import React from "react";
import { StyledLogo, Text } from "./styles";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

// Логотип сайта, положим в директорию ui, так как может переиспользоваться на сайте
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
