import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledSection } from "./styles";
// Обёртка для контента страниц
function Header({
  pageUrl // урл страницы
}) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
