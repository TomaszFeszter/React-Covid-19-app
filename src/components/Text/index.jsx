import React from "react";
import { withMargin } from "../../hoc/withMargin";

export const Heading = withMargin(
  ({
    additionalClasses,
    type,
    children,
    white,
    regular,
    semiBold,
    medium,
    opacity,
  }) => {
    let CustomTag = `${type ? type : "h2"}`;
    let classesTab =
      [
        type,
        white && "text-white",
        regular && "text-regular",
        medium && "text-medium",
        semiBold && "text-semi-bold",
        opacity && "opacity-06",
      ]
        .filter(Boolean)
        .join(" ") + ` ${additionalClasses}`;
    if (type === "h4") {
      return <CustomTag className={classesTab}>{children}</CustomTag>;
    }
    if (type === "h3") {
      return <CustomTag className={classesTab}>{children}</CustomTag>;
    }
    if (type === "h1" || "cases") {
      if (type === "cases") CustomTag = "h2";
      return <CustomTag className={classesTab}>{children}</CustomTag>;
    }

    return <CustomTag className="h2">{children}</CustomTag>;
  }
);

export const Paragraph = withMargin(
  ({
    additionalClasses,
    type,
    white,
    children,
    regular,
    semiBold,
    medium,
    opacity,
  }) => {
    let classesTab =
      [
        type,
        white && "text-white",
        regular && "text-regular",
        medium && "text-medium",
        semiBold && "text-semi-bold",
        opacity && "opacity-06",
      ]
        .filter(Boolean)
        .join(" ") + ` ${additionalClasses}`;

    if (type === "p3") {
      return <p className={classesTab}>{children}</p>;
    }
    if (type === "p1") {
      return <p className={classesTab}>{children}</p>;
    }

    return <p className={"p2 " + classesTab}>{children}</p>;
  }
);
