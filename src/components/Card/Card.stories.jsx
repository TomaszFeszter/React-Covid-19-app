import React from "react";
import { Card } from ".";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "TEST",
  value: "336,851",
  big: false,
  yellow: true,
  red: false,
  green: false,
  blue: false,
  violet: false,
};
