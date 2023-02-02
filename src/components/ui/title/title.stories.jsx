import React from "react";
import Title from "./title";
import { TitleSize,TitleLevel } from "./title";

export default {
    title: 'Заголовок (Title)',
}

const Template = (args) => <Title {...args} />

export const BigTitle = Template.bind({});

BigTitle.args = {
    children: 'Заголовок',
    size: TitleSize.BIG,
    level: TitleLevel.H1
}

export const SmallTitle = Template.bind({});

SmallTitle.args = {
    children: 'Заголовок',
    size: TitleSize.SMALL,
    level: TitleLevel.H5
}