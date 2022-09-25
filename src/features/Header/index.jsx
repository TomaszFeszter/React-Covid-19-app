import React, { useContext } from "react";
import { Dropdown } from "../../components/Dropdown";
import { Heading } from "../../components/Text";
import { CountriesContext } from "../../context/Countries";
import { countryOptions } from "../../utils/countries";
import { ThemeToggle } from "../ThemeToggle";

export const Header = ({ children, title, dropdown }) => {
  const { setSelectedCountry, selectedCountry } = useContext(CountriesContext);

  return (
    <header className="header">
      <div className="header__heading">
        <Heading type="h1" white medium>
          {title}
        </Heading>
        <ThemeToggle />
        {dropdown && (
          <Dropdown
            options={countryOptions}
            changeSelectedOption={setSelectedCountry}
            selectedCountry={selectedCountry}
          />
        )}
      </div>
      {children}
    </header>
  );
};
