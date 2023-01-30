import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";
import mapMark from "/src/assets/map-mark.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 122px;
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
  display: inline-block;
  min-height: 43px;
  min-width: 292px;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  vertical-align: middle;
`;

export const Address = styled(Paragraph)`
  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background: url(${mapMark});
  }
`;
