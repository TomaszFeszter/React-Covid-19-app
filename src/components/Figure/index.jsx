import React from "react";
import { Heading } from "../Text";

const Figure = ({ imgPath, caption }) => {
  return (
    <figure className="figure">
      <img src={imgPath} width="90" height="90" />
      <Heading type="h4">{caption}</Heading>
    </figure>
  );
};

export default Figure;
