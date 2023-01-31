import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/swiper.scss";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow
} from "./styles";
SwiperCore.use([Navigation, Thumbs]);

function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <StyledSwiper
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={20}
        loop
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          spaceBetween={20}
          watchSlidesProgress
          freeMode
          slidesPerView={4}
          loop
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                src={slide.src}
                alt={slide.alt}
                $active={activeSlide === index}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Gallery;
