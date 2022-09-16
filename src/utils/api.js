const COVID_DATA_BASE_URL =
  "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/";
const NEWS_DATA_BASE_URL = "https://newsapi.org/v2/";

export const API = {
  GET_ALL_COUNTRIES() {
    return COVID_DATA_BASE_URL + "metadata";
  },
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
};
