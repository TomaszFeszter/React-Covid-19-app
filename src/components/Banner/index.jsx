import React from "react";
import { withMargin } from "../../hoc/withMargin";

export const Banner = withMargin(({ imgPath, children }) => {
  return (
    <div className="banner">
      {imgPath && (
        <figure className="banner__img">
          <img src={imgPath} height="116" width="111" alt="" />
        </figure>
      )}
      <div className="banner__container">{children}</div>
    </div>
  );
});
