import React, { useState } from "react";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { API } from "../utils/api";
import { countryOptions } from "../utils/countries";
import { getCurrentDate, getPreviousWeekDate } from "../utils/getDate";

export const CountriesContext = React.createContext(null);

export const CountriesProvider = ({ children }) => {
  const { data, getData, loading, error } = useFetch();
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  useEffect(() => {
    if (!selectedCountry) return;
    getData(
      API.GET_COUNTRY_CASES_BY_COUNTRY_AND_DATES(
        selectedCountry.iso3,
        getPreviousWeekDate(),
        getCurrentDate()
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  return (
    <CountriesContext.Provider
      value={{ data, setSelectedCountry, selectedCountry, loading, error }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
