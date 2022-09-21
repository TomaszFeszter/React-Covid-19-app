import React from "react";

export const Toggle = ({
  value,
  leftIcon,
  rightIcon,
  handleClick,
  ...rest
}) => {
  return (
    <div className="switch" onClick={handleClick}>
      <input type="hidden" value={value} {...rest} />
      <div
        className={`switch__thumb ${value && "switch__thumb--active"}`}
      ></div>
      {(leftIcon || rightIcon) && (
        <>
          <span className="switch__icon">{leftIcon}</span>
          <span className="switch__icon">{rightIcon}</span>
        </>
      )}
    </div>
  );
};
