import styled from "styled-components";
import { Swiper } from "swiper/react";
import Button from "/src/components/ui/button/button";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

export const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const StyledSwiperMini = styled(Swiper)`
  width: 726px;
  height: 128px;
`;

export const StyleSlide = styled.img`
  border-radius: 20px;
  width: 726px;
  height: auto;
`;

export const StyleSlideMini = styled.div`
  width: 167px;
  height: 128px;
  background-image: url("${(props) => props.src}");
  position: relative;
  filter: brightness(${(props) => (props.$active ? 100 : 50)}%);
  background-size: cover;
  border-radius: 12px;
  cursor: pointer;
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 726px;
  position: relative;
`;

export const StyledButtonLeft = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: -94px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  padding: 0;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  right: -94px;
  left: auto;
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;
