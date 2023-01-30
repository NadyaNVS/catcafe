import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: block;
  width: ${(props) => props.$width}px;
  box-sizing: border-box;
  padding: 40px;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 20px;
  z-index: 3;
`;

export default Form;
