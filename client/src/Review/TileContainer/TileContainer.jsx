import React, { useState, useEffect } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile.jsx';
import { getReviews } from '../../Controllers/reviewController.js';
import reviewData from '../../../../APIExamples/reviews.js';
import { Container, TileFlexContainer } from '../Styles/ReviewStyles.js';
import SortSelect from './SortSelect.jsx';
import { calculateRecommendation } from '../../HelperFunctions.js';

const TileContainer = (props) => {
  const [counter, setCounter] = useState(2);
  const reviews = props.reviews;
  //const [reviews, setReviews] = useState(props.reviews);
  // const [reviews, setReviews] = useState(reviewData.results);
  const [sortBy, setSortBy] = useState('relevant');

  const reviewTotal = calculateRecommendation(props.reviewMeta.recommended).total;

  const moreReview = () => {
    setCounter(prevState => {
      return prevState + 2;
    });
  };

  const refresh = (sortType = sortBy) => {
    console.log(sortBy, 'in refresh');
    setSortBy(sortType);

    var params = {product_id: props.productId, count: '10', sort: sortType};

    getReviews(params)
      .then(results => {
        props.filterReviews(results.data.results)
      })
      .catch(err => console.log(err));
  };

  return (
    <TileFlexContainer>
      <Container>{reviewTotal} Reviews, sorted by <SortSelect refresh ={refresh} /></Container>
      {reviews.slice(0, counter).map(review => <ReviewTile refresh ={refresh} key={review.review_id} review={review}/>)}
      <button onClick={moreReview}> More Reviews</button>
    </TileFlexContainer>
  );
};

export default TileContainer;

