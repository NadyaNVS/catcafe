import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {links.filter((link) => link.to !== pageUrl).map((link) => link.button)}
      </nav>
    </nav>
  );
}

export default Nav;
