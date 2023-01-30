import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Section;
