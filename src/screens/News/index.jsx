import { Page } from "../../layouts";
import { useContext } from "react";
import { NewsContext } from "../../context/News";
import { NewsCard } from "../../components/NewsCard";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { Header } from "../../features/Header";

export const News = () => {
  const { data, loading, error } = useContext(NewsContext);

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
      <div className="news">
        <Header title="News" dropdown />
        <main className="main">
          <section className="main__content">
            <div className="main__content__container">
              {data &&
                data.articles.map((data, index) => (
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
