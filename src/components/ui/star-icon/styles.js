import styled from "styled-components";

export const StyledStarIcon = styled.span`
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
  background-color: ${(props) => props.$bgColor};
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
`;
