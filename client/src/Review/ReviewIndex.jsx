import React, { useState } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';
import { ReviewModuleFlexContainer } from './Styles/ReviewStyles.js';
import ReviewBreakdown from './ReviewBreakdown/ReviewBreakdown.jsx';

const ReviewIndex = (props) => {
  return (
    <ReviewModuleFlexContainer>
      <ReviewBreakdown height={'300px'} reviewMeta={props.reviewMeta} >
      </ReviewBreakdown>
      <TileContainer reviewMeta={props.reviewMeta} reviews={props.reviews}/>
    </ReviewModuleFlexContainer>
  );
};

export default ReviewIndex;
