import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../../context/News";
import { Heading } from "../../components/Text";
import { Page } from "../../layouts";
import { Header } from "../../features/Header";
export const NewsPage = () => {
  const { newsData } = useContext(NewsContext);
  let { newsId } = useParams();

  if (!newsData || !newsId) return null;
  const { author, description, publishedAt, source, title, url, urlToImage } =
    newsData && newsData.articles[newsId];

  return (
    <Page>
      <div className="news-page">
        <Header />
        <main className="main">
          <section className="main__content">
            <Heading type="h2" mb={8}>
              {title}
            </Heading>
            <figure className="news-card__img">
              <img src={urlToImage} width="320" height="180" alt="" />
              <Heading type="h3" medium mt={2} mb={4}>
                Author: {author}
              </Heading>
              <Heading type="h4" mb={18}>
                Published: {publishedAt.split("T")[0]}
              </Heading>
            </figure>
            <Heading type="h3" regular mb={10}>
              {description}
            </Heading>
            <Heading type="h4" regular>
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
