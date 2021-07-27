import React, { useState, useEffect } from 'react';
import { Container, ImageFlexContainer } from '../Styles/ReviewStyles.js';
import ReviewModal from '../../Helper-Components/ReviewModal.jsx';

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

  const openModal = (e) => {
    setImageUrl(e.target.currentSrc);
    setClosed(!closed);
    console.log(e, 'eeeeeeeeeee');
  };

  const closeModal = () => {
    setClosed(true);
  };


  //maps all images to a div, renders nothing if its empty
  const images = () => {
    if (review.photos.length >= 1) {
      return (
        <ImageFlexContainer>
          {review.photos.map(photo => <img onClick={openModal} key={photo.id} height ={80} width={80} src ={photo.url}></img>)}
          {<ReviewModal closeModal={closeModal} chosenPhoto={imageUrl} closed={closed}/>}
        </ImageFlexContainer>
      );
    }
    return null;
  };

  const [showMore, setShowMore] = useState(false);
  const [closed, setClosed] = useState(true);
  const [imageUrl, setImageUrl] = useState('');



  return (
    <Container>
      {bodyDiv()}
      {(review.body.length > 250 && !showMore) ? <span onClick={()=>handleClick()}>...<u>show more</u></span> : null}
      {images()}
    </Container>


  );
};

export default ReviewTileBody;