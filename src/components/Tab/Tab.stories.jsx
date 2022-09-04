import React from "react";
import { Tab, Tabs } from ".";
import { Heading, Paragraph } from "../Text";

export default {
  title: "Tab",
  component: Tab,
};

const Template = () => (
  <Tabs>
    <Tab title="My country">
      <Heading>test</Heading>
    </Tab>
    <Tab title="Global">
      <Paragraph>test2</Paragraph>
    </Tab>
    <Tab title="testtitle">
      <Paragraph>test3</Paragraph>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
