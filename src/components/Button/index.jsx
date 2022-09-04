import React from "react";
import { withMargin } from "../../hoc/withMargin";

export const Button = withMargin(
  ({ long, uppercase, secondary, red, blue, children }) => {
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
  }
);
