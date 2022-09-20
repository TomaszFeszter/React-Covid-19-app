import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../../context/News";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";
export const NewsPage = () => {
  const { newsData } = useContext(NewsContext);
  let { newsId } = useParams();

  if (!newsData || !newsId) return null;
  const { author, description, publishedAt, source, title, url, urlToImage } =
    newsData && newsData.articles[newsId];

  return (
    <Page>
      <div className="news-page">
        <header className="header">
          <div className="header__heading">
            <Heading type="h1" white medium mb={12}>
              News
            </Heading>
            <Heading type="h2" white medium mb={2}>
              Author: {author}
            </Heading>
            <Heading type="h3" white medium mb={2}>
              Published: {publishedAt.split("T")[0]}
            </Heading>
          </div>
        </header>
        <main className="main">
          <section className="main__content">
            <figure className="news-card__img">
              <img src={urlToImage} />
              <Heading type="h2" mt={8} mb={20}>
                {title}
              </Heading>
            </figure>
            <Heading type="h3" mb={10}>
              {description}
            </Heading>
            <Heading type="h4" medium>
              <a
                className="h4"
                href={url}
              >{`Link to source - ${source.name}`}</a>
            </Heading>
          </section>
        </main>
      </div>
    </Page>
  );
};
