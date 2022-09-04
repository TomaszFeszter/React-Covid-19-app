import React from "react";

const Banner = ({ imgPath, children }) => {
  return (
    <div className="banner">
      {imgPath && (
        <figure className="banner__img">
          <img src={imgPath} height="110" width="110" alt="" />
        </figure>
      )}
      <div className="banner__container">{children}</div>
    </div>
  );
};

export default Banner;
