import React, { useState } from "react";
import { Play } from "react-feather";
import { withMargin } from "../../hoc/withMargin";
import { Paragraph } from "../Text";

export const Dropdown = withMargin(({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleClick = (value) => {
    setSelectedOption(value);
    setDropdownActive(!dropdownActive);
  };

  return (
    <div
      className={["dropdown", dropdownActive && "dropdown--active"]
        .filter(Boolean)
        .join(" ")}
      // onChange={(e) => setSelectedCountry(e.target.value)}
      // value={selectedCountry}
    >
      <button
        className="dropdown__button"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <Paragraph type="p2">{selectedOption}</Paragraph>
        <Play size={12} />
      </button>
      <ul className="dropdown__list">
        {options.map((country) => (
          <div
            className="dropdown__list__option"
            onClick={() => handleClick(country)}
            key={country}
            value={country}
          >
            <Paragraph type="p2">{country}</Paragraph>
          </div>
        ))}
      </ul>
    </div>
  );
});
