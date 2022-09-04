import React from "react";
import { withMargin } from "../../hoc/withMargin";
import { Heading } from "../Text";

export const Figure = withMargin(({ imgPath, caption }) => {
  return (
    <figure className="figure">
      <img src={imgPath} width="90" height="90" />
      <Heading type="h4">{caption}</Heading>
    </figure>
  );
});
