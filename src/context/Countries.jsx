import React from "react";
import { useEffect } from "react";
import { useStatistics } from "../screens/Statistics/services/useStatistics";
import { getCurrentDate, getPreviousWeekDate } from "../utils/getDate";

export const CountriesContext = React.createContext(null);

export const CountriesProvider = ({ children }) => {
  const {
    casesData,
    setCasesData,
    selectedCountry,
    setSelectedCountry,
    getCases,
  } = useStatistics();

  useEffect(() => {
    if (!selectedCountry) return;
    getCases(
      selectedCountry.iso3,
      getPreviousWeekDate(),
      getCurrentDate()
    ).then((data) => {
      setCasesData(data);
    });
  }, [selectedCountry]);

  return (
    <CountriesContext.Provider
      value={{ casesData, setSelectedCountry, selectedCountry }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
