import React, { useState } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';
import { ReviewModuleFlexContainer } from './Styles/ReviewStyles.js';
import ReviewBreakdown from './ReviewBreakdown/ReviewBreakdown.jsx';

const ReviewIndex = (props) => {
  const [filteredRatings, setFilteredRatings] = useState([]);

  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(true);
  const [fiveStar, setFiveStar] = useState(false);

  const filters = [oneStar, twoStar, threeStar, fourStar, fiveStar];
  console.log(filters)



  const filter = () => {

    if (!filters.includes(true)) {
      return props.reviews;
    }

    var temp = props.reviews.filter(review => filters[review.rating]);

    console.log(temp)

  };

  filter()

  return (
    <ReviewModuleFlexContainer>
      <ReviewBreakdown height={'300px'} reviewMeta={props.reviewMeta} >
      </ReviewBreakdown>
      <TileContainer reviewMeta={props.reviewMeta} reviews={props.reviews}/>
    </ReviewModuleFlexContainer>
  );
};

export default ReviewIndex;
