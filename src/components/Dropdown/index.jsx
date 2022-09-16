import React, { useState } from "react";
import { Triangle } from "react-feather";
import { withMargin } from "../../hoc/withMargin";
import { Paragraph } from "../Text";
import "/node_modules/flag-icons/css/flag-icons.min.css";

// lista opcjii, zmiana wartości, aktualna wartość, defaultowa wartość
export const Dropdown = withMargin(
  ({ options, changeSelectedCountry, selectedCountry }) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleClick = () => {
      setDropdownActive(!dropdownActive);
    };
    return (
      <div
        className={["dropdown", dropdownActive && "dropdown--active"]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="dropdown__button" onClick={handleClick}>
          <span
            className={`fi fi-${selectedCountry.iso2.toLowerCase()} fis `}
          ></span>
          <Paragraph type="p2" pt={2}>
            {selectedCountry.iso3}
          </Paragraph>
          <Triangle size={12} />
        </div>
        <ul className="dropdown__list">
          {options.map((country) => (
            <div
              className="dropdown__list__option"
              onClick={() => {
                handleClick();
                changeSelectedCountry(country);
              }}
              key={country.iso3}
            >
              <span
                className={`fi fi-${country.iso2.toLowerCase()} fis`}
              ></span>
              <Paragraph type="p2">{country.iso3}</Paragraph>
            </div>
          ))}
        </ul>
      </div>
    );
  }
);
