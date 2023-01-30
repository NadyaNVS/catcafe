import React from "react";
import Gallery from "../../ui/gallery/gallery";
import { StyledSection, StyledTitle } from "./styles";
import { TitleSize } from "/src/components/ui/title/title";

function CafeGallery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}

export default CafeGallery;
