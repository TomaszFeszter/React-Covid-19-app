import React from "react";
import { Dropdown } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: ["USA", "PL", "DE"],
};
