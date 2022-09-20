import { useContext, useState } from "react";
import { CountriesContext } from "../../../context/Countries";
import { API } from "../../../utils/api";
// TODO useNews and useStatistics are practically the same,
// merge them together into one hook and get data in separate contexts
export const useNews = () => {
  const [newsData, setNewsData] = useState(null);

  const getNews = async (selectedCountry) => {
    try {
      const res = await fetch(
        API.GET_COVID_NEWS_BY_COUNTRY_LANG(selectedCountry)
      );
      const jsonData = await res.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    newsData,
    setNewsData,
    getNews,
  };
};
