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
      <Heading>Twoja stara, zapierdala</Heading>
    </Tab>
    <Tab title="Global">
      <Paragraph>Twój stary pijany</Paragraph>
    </Tab>
    <Tab title="pijany">
      <Paragraph>Nie bo twój</Paragraph>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
