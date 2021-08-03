import React, { useState} from 'react';
import ReviewTile from '../ReviewTile/ReviewTile.jsx';
import reviewData from '../../../../APIExamples/reviews.js';
import { Container, TileFlexContainer } from '../Styles/ReviewStyles.js';
import SortSelect from './SortSelect.jsx';
import { calculateRecommendation } from '../../HelperFunctions.js';

const TileContainer = (props) => {
  const [counter, setCounter] = useState(2);
  const reviews = props.reviews;
  const reviewTotal = calculateRecommendation(props.reviewMeta.recommended).total;

  const moreReview = () => {
    setCounter(prevState => {
      return prevState + 2;
    });
  };

  return (
    <TileFlexContainer>
      <Container>{reviewTotal} Reviews, sorted by <SortSelect refresh ={props.refresh} /></Container>
      {reviews.slice(0, counter).map(review => <ReviewTile refresh ={props.refresh} key={review.review_id} review={review}/>)}
      <button onClick={moreReview}> More Reviews</button>
      <button onClick={props.open}> Add New Review</button>
    </TileFlexContainer>
  );
};

export default TileContainer;

