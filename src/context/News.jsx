import React, { useEffect, useContext } from "react";
import { useNews } from "../screens/News/services/useNews";
import { CountriesContext } from "./Countries";

export const NewsContext = React.createContext(null);

export const NewsProvider = ({ children }) => {
  const { selectedCountry } = useContext(CountriesContext);
  const { newsData, setNewsData, getNews } = useNews();

  useEffect(() => {
    if (!selectedCountry) return;
    getNews(selectedCountry.lang.toLowerCase()).then((data) => {
      setNewsData(data);
    });
  }, [selectedCountry]);

  return (
    <NewsContext.Provider value={{ newsData }}>{children}</NewsContext.Provider>
  );
};
