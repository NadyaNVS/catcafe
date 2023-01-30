import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import galleryBackground from "/src/assets/gallery-background.svg";
import galleryLeft from "/src/assets/gallery-left.svg";
import galleryRight from "/src/assets/gallery-right.svg";

export const StyledSection = styled(Section)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBackground});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 113px;
    height: 114px;
    content: "";
    background-image: url(${galleryLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::before {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url(${galleryRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;
