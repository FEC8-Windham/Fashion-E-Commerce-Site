import React, { useState, useRef, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';




const ReviewIndex = (props) => {
  const [reviews, setReviews] = useState(props.reviews.results);
  const reviewRef = useRef();
  // const [reviews, setReviews] = useState(reviewData.results);


  useEffect(() => {
    props.getReviewDiv(reviewRef);
  }, [reviewRef]);

  // const refresh = () => {
  //   getReviews(props.reviews.product)
  //     .then(results => {
  //       setReviews(results.data.results);
  //     })
  //     .catch(err => console.log(err));
  // };

  return (

    <div ref = {reviewRef}>
      <TileContainer reviewMeta={props.reviewMeta} reviews={props.reviews}/>
    </div>
  );
};


export default ReviewIndex;
