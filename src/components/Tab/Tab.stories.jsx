import React from "react";
import Tab from ".";

export default {
  title: "Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "TEST",
};
