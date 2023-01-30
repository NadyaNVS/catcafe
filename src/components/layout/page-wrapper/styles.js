import styled from "styled-components";

export const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.footerHeight};
`;
