import React, { useState, useRef, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';




const ReviewIndex = (props) => {
  const [reviews, setReviews] = useState(props.reviews.results);
  // const [reviews, setReviews] = useState(reviewData.results);
  const reviewRef = useRef();

  useEffect(() => {
    props.getReviewDiv(reviewRef);
  }, [reviewRef]);

  const refresh = () => {
    getReviews(props.reviews.product)
      .then(results => {
        setReviews(results.data.results);
      })
      .catch(err => console.log(err));
  };

  return (
    <div ref = {reviewRef}>
      {reviews.map(review => <ReviewTile refresh ={refresh} key={review.review_id} review={review}/>)}
    </div>
  );
};


export default ReviewIndex;
