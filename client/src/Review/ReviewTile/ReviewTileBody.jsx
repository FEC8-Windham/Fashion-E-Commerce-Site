import React, { useState, useEffect } from 'react';
import { Container, ImageFlexContainer } from '../Styles/ReviewStyles.js';

const ReviewTileBody = (props) => {

  const review = props.review;
  const body = review.body;

  //returns the body text up to 250 chars, showmore must be true to return full text
  const bodyDiv = () => {
    return showMore ? review.body : review.body.slice(0, 250).trim();
  };

  //flips showmore boolean on click
  const handleClick = () => {
    setShowMore(!showMore);
  };


  //maps all images to a div, renders nothing if its empty
  const images = () => {
    if (review.photos.length >= 1) {
      return (
        <ImageFlexContainer>
          {review.photos.map(photo => <img height ={80} width={80} src ={photo.url}></img>)}
        </ImageFlexContainer>
      );
    }
    return null;
  };

  const [showMore, setShowMore] = useState(false);



  return (
    <Container>
      {bodyDiv()}
      {(review.body.length > 250 && !showMore) ? <span onClick={()=>handleClick()}>...<u>show more</u></span> : null}
      {images()}
    </Container>


  );
};

export default ReviewTileBody;