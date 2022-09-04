import React from "react";
import { Play } from "react-feather";

const Dropdown = ({ options }) => {
  return (
    <select
      className="dropdown"
      name="country"
      // onChange={(e) => setSelectedCountry(e.target.value)}
      // value={selectedCountry}
    >
      {options.map((country) => (
        <option className="dropdown__option" key={country} value={country}>
          {country}
        </option>
      ))}
      <Play />
    </select>
  );
};

export default Dropdown;
