import React from "react";
import { Dropdown } from "../../components/Dropdown";
import { Tab, Tabs } from "../../components/Tab";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";

export const Statistics = ({ countries }) => {
  return (
    <Page>
      <div className="statistics">
        <header className="header">
          <div className="header__heading">
            <Heading type="h1" white medium>
              Statistics
            </Heading>
            <Dropdown options={countries} />
          </div>
          <Tabs>
            <Tab title="My country"></Tab>
            <Tab title="Global"></Tab>
          </Tabs>
        </header>
      </div>
    </Page>
  );
};
