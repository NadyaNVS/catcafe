import React from "react";
import Gallery from "./gallery";
import gallery from "/src/mocks/gallery"

export default {
    title:'Галерея (Gallery)'
}

const Template = (args) => <Gallery {...args}/>

export const ProductGallery  = Template.bind({});

ProductGallery.args = {
    slides: gallery
}