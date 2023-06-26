import React from "react";
import { Star } from "../styled";
import NotFoundImgSrc from '../../images/not-found.png';
const ShowMainData = ({ image, name, rating, summary, genres }) => {
    return (
      <div>
        <div className="img-wrap">
          <img src={image ? image.original : NotFoundImgSrc} alt={name} />
        </div>
  
        <div>
          <div>
            <h1>{name}</h1>
            <div>
              <Star />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </div>
  
          <div dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <div>
              {genres.map((tag,i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ShowMainData;