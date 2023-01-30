import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

function Title({
  level = 1, // уровень h1, h2 и т.д. TitleLevel
  size, // размер заголовка TitleSize
  children, // дочерний элемент, который будет отображён в заголовке
  className
}) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
