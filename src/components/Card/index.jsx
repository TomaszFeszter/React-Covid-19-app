import React from "react";
import { Paragraph, Heading } from "../Text";

const Card = ({ big, title, value, yellow, red, green, blue, violet }) => {
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
        <Heading type="value" semiBold white>
          {value}
        </Heading>
      ) : (
        <Heading type="h2" white>
          {value}
        </Heading>
      )}
    </div>
  );
};

export default Card;
