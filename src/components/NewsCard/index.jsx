import React from "react";
import { useNavigate } from "react-router-dom";
import { withMargin } from "../../hoc/withMargin";
import { Heading } from "../Text";

export const NewsCard = withMargin(
  ({ additionalClasses, imgPath, title, id }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/news/${id}`);
    };

    return (
      <div onClick={handleClick} className={`news-card ${additionalClasses}`}>
        <figure className="news-card__img">
          <img src={imgPath} />
          <Heading type="h2" mt={8}>
            {title}
          </Heading>
        </figure>
      </div>
    );
  }
);
