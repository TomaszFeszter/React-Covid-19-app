import React from "react";
import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Text",
  type: "h1",
  white: false,
};
