import React from "react";
import Button from "./button";

export default {
    title: 'Кнопка (Button)',
}

const Template = (args) => <Button {...args}/>;

export const NormalButton = Template.bind({});

NormalButton.args = {
    children: 'Большая кнопка',
    minWidth: 260,
}

NormalButton.argTypes = {onClick: {action: 'clicked'}}

export const SmallButton = Template.bind({});

SmallButton.args = {
    children: 'Кнопка',
    minWidth: 64,
}

SmallButton.argTypes = {onClick: {action: 'clicked'}}
