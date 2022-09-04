import React from "react";
import Figure from ".";

export default {
  title: "Figure",
  component: Figure,
};

const Template = (args) => <Figure {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgPath: "https://www.pngmart.com/files/8/Health-PNG-Transparent-Image.png",
  caption: "Test",
};
