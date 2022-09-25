import React from "react";
import { Banner } from ".";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgPath: "https://www.pngmart.com/files/8/Health-PNG-Transparent-Image.png",
};
