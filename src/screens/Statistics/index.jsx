import { Dashboard } from "../../components/Dashboard";
import { Tab, Tabs } from "../../components/Tab";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";
import { Card } from "../../components/Card";
import { formatNumber } from "../../utils/formatNumber";
import { Example } from "../../components/Charts";
import { useContext } from "react";
import { CountriesContext } from "../../context/Countries";
import { Header } from "../../features/Header";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";

export const Statistics = () => {
  const { data, loading, error } = useContext(CountriesContext);

  if (loading)
    return (
      <Page>
        <div className="center full-size">
          <Loader />
        </div>
      </Page>
    );

  if (error)
    return (
      <Page>
        <Error>{error.message}</Error>
      </Page>
    );

  return (
    <Page>
      <div className="statistics">
        <Header title="Statistics" dropdown>
          <Tabs>
            <Tab title="Total">
              {data && (
                <Dashboard>
                  <Card
                    title="Confirmed"
                    cases={formatNumber.format(data[data.length - 1].confirmed)}
                    big
                    yellow
                  />
                  <Card
                    title="Deaths"
                    cases={formatNumber.format(data[data.length - 1].deaths)}
                    big
                    red
                  />
                  <Card
                    title="Population"
                    cases={formatNumber.format(
                      data[data.length - 1].population
                    )}
                    big
                    violet
                  />
                </Dashboard>
              )}
            </Tab>
            <Tab title="Today">
              {data && (
                <Dashboard>
                  <Card
                    title="Confirmed daily"
                    cases={formatNumber.format(
                      data[data.length - 1].confirmed_daily
                    )}
                    big
                    yellow
                  />
                  <Card
                    title="Deaths daily"
                    cases={formatNumber.format(
                      data[data.length - 1].deaths_daily
                    )}
                    big
                    red
                  />
                  <Card
                    title="Recovered daily"
                    cases={formatNumber.format(
                      data[data.length - 1].recovered_daily
                    )}
                    green
                  />
                </Dashboard>
              )}
            </Tab>
            <Tab title="Yesterday">
              {data && (
                <Dashboard>
                  <Card
                    title="Confirmed daily"
                    cases={formatNumber.format(
                      data[data.length - 2].confirmed_daily
                    )}
                    big
                    yellow
                  />
                  <Card
                    title="Deaths daily"
                    cases={formatNumber.format(
                      data[data.length - 2].deaths_daily
                    )}
                    big
                    red
                  />
                  <Card
                    title="Recovered daily"
                    cases={formatNumber.format(
                      data[data.length - 2].recovered_daily
                    )}
                    green
                  />
                </Dashboard>
              )}
            </Tab>
          </Tabs>
        </Header>
        <main className="main">
          <Heading type="h2" mb={20}>
            Daily New Cases
          </Heading>
          <section className="main__container">
            {data && <Example data={data} />}
          </section>
        </main>
      </div>
    </Page>
  );
};
