import React, { useEffect, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import { CountriesContext } from "./Countries";

export const NewsContext = React.createContext(null);

export const NewsProvider = ({ children }) => {
  const { selectedCountry } = useContext(CountriesContext);
  const { data, getData, loading, error } = useFetch();

  useEffect(() => {
    if (!selectedCountry) return;
    getData(
      API.GET_COVID_NEWS_BY_COUNTRY_LANG(selectedCountry.lang.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <NewsContext.Provider value={{ data, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};
