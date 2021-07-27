import React, { useState } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';




const ReviewIndex = (props) => {
  // const [reviews, setReviews] = useState(props.reviews.results);
  // // const [reviews, setReviews] = useState(reviewData.results);



  // const refresh = () => {
  //   getReviews(props.reviews.product)
  //     .then(results => {
  //       setReviews(results.data.results);
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <div>
      <TileContainer reviews={props.reviews}/>
    </div>
  );
};

export default ReviewIndex;
