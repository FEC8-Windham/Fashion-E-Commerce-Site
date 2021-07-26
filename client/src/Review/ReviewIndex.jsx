import React from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';




const ReviewIndex = (props) => {

  const reviews = props.reviews;
  //alert(typeof reviews,'reeeeee')

  return (
    <div>
      {reviews.map(review => <ReviewTile review={review}/>)}
    </div>
  );
};

export default ReviewIndex;
