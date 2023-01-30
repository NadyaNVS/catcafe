import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styles";

function StarCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  return (
    <StyledStarCard>
      <Figure>
        <Image
          src={image}
          className="star-card__image"
          width={313}
          height={313}
          alt="изображение кота"
        />
        <StyledStarIcon feature={feature}></StyledStarIcon>
      </Figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
}

export default StarCard;
