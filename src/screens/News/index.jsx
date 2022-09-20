import { Dropdown } from "../../components/Dropdown";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";
import { countryOptions } from "../../utils/countries";
import { useContext } from "react";
import { CountriesContext } from "../../context/Countries";
import { NewsContext } from "../../context/News";
import { NewsCard } from "../../components/NewsCard";

export const News = () => {
  const { setSelectedCountry, selectedCountry } = useContext(CountriesContext);
  const { newsData } = useContext(NewsContext);

  return (
    <Page>
      <div className="news">
        <header className="header">
          <div className="header__heading">
            <Heading type="h1" white medium>
              News
            </Heading>
            <Dropdown
              options={countryOptions}
              changeSelectedOption={setSelectedCountry}
              selectedCountry={selectedCountry}
            />
          </div>
        </header>
        <main className="main">
          <section className="main__content">
            <div className="main__content__container">
              {newsData &&
                newsData.articles.map((data, index) => (
                  <NewsCard
                    mb={18}
                    key={index}
                    imgPath={data.urlToImage}
                    title={data.title}
                    id={index}
                  />
                ))}
            </div>
          </section>
        </main>
      </div>
    </Page>
  );
};
