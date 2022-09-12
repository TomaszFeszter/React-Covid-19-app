import { API } from "../../../utils/api";

export const casesService = {
  async getCases(country, minDate, maxDate) {
    try {
      const res = await fetch(
        API.GET_COUNTRY_CASES_BY_COUNTRY_AND_DATES(country, minDate, maxDate)
      );
      const jsonData = await res.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  },
};
