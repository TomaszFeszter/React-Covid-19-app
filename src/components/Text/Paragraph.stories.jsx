import React from "react";
import { Paragraph } from ".";

export default {
  title: "Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Text",
  white: false,
};
