import React from "react";
import { Paragraph, Heading } from "../Text";
import { withMargin } from "../../hoc/withMargin";

export const Card = withMargin(
  ({ big, title, cases, yellow, red, green, blue, violet }) => {
    return (
      <div
        className={[
          "card",
          yellow && "card--yellow",
          red && "card--red",
          green && "card--green",
          blue && "card--blue",
          violet && "card--violet",
          big && "card--big",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Paragraph type="p2" white>
          {title}
        </Paragraph>
        {big ? (
          <Heading type="cases" semiBold white>
            {cases}
          </Heading>
        ) : (
          <Heading type="h2" white>
            {cases}
          </Heading>
        )}
      </div>
    );
  }
);
