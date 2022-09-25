const COVID_DATA_BASE_URL = import.meta.env.VITE_COVID_DATA_BASE_URL;
const NEWS_DATA_BASE_URL = import.meta.env.VITE_NEWS_DATA_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const API = {
  GET_ALL_COUNTRIES() {
    return COVID_DATA_BASE_URL + "metadata";
  },
  //country must be formated to lowercase and iso3
  GET_COUNTRY_CASES_BY_COUNTRY_AND_DATES(country, minDate, maxDate) {
    return (
      COVID_DATA_BASE_URL +
      "countries_summary?country_iso3=" +
      country +
      "&min_date=" +
      minDate +
      "T00:00:00.000Z&max_date=" +
      maxDate +
      "T00:00:00.000Z&hide_fields=_id, combined_names, country_codes, country_iso2s"
    );
  },
  //country must be formated to lowercase and iso2
  GET_COVID_NEWS_BY_COUNTRY_LANG(country) {
    return (
      NEWS_DATA_BASE_URL +
      "everything?q=covid&apiKey=" +
      API_KEY +
      "&language=" +
      country
    );
  },
};
