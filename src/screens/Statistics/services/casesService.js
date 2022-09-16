import { useState } from "react";
import { API } from "../../../utils/api";
import { countryOptions } from "../../../utils/countries";

export const casesService = () => {
  const [casesData, setCasesData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[1]);

  const getCases = async (selectedCountry, minDate, maxDate) => {
    try {
      const res = await fetch(
        API.GET_COUNTRY_CASES_BY_COUNTRY_AND_DATES(
          selectedCountry,
          minDate,
          maxDate
        )
      );
      const jsonData = await res.json();
      return jsonData;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    casesData,
    setCasesData,
    selectedCountry,
    setSelectedCountry,
    getCases,
  };
};
