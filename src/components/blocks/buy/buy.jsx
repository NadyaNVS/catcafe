import React, { useState } from "react";
import { Form, Label, Li, Ul } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import {
  StyledSection,
  Price,
  AccordionText,
  RadioLabelForTime,
  FormItem,
  StyleTitle,
  RadioLabelForType
} from "./styles";
import { Accordion } from "../../ui/accordion/accordion";

// страница покупки
function Buy({ buyOptions: { durationOptions = [], ticketOptions = [] } }) {
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const canBuy = durationOptions.length && ticketOptions.length;
  const accordionContent = ticketOptions.map((option) => ({
    id: option.id,
    title: (
      <RadioButton
        labelComponent={RadioLabelForType}
        selectValue={selectType}
        value={option.id}
        text={option.title}
        onChange={(el) => {
          setSelectType(Number(el.target.value));
        }}
      />
    ),
    description: option.description
  }));

  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type ? type.price : 0);

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цена билета: ${price} руб.`
    );
  };

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Купить билет
      </StyleTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Продолжительность (часов)</Label>
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Тип билета</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          <Price>{price} руб.</Price>
          <Button minWidth={460} onClick={handleBuy}>
            Купить билет
          </Button>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}
export default Buy;
