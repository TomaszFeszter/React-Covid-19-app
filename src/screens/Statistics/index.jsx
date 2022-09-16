import React, { useEffect, useState } from "react";
import { Dashboard } from "../../components/Dashboard";
import { Dropdown } from "../../components/Dropdown";
import { Tab, Tabs } from "../../components/Tab";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";

import { Card } from "../../components/Card";
import { countryOptions } from "../../utils/countries";
import { formatNumber } from "../../utils/formatNumber";
import { Example } from "../../components/Charts";
import { useContext } from "react";
import { CountriesContext } from "../../context/Countries";

export const Statistics = () => {
  const { casesData, setSelectedCountry, selectedCountry } =
    useContext(CountriesContext);

  return (
    <Page>
      <div className="statistics">
        <header className="header">
          <div className="header__heading">
            <Heading type="h1" white medium>
              Statistics
            </Heading>
            <Dropdown
              options={countryOptions}
              changeSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
            />
          </div>
          <Tabs>
            <Tab title="My country">
              <Tabs transparent>
                <Tab title="Total">
                  {casesData && (
                    <Dashboard>
                      <Card
                        title="Confirmed"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].confirmed
                        )}
                        big
                        yellow
                      />
                      <Card
                        title="Deaths"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].deaths
                        )}
                        big
                        red
                      />
                      <Card
                        title="Population"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].population
                        )}
                        big
                        violet
                      />
                    </Dashboard>
                  )}
                </Tab>
                <Tab title="Today">
                  {casesData && (
                    <Dashboard>
                      <Card
                        title="Confirmed daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].confirmed_daily
                        )}
                        big
                        yellow
                      />
                      <Card
                        title="Deaths daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].deaths_daily
                        )}
                        big
                        red
                      />
                      <Card
                        title="Recovered daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 1].recovered_daily
                        )}
                        green
                      />
                    </Dashboard>
                  )}
                </Tab>
                <Tab title="Yesterday">
                  {casesData && (
                    <Dashboard>
                      <Card
                        title="Confirmed daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 2].confirmed_daily
                        )}
                        big
                        yellow
                      />
                      <Card
                        title="Deaths daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 2].deaths_daily
                        )}
                        big
                        red
                      />
                      <Card
                        title="Recovered daily"
                        cases={formatNumber.format(
                          casesData[casesData.length - 2].recovered_daily
                        )}
                        green
                      />
                    </Dashboard>
                  )}
                </Tab>
              </Tabs>
            </Tab>
            <Tab title="Global">
              <Tabs transparent>
                <Tab title="Total"></Tab>
                <Tab title="Today"></Tab>
                <Tab title="Yesterday"></Tab>
              </Tabs>
            </Tab>
          </Tabs>
        </header>
        <main className="main">
          <Heading type="h2" mb={12}>
            Daily New Cases
          </Heading>
          <section className="main__container">
            {casesData && <Example data={casesData} />}
          </section>
        </main>
      </div>
    </Page>
  );
};
