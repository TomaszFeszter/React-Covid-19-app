import React from "react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Button",
  long: false,
  uppercase: false,
  secondary: false,
  red: false,
  blue: false,
};
