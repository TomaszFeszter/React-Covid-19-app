import React from "react";

export const Button = ({ long, uppercase, secondary, red, blue, children }) => {
  return (
    <button
      type="button"
      className={[
        "btn",
        uppercase && "btn--uppercase",
        long && "btn--long",
        secondary && "btn--secondary",
        red && "btn--red",
        blue && "btn--blue",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
