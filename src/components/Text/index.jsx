import React from "react";

export const Heading = ({ type, children, white }) => {
  let CustomTag = `${type ? type : "h2"}`;
  let classesTab = [type, white && "text-white"].filter(Boolean).join(" ");
  if (type === "h4") {
    return <CustomTag className={classesTab}>{children}</CustomTag>;
  }
  if (type === "h3") {
    return <CustomTag className={classesTab}>{children}</CustomTag>;
  }
  if (type === "h1") {
    return <CustomTag className={classesTab}>{children}</CustomTag>;
  }

  return <CustomTag className="h2">{children}</CustomTag>;
};
export const Paragraph = ({ type, white, children }) => {
  let classesTab = [type, white && "text-white"].filter(Boolean).join(" ");

  if (type === "p3") {
    return <p className={classesTab}>{children}</p>;
  }
  if (type === "p1") {
    return <p className={classesTab}>{children}</p>;
  }

  return <p className={classesTab + " p2"}>{children}</p>;
};
