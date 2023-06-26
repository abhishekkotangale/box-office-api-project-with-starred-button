import React from "react";
import { Star } from "../styled";
import NotFoundImgSrc from '../../images/not-found.png';
import { Headline, MainDataWrapper, TagList } from "./ShowMainData.styled";
const ShowMainData = ({ image, name, rating, summary, genres }) => {
    return (
      <MainDataWrapper>
        <div className="img-wrap">
          <img src={image ? image.original : NotFoundImgSrc} alt={name} />
        </div>
  
        <div className="text-side">
          <Headline>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </Headline>
  
          <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <TagList>
              {genres.map((tag,i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagList>
          </div>
        </div>
      </MainDataWrapper>
    );
  };

  export default ShowMainData;